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
          filter: "grayscale(100%)"
        }}
      />
      
      {/* Deep Dark Overlay for contrast - Gradient to Black */}
      <div className="absolute inset-0 z-0 bg-black/60 backdrop-blur-[2px]" />
      
      {/* Brand Color Gradient Accent */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#163399]/30 to-[#0a0a0a]" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full">
        
        {/* We Are Logo */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-brush text-white text-[60px] md:text-[80px] lg:text-[100px] leading-none mb-6 transform -rotate-2 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
        >
          WE ARE
        </motion.h2>

        {/* Subtitle */}
        <motion.h3 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-white font-black uppercase text-[11px] md:text-[14px] lg:text-[16px] tracking-[4px] md:tracking-[8px] mb-8 md:mb-10 flex flex-col md:flex-row items-center gap-2 md:gap-4"
        >
          <span className="drop-shadow-md">EXPERIENCE CREATORS</span> 
          <span className="hidden md:inline text-[#91bf3e] font-sans font-light drop-shadow-md">//</span> 
          <span className="text-[#91bf3e] drop-shadow-[0_0_10px_rgba(145,191,62,0.5)]">EVENT PRODUCERS</span>
        </motion.h3>

        {/* Divider Line */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "80px", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="h-[2px] bg-[#91bf3e] mb-8 md:mb-10 rounded-full"
        />

        {/* Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-white/80 font-sans font-medium mx-auto text-[15px] md:text-[17px] lg:text-[19px] text-center"
          style={{ 
            maxWidth: '720px', 
            lineHeight: '1.8',
            textShadow: '0px 2px 10px rgba(0,0,0,0.8)'
          }}
        >
          <strong className="text-white font-bold text-[16px] md:text-[18px] lg:text-[20px] tracking-wide">WINORAA GLOBAL</strong> is a full-spectrum production powerhouse that
          creates, promotes, and produces world-class events, exhibitions, and live
          experiences. Known for crafting powerful brand moments, our creative energy
          drives the passion we have for producing amazing experiences that we
          can share with the world.
        </motion.p>

      </div>
    </section>
  );
}
