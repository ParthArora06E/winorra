"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="relative bg-black py-32 md:py-48 px-4 overflow-hidden border-t border-white/5">
      {/* Image Background with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image 
          src="/images/corporate-bg.png" 
          alt="Corporate Event" 
          fill
          className="object-cover opacity-40 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </motion.div>

      <div className="container mx-auto max-w-4xl z-10 text-center relative">
        {/* Brush Heading with Letter Reveal & Continuous Glow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mb-12"
        >
          <motion.h3 
            className="text-5xl md:text-7xl font-brush text-white tracking-normal -rotate-2 flex justify-center gap-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
            animate={{ 
              textShadow: [
                "0px 0px 10px rgba(255,255,255,0.2)", 
                "0px 0px 25px rgba(255,255,255,0.6)", 
                "0px 0px 10px rgba(255,255,255,0.2)"
              ] 
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {"WE ARE".split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="flex">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={{
                      hidden: { opacity: 0, scale: 0.5, y: 20 },
                      visible: { opacity: 1, scale: 1, y: 0 }
                    }}
                    transition={{ 
                      duration: 0.8, 
                      delay: (wordIndex * 5 + charIndex) * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-[12px] md:text-[14px] tracking-[0.4em] font-bold text-white uppercase mt-8 drop-shadow-md"
          >
            EXPERIENCE CREATORS <span className="mx-4 text-[#8cc63f]">{"//"}</span> <span className="text-[#8cc63f]">EVENT PRODUCERS</span>
          </motion.p>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="w-16 h-[2px] bg-[#8cc63f] mx-auto mt-6 mb-2 origin-center"
          />
        </motion.div>

        {/* Paragraph */}
        <motion.p 
          className="text-white/95 text-base md:text-xl leading-relaxed font-medium max-w-3xl mx-auto cursor-default drop-shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.03,
              }
            }
          }}
        >
          {"WINORAA GLOBAL is a full-spectrum production powerhouse that creates, promotes, and produces world-class events, exhibitions, and live experiences. Known for crafting powerful brand moments, our creative energy drives the passion we have for producing amazing experiences that we can share with the world.".split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-1.5"
              variants={{
                hidden: { opacity: 0, y: 10, filter: "blur(5px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" }
              }}
              transition={{ duration: 0.6 }}
            >
              {word === "WINORAA" || word === "GLOBAL" ? (
                <strong className="text-white font-extrabold">{word}</strong>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.p>
      </div>

      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-radial-gradient from-white/[0.03] to-transparent blur-[120px] pointer-events-none" />
    </section>
  );
};

export default About;
