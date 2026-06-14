"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const CountUp = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest: number) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, { duration, ease: "easeOut" });
    return controls.stop;
  }, [count, value, duration]);

  useEffect(() => {
    return rounded.on("change", (v: number) => setDisplayValue(v));
  }, [rounded]);

  return <span>{displayValue}</span>;
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center gap-4"
        >
          {/* WINORAA GLOBAL */}
          <div className="text-center flex flex-col items-center justify-center">
            <h1 
              className="text-white font-black tracking-[-0.05em] leading-[0.8] opacity-95 mb-4"
              style={{ fontSize: 'clamp(32px, 10vw, 112px)' }}
            >
              WINORAA GLOBAL
            </h1>
            <p className="text-[12px] md:text-[14px] tracking-[0.6em] ml-[0.6em] font-medium opacity-90 uppercase whitespace-nowrap text-center text-white">
              Events and Experiences
            </p>
          </div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-16 lg:gap-24 mt-12 md:mt-20 px-4"
          >
            {[
              { val: 50, label: "EVENTS PRODUCED" },
              { val: 100, label: "HAPPY CLIENTS" },
              { val: 3, label: "YEARS EXPERIENCE" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2 tracking-tight">
                  <CountUp value={stat.val} />+
                </span>
                <span className="text-[9px] md:text-[10px] tracking-[0.3em] font-semibold text-white/80 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Ambient Lighting / Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-radial-gradient from-white/10 to-transparent blur-[150px] pointer-events-none -z-10" />
    </section>
  );
};

export default Hero;
