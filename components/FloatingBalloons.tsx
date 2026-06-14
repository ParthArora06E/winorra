"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const BALLOON_COUNT = 25;

const FloatingBalloons = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const balloons = containerRef.current.querySelectorAll(".balloon");
    
    balloons.forEach((balloon: Element) => {
      const delay: number = Math.random() * 5;
      const duration: number = 15 + Math.random() * 20;
      
      gsap.to(balloon as HTMLElement, {
        y: "-=100vh",
        x: `+=${Math.random() * 200 - 100}`,
        rotation: Math.random() * 360,
        duration: duration,
        repeat: -1,
        ease: "none",
        delay: -delay,
      });

    });

    return () => {
      gsap.killTweensOf(balloons);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {[...Array(BALLOON_COUNT)].map((_, i) => {
        const size = 20 + Math.random() * 150;
        const opacity = 0.1 + Math.random() * 0.3;
        const blur = Math.random() * 10;
        const left = Math.random() * 100;
        const top = 100 + Math.random() * 100; // Start below the screen

        return (
          <div
            key={i}
            className="balloon absolute rounded-full border border-white/20"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              opacity: opacity,
              filter: `blur(${blur}px)`,
              background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent)`,
              boxShadow: `inset -5px -5px 15px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.1)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingBalloons;
