"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutHeroSection() {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[760px] flex items-center justify-center overflow-hidden py-24">
      
      {/* Background Image Layer */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          filter: "grayscale(100%) brightness(0.8)"
        }}
      />
      
      {/* Rich dark overlay to fix washed-out look */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#101828]/60 via-[#0a0f1a]/80 to-[#050505]" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full">
        
        {/* We Are Logo */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-brush text-white text-[60px] md:text-[80px] lg:text-[100px] leading-none mb-6 transform -rotate-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          WE ARE
        </motion.h2>

        {/* Subtitle */}
        <motion.h3 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-white font-bold uppercase text-[12px] md:text-[14px] lg:text-[15px] tracking-[0.25em] mb-5 flex flex-col md:flex-row items-center justify-center drop-shadow-md"
        >
          <span>EXPERIENCE CREATORS</span> 
          <span className="text-[#8cc63f] mx-3 my-1 md:my-0">{"//"}</span> 
          <span className="text-[#8cc63f]">EVENT PRODUCERS</span>
        </motion.h3>

        {/* Divider Line */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "48px", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="h-[2px] bg-[#8cc63f] mb-8 md:mb-10"
        />

        {/* Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-[#e2e8f0] font-sans font-medium mx-auto text-[14px] md:text-[16px] lg:text-[17px] text-center drop-shadow-md"
          style={{ 
            maxWidth: '740px', 
            lineHeight: '1.9',
          }}
        >
          <strong className="text-white font-bold tracking-wide">WINORAA GLOBAL</strong> is a full-spectrum production powerhouse that creates,
          <br className="hidden md:block" />
          promotes, and produces world-class events, exhibitions, and live experiences.
          <br className="hidden md:block" />
          Known for crafting powerful brand moments, our creative energy drives the
          <br className="hidden md:block" />
          passion we have for producing amazing experiences that we can share with
          <br className="hidden md:block" />
          the world.
        </motion.p>

      </div>
    </section>
  );
}
