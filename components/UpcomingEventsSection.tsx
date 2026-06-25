"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const EVENTS = [
  {
    id: 1,
    image: "/Events/1 (1).png", 
    badge: "Exhibition",
    title: "Jio World Convention Centre",
    date: "5, 6 & 7 February 2026",
    location: "Mumbai, India",
    description: "Now certified as the #1 travel show in India and Asia.",
    tags: ["Exhibition", "Mumbai", "2026"]
  },
  {
    id: 2,
    image: "/Events/4.png", 
    badge: "Exhibition",
    title: "India Expo Center And Mart",
    date: "14 - 18 February, 2026",
    location: "Greater Noida, Delhi-Ncr",
    description: "Connecting the best in India's handicrafts.",
    tags: ["Handicrafts", "Exhibition", "Global"]
  },
  {
    id: 3,
    image: "/Events/3.png", 
    badge: "Exhibition",
    title: "Ludhiana Exhibition Centre",
    date: "20, 21, 22, 23 February, 2026",
    location: "G.T. Road, Sahnewal, Ludhiana",
    description: "India's leading exhibition on machine tools & automation technology.",
    tags: ["Machine Tools", "Automation", "Exhibition"]
  },
  {
    id: 4,
    image: "/Events/2.jpg", 
    badge: "Exhibition",
    title: "Yashobhoomi",
    date: "25th - 27th Feb 2026",
    location: "New Delhi, India",
    description: "Satte is South Asia’s leading travel and tourism exhibition.",
    tags: ["Exhibition", "Tourism", "Satte"]
  },
  {
    id: 5,
    image: "/Events/5.png", 
    badge: "Exhibition",
    title: "Pragati Maidan",
    date: "24, 25, 26 April 2026",
    location: "New Delhi, India",
    description: "Drive the future.",
    tags: ["Future", "Exhibition", "Delhi"]
  },
  {
    id: 6,
    image: "/logos/6.png", 
    badge: "Exhibition",
    title: "Yashobhoomi",
    date: "29 April - 02 May 2026",
    location: "Dwarka, New Delhi",
    description: "International exhibition for building materials.",
    tags: ["International", "Exhibition", "Building"]
  }
];

export default function UpcomingEventsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("ALL EVENTS");
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const filteredEvents = EVENTS.filter(event => {
    if (activeFilter === "ALL EVENTS") return true;
    if (activeFilter === "EXHIBITIONS") return event.badge === "Exhibition" || event.tags.includes("Exhibition");
    if (activeFilter === "CORPORATE") return event.badge === "Corporate" || event.tags.includes("Corporate");
    return true;
  });

  return (
    <section id="events" ref={containerRef} className="relative py-32 px-6 md:px-10 lg:px-20 bg-[#f8f9fa] overflow-hidden z-20">
      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h4 className="text-gray-400 font-sans font-bold text-xs lg:text-sm tracking-[4px] uppercase mb-4">
            JOIN US
          </h4>
          <h2 className="font-heading font-black text-5xl lg:text-6xl uppercase tracking-tighter text-black">
            UPCOMING EVENTS
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {["ALL EVENTS", "EXHIBITIONS", "CORPORATE"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 rounded-full text-[13px] font-bold tracking-widest uppercase transition-colors shadow-sm ${
                activeFilter === filter
                  ? "bg-[#2a64f6] text-white border border-[#2a64f6]"
                  : "bg-transparent border border-[#2a64f6] text-[#2a64f6] hover:bg-blue-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, i) => (
            <motion.div
              layout
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col h-full transition-all duration-300 text-left"
            >
              {/* Image Container */}
              <div className="relative h-[220px] w-full overflow-hidden bg-gray-100">
                <div className="absolute top-4 right-4 bg-[#163399] text-white px-4 py-1.5 rounded-full text-[13px] font-bold shadow-md z-10 tracking-wide">
                  {event.badge}
                </div>
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Container */}
              <div className="p-7 md:p-8 flex flex-col flex-grow">
                <h4 className="text-[18px] md:text-[20px] font-bold text-gray-900 mb-5 leading-snug">
                  {event.title}
                </h4>

                <div className="flex flex-col gap-3.5 mb-5">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Calendar size={18} className="text-gray-500 shrink-0" strokeWidth={2.5} />
                    <span className="font-medium text-[15px]">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin size={18} className="text-gray-500 shrink-0" strokeWidth={2.5} />
                    <span className="font-medium text-[15px]">{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-[15px] leading-relaxed mb-8 flex-grow">
                  {event.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-50">
                  {event.tags.map(tag => (
                    <span key={tag} className="bg-[#f3f5f9] text-[#163399] px-3.5 py-1.5 rounded-full text-[13px] font-bold tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
