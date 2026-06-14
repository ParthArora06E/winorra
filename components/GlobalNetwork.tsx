"use client";

import React, { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html, Text } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import * as d3 from "d3-geo";

const MARKERS = [
  { name: "USA", coords: [-98.5795, 39.8283] }, // Longitude, Latitude
  { name: "EUROPE", coords: [15.2551, 54.5260] },
  { name: "UAE", coords: [53.8478, 23.4241] },
  { name: "INDIA", coords: [78.9629, 20.5937] },
  { name: "CHINA", coords: [104.1954, 35.8617] },
  { name: "RUSSIA", coords: [105.3188, 61.5240] }
];

// Helper to convert lat/lng to 3D sphere coordinates
const get3DCoordinates = (lng: number, lat: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = lng * (Math.PI / 180); // Exact match for SphereGeometry UVs

  const x = radius * Math.sin(phi) * Math.cos(theta);
  const z = -radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
};

const EUROPEAN_COUNTRIES = [
  "ALBANIA", "ANDORRA", "AUSTRIA", "BELARUS", "BELGIUM", "BOSNIA AND HERZEGOVINA", 
  "BULGARIA", "CROATIA", "CYPRUS", "CZECHIA", "DENMARK", "ESTONIA", "FINLAND", "FRANCE", 
  "GERMANY", "GREECE", "HUNGARY", "ICELAND", "IRELAND", "ITALY", "KOSOVO", "LATVIA", 
  "LIECHTENSTEIN", "LITHUANIA", "LUXEMBOURG", "MALTA", "MOLDOVA", "MONACO", 
  "MONTENEGRO", "NETHERLANDS", "NORTH MACEDONIA", "NORWAY", "POLAND", "PORTUGAL", 
  "ROMANIA", "SAN MARINO", "SERBIA", "SLOVAKIA", "SLOVENIA", "SPAIN", "SWEDEN", 
  "SWITZERLAND", "UKRAINE", "UNITED KINGDOM", "VATICAN"
];

const HIGHLIGHTED_COUNTRIES = [
  "UNITED STATES OF AMERICA", 
  "UNITED ARAB EMIRATES", 
  "INDIA", 
  "CHINA", 
  "RUSSIA"
];

const isHighlighted = (name: string) => {
  if (!name) return false;
  const upper = name.toUpperCase();
  return HIGHLIGHTED_COUNTRIES.includes(upper) || EUROPEAN_COUNTRIES.includes(upper);
};

const MANUAL_CENTERS: Record<string, [number, number]> = {
  "UNITED STATES OF AMERICA": [-98.5795, 39.8283], // mainland center
  "UNITED ARAB EMIRATES": [53.8478, 23.4241],
  "INDIA": [78.9629, 20.5937],
  "CHINA": [104.1954, 35.8617],
  "RUSSIA": [100.3188, 61.5240],
  "FRANCE": [2.2137, 46.2276], // exclude overseas territories
};

const DISPLAY_NAMES: Record<string, string> = {
  "UNITED STATES OF AMERICA": "USA",
  "UNITED ARAB EMIRATES": "UAE",
  "UNITED KINGDOM": "UK",
};

// --- Sub-Component: Globe Scene ---
const Globe = () => {
  const globeRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const [globeTexture, setGlobeTexture] = useState<THREE.CanvasTexture | null>(null);
  const [countryLabels, setCountryLabels] = useState<{name: string, coords: [number, number], isHigh: boolean}[]>([]);
  const { size } = useThree();

  // Gentle rotation (increased speed)
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.0015;
    }
  });

  useEffect(() => {
    fetch("/countries.geojson")
      .then((res) => res.json())
      .then((data) => {
        const canvas = document.createElement("canvas");
        canvas.width = 4096; // High res for crisp borders
        canvas.height = 2048;
        const context = canvas.getContext("2d");
        if (!context) return;

        const projection = d3.geoEquirectangular().translate([2048, 1024]).scale(651.8986);
        const path = d3.geoPath().projection(projection).context(context);

        // Fill the entire canvas with the light blue-grey ocean color
        context.fillStyle = "#dce4ed";
        context.fillRect(0, 0, 4096, 2048);

        const labels: {name: string, coords: [number, number], isHigh: boolean}[] = [];
        

        data.features.forEach((feature: any) => {
          const name = feature.properties.name || feature.properties.ADMIN;
          const highlighted = isHighlighted(name);

          context.beginPath();
          path(feature);
          
          // Highlighted countries get solid blue, others get pure white
          context.fillStyle = highlighted ? "#1a5ab5" : "#ffffff";
          context.fill();

          // Thin crisp borders for all countries
          context.strokeStyle = "#b5bcc5";
          context.lineWidth = 1;
          context.stroke();

          // Collect country names for labels
          if (name && name !== "Antarctica") {
            const upperName = name.toUpperCase();
            const bounds = path.bounds(feature);
            if (bounds && bounds[0] && bounds[1] && !isNaN(bounds[0][0])) {
              const w = bounds[1][0] - bounds[0][0];
              const h = bounds[1][1] - bounds[0][1];
              
              // Always label highlighted countries, or large countries
              if (highlighted || w * h > 1500) {
                let centerCoords: [number, number];
                if (MANUAL_CENTERS[upperName]) {
                  centerCoords = MANUAL_CENTERS[upperName];
                } else {
                  const centroid = d3.geoCentroid(feature);
                  centerCoords = [centroid[0], centroid[1]];
                }
                
                const displayName = DISPLAY_NAMES[upperName] || upperName;
                
                labels.push({ name: displayName, coords: centerCoords, isHigh: highlighted });
              }
            }
          }
        });
        
        setCountryLabels(labels);

        const texture = new THREE.CanvasTexture(canvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = 16;
        setGlobeTexture(texture);
      })
      .catch((err) => console.error("Error loading geojson", err));
  }, []);

  const scale = size.width < 768 ? (size.width < 400 ? 0.6 : 0.75) : 1;

  return (
    <group ref={globeRef} rotation={[0, -Math.PI / 2, 0]} scale={scale}>
      {/* Main Globe */}
      {globeTexture && (
        <mesh>
          <sphereGeometry args={[5, 64, 64]} />
          <meshStandardMaterial 
            map={globeTexture}
            roughness={1}
            metalness={0}
          />
        </mesh>
      )}


      {/* WebGL Country Labels (Subtle & Performant) */}
      {countryLabels.map((label, index) => {
        
        const pos = get3DCoordinates(label.coords[0], label.coords[1], 5.02);
        
        // Make text face outward from the sphere and stay perfectly upright
        const dummy = new THREE.Object3D();
        dummy.position.copy(pos);
        // Object3D.lookAt makes the +Z axis (the front of the Text) point towards the target.
        // By pointing it outward, the text faces the camera correctly without being mirrored.
        dummy.lookAt(pos.clone().multiplyScalar(2));

        return (
          <Text
            key={`lbl-${index}`}
            position={pos}
            quaternion={dummy.quaternion}
            color={label.isHigh ? "#ffffff" : "#333333"}
            fontSize={label.isHigh ? 0.085 : 0.06}
            letterSpacing={0.1}
            anchorX="center"
            anchorY="middle"
            fontWeight="bold"
            outlineWidth={0.0015}
            outlineColor={label.isHigh ? "#ffffff" : "#333333"}
          >
            {label.name}
          </Text>
        );
      })}
    </group>
  );
};

// --- Main Exported Component ---
const GlobalNetwork = () => {
  return (
    <section className="relative w-full min-h-[860px] md:h-[920px] bg-[#f0f0f0] overflow-hidden flex flex-col items-center">
      
      {/* Background Radial Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04),transparent_55%)] pointer-events-none" />

      {/* Heading Area (y=70px approx via padding/margin) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full z-20 text-center pt-[70px] px-4 flex flex-col items-center"
      >

        <p className="text-[#b69238] tracking-[5px] md:tracking-[10px] text-[10px] md:text-[12px] uppercase font-extrabold mt-[12px]">
          Crafting Experiences Beyond Borders
        </p>
      </motion.div>

      {/* 3D Globe Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="relative w-full max-w-[1200px] h-[330px] md:h-[520px] lg:h-[680px] mt-10 md:mt-[60px] z-10 flex-1 flex items-center justify-center mb-[60px]"
      >
        <Canvas 
          camera={{ position: [0, 0, 13], fov: 45 }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
          dpr={[1, 2]}
        >
          <ambientLight intensity={1.2} />
          {/* Subtle rim light / highlight */}
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#e0e0e0" />
          
          <Suspense fallback={null}>
            <Globe />
          </Suspense>
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            minPolarAngle={Math.PI / 3} 
            maxPolarAngle={Math.PI / 1.5} 
            rotateSpeed={0.6}
          />
        </Canvas>

        {/* Soft shadow below the globe */}
        <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-[60%] h-[20px] md:h-[40px] bg-black/10 blur-xl rounded-full pointer-events-none" />
      </motion.div>

    </section>
  );
};

export default GlobalNetwork;
