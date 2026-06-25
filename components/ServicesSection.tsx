"use client";

import React from "react";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "CORPORATE CONFERENCES",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    bullets: [
      "Large-scale conferences",
      "Professional stage design",
      "LED walls & AV production",
      "Delegate management"
    ],
    label: "CONFERENCES"
  },
  {
    num: "02",
    title: "EXHIBITIONS & TRADE SHOWS",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop",
    bullets: [
      "World-class exhibition management",
      "Custom booth design",
      "Venue branding",
      "Visitor engagement solutions"
    ],
    label: "EXHIBITIONS"
  },
  {
    num: "03",
    title: "PRODUCT LAUNCHES",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    bullets: [
      "Spectacular launch events",
      "Cutting-edge lighting",
      "Immersive sound systems",
      "Creative staging"
    ],
    label: "LAUNCHES"
  },
  {
    num: "04",
    title: "AWARD NIGHTS & GALAS",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
    bullets: [
      "Elegant award ceremonies",
      "Premium production quality",
      "Sophisticated lighting design",
      "Flawless execution"
    ],
    label: "GALAS"
  },
  {
    num: "05",
    title: "DEALER MEETS & INCENTIVES",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2070&auto=format&fit=crop",
    bullets: [
      "Strategic dealer engagement",
      "Incentive programs",
      "Reward & recognition",
      "Relationship building"
    ],
    label: "INCENTIVES"
  },
  {
    num: "06",
    title: "LARGE-SCALE MICE EVENTS",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop",
    bullets: [
      "Meetings & Conferences",
      "Incentive Tours",
      "Conventions",
      "Mega Exhibitions"
    ],
    label: "MICE"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative w-full bg-white text-black py-12 lg:py-32 px-6 lg:px-12 xl:px-20 overflow-hidden">
      
      {/* Section Header */}
      <div className="max-w-5xl mx-auto text-center mb-24">
        <h4 className="text-gray-400 font-sans font-bold text-xs lg:text-sm tracking-[4px] uppercase mb-4">
          WHAT WE DO BEST
        </h4>
        <h2 className="font-heading font-black text-5xl lg:text-6xl uppercase tracking-tighter mb-6">
          OUR SERVICES
        </h2>
        <p className="font-sans text-gray-600 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
          End-to-end event planning, production, and execution for conferences, exhibitions, launches, galas, incentives, and large-scale MICE experiences.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {services.map((service, idx) => (
          <div 
            key={idx} 
            className="group relative w-full min-h-[400px] h-auto md:h-[460px] lg:h-[500px] rounded-[8px] overflow-hidden bg-black shadow-lg"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              style={{ backgroundImage: `url('${service.image}')` }}
            />
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 transition-colors duration-500 group-hover:from-black group-hover:via-black/60 group-hover:to-black/30 z-10" />
            
            {/* Top Right Number */}
            <div className="absolute top-8 right-8 text-white/40 font-sans font-bold text-2xl tracking-widest z-20 transition-colors duration-500 group-hover:text-white">
              {service.num}
            </div>

            {/* Bottom Huge Label */}
            <div className="absolute bottom-6 left-6 z-20 pointer-events-none overflow-hidden pr-6">
              <span className="block text-white/15 group-hover:text-white/25 font-heading font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter whitespace-nowrap transition-colors duration-500">
                {service.label}
              </span>
            </div>

            {/* Card Content */}
            <div className="relative z-30 p-8 w-full h-full flex flex-col justify-end">
              <div className="transform translate-y-4 group-hover:-translate-y-2 transition-transform duration-500">
                <h3 className="text-white font-heading font-black text-2xl uppercase tracking-wide mb-4 leading-tight">
                  {service.title}
                </h3>
                
                <ul className="text-gray-300 space-y-2 font-sans text-[14px] lg:text-[15px] font-medium opacity-90 transition-opacity duration-500 mb-6">
                  {service.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start">
                      <span className="text-white/50 mr-2">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="#" className="inline-flex items-center text-white font-sans font-bold text-[13px] uppercase tracking-wider transition-colors hover:text-gray-300 border-b border-transparent hover:border-gray-300 pb-1">
                  Explore Service <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
