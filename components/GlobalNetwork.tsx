"use client";

import React, { useRef, Suspense, useEffect, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
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
  const theta = lng * (Math.PI / 180); 

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

// --- Sub-Components: Markers & Arcs ---

const Marker = ({ name, coords, radius, globeMeshRef }: { name: string, coords: number[], radius: number, globeMeshRef: React.RefObject<THREE.Mesh> }) => {
  const pos = useMemo(() => get3DCoordinates(coords[0], coords[1], radius), [coords, radius]);
  const normal = useMemo(() => pos.clone().normalize(), [pos]);
  const lookAtTarget = useMemo(() => pos.clone().add(normal), [pos, normal]);

  const ringRef = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 1.5;
    if (ringRef.current) {
      const scale = 1 + (t % 2) * 2;
      ringRef.current.scale.setScalar(scale);
      (ringRef.current.material as THREE.Material).opacity = Math.max(0, 1 - (t % 2));
    }
    if (ringRef2.current) {
      const t2 = t + 1;
      const scale = 1 + (t2 % 2) * 2;
      ringRef2.current.scale.setScalar(scale);
      (ringRef2.current.material as THREE.Material).opacity = Math.max(0, 1 - (t2 % 2));
    }
  });

  return (
    <group position={pos}>
      <mesh onUpdate={(m) => m.lookAt(lookAtTarget)}>
        <circleGeometry args={[0.08, 32]} />
        <meshBasicMaterial color="#8cc63f" side={THREE.DoubleSide} />
      </mesh>
      
      <mesh ref={ringRef} onUpdate={(m) => m.lookAt(lookAtTarget)}>
        <ringGeometry args={[0.08, 0.14, 32]} />
        <meshBasicMaterial color="#8cc63f" transparent opacity={1} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={ringRef2} onUpdate={(m) => m.lookAt(lookAtTarget)}>
        <ringGeometry args={[0.08, 0.14, 32]} />
        <meshBasicMaterial color="#8cc63f" transparent opacity={1} side={THREE.DoubleSide} />
      </mesh>

      <Html distanceFactor={8} center occlude={[globeMeshRef]} zIndexRange={[100, 0]}>
        <div className="bg-black/75 backdrop-blur-md px-2 py-0.5 rounded-full shadow-lg text-[6px] font-[800] uppercase tracking-widest text-white border border-white/10 whitespace-nowrap mt-4 pointer-events-none flex items-center gap-1 transition-transform">
          <div className="w-[3px] h-[3px] rounded-full bg-[#8cc63f] shadow-[0_0_4px_#8cc63f]"></div>
          {name}
        </div>
      </Html>
    </group>
  );
};

const Arc = ({ start, end, radius }: { start: number[], end: number[], radius: number }) => {
  const curve = useMemo(() => {
    const vStart = get3DCoordinates(start[0], start[1], radius);
    const vEnd = get3DCoordinates(end[0], end[1], radius);
    const distance = vStart.distanceTo(vEnd);
    const vMid = vStart.clone().lerp(vEnd, 0.5);
    vMid.normalize().multiplyScalar(radius + distance * 0.35); 
    return new THREE.QuadraticBezierCurve3(vStart, vMid, vEnd);
  }, [start, end, radius]);

  return (
    <mesh>
      <tubeGeometry args={[curve, 44, 0.015, 8, false]} />
      <meshBasicMaterial color="#8cc63f" transparent opacity={0.35} />
    </mesh>
  );
};

// --- Sub-Component: Globe Scene ---
const Globe = () => {
  const globeRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const [globeTexture, setGlobeTexture] = useState<THREE.CanvasTexture | null>(null);
  const { size } = useThree();

  // Gentle rotation
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001; // Smooth sophisticated speed
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

        // Deep, rich ocean color for high contrast
        context.fillStyle = "#cce0ff";
        context.fillRect(0, 0, 4096, 2048);

        data.features.forEach((feature: any) => {
          const name = feature.properties.name || feature.properties.ADMIN;
          const highlighted = isHighlighted(name);

          context.beginPath();
          path(feature);
          
          // Crisp white landmasses, vibrant brand blue for highlighted
          context.fillStyle = highlighted ? "#1a5ab5" : "#ffffff";
          context.fill();

          // Stronger borders so continents are clearly visible
          context.strokeStyle = highlighted ? "#124285" : "#a3c2f0";
          context.lineWidth = highlighted ? 2 : 1.5;
          context.stroke();
        });

        const texture = new THREE.CanvasTexture(canvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = 16;
        setGlobeTexture(texture);
      })
      .catch((err) => console.error("Error loading geojson", err));
  }, []);

  const scale = size.width < 768 ? (size.width < 400 ? 0.6 : 0.75) : 1;
  const radius = 5;

  // Define network connections
  const ARCS = useMemo(() => [
    { start: MARKERS.find(m => m.name === "UAE")!.coords, end: MARKERS.find(m => m.name === "USA")!.coords },
    { start: MARKERS.find(m => m.name === "UAE")!.coords, end: MARKERS.find(m => m.name === "EUROPE")!.coords },
    { start: MARKERS.find(m => m.name === "UAE")!.coords, end: MARKERS.find(m => m.name === "INDIA")!.coords },
    { start: MARKERS.find(m => m.name === "UAE")!.coords, end: MARKERS.find(m => m.name === "CHINA")!.coords },
    { start: MARKERS.find(m => m.name === "USA")!.coords, end: MARKERS.find(m => m.name === "EUROPE")!.coords },
    { start: MARKERS.find(m => m.name === "INDIA")!.coords, end: MARKERS.find(m => m.name === "CHINA")!.coords },
    { start: MARKERS.find(m => m.name === "CHINA")!.coords, end: MARKERS.find(m => m.name === "RUSSIA")!.coords },
    { start: MARKERS.find(m => m.name === "EUROPE")!.coords, end: MARKERS.find(m => m.name === "RUSSIA")!.coords },
  ], []);

  return (
    <group ref={globeRef} rotation={[0, -Math.PI / 2, 0]} scale={scale}>


      {/* Main Vector Globe */}
      {globeTexture && (
        <mesh ref={meshRef}>
          <sphereGeometry args={[radius, 128, 128]} />
          <meshPhysicalMaterial 
            map={globeTexture}
            roughness={0.4}
            metalness={0.1}
            clearcoat={0.2}
            clearcoatRoughness={0.3}
          />
        </mesh>
      )}

      {/* Interactive Markers */}
      {globeTexture && MARKERS.map((marker, i) => (
        <Marker key={`marker-${i}`} name={marker.name} coords={marker.coords} radius={radius} globeMeshRef={meshRef} />
      ))}

      {/* Glowing Connections */}
      {globeTexture && ARCS.map((arc, i) => (
        <Arc key={`arc-${i}`} start={arc.start} end={arc.end} radius={radius} />
      ))}
    </group>
  );
};

// --- Main Exported Component ---
const GlobalNetwork = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#f0f0f0] overflow-hidden flex flex-col items-center">
      
      {/* Background Radial Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04),transparent_55%)] pointer-events-none" />

      {/* Heading Area */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full z-20 text-center pt-[70px] px-4 flex flex-col items-center"
      >
        <h2 className="font-heading font-black text-black text-3xl md:text-5xl lg:text-6xl uppercase tracking-tighter mt-[12px] max-w-6xl mx-auto drop-shadow-sm">
          CRAFTING EXPERIENCES BEYOND BORDERS
        </h2>
      </motion.div>

      {/* 3D Globe Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="relative w-full max-w-[1600px] h-[50vh] md:h-[65vh] mt-8 z-10 flex items-center justify-center mb-10"
      >
        <Canvas 
          key="globe-canvas-v8"
          camera={{ position: [0, 0, 14], fov: 42 }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
          dpr={[1, 2]}
        >
          <ambientLight intensity={1.2} />
          {/* Enhanced lighting for physical material */}
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
          <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#e0e0e0" />
          <pointLight position={[0, 15, 0]} intensity={0.5} />
          
          <Suspense fallback={null}>
            <Globe />
          </Suspense>
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            minPolarAngle={Math.PI / 3} 
            maxPolarAngle={Math.PI / 1.5} 
            rotateSpeed={0.6}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>

        {/* Soft shadow below the globe */}
        <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-[60%] h-[20px] md:h-[40px] bg-black/10 blur-xl rounded-full pointer-events-none" />
      </motion.div>

    </section>
  );
};

export default GlobalNetwork;
