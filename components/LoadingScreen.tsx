"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Keep the loading screen for a minimum duration to show the animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white"
          style={{
            // Creating a subtle dot grid pattern
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        >
          {/* Subtle noise overlay specifically for the loading screen */}
          <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" 
               style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>

          <div className="flex flex-col items-center z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl md:text-4xl font-bold tracking-[0.1em] mb-3 text-center"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              WINORAA GLOBAL
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-[10px] md:text-[11px] tracking-[0.2em] text-gray-300 font-bold mb-10 text-center uppercase"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Events and Experiences
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex gap-1.5"
            >
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                  animate={{
                    backgroundColor: ["rgba(255,255,255,0.15)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0.15)"]
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
