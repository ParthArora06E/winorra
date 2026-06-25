"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

const GALLERY_IMAGES = [
  { id: 1, src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop", fullSrc: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=100&w=2000&auto=format&fit=crop", alt: "Corporate Event Setup", category: "Corporate" },
  { id: 2, src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop", fullSrc: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=100&w=2000&auto=format&fit=crop", alt: "Live Concert Experience", category: "Concert" },
  { id: 3, src: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop", fullSrc: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=100&w=2000&auto=format&fit=crop", alt: "Festival Crowd", category: "Festival" },
  { id: 4, src: "https://images.unsplash.com/photo-1470229722913-7c090b3328b1?q=80&w=800&auto=format&fit=crop", fullSrc: "https://images.unsplash.com/photo-1470229722913-7c090b3328b1?q=100&w=2000&auto=format&fit=crop", alt: "Stage Lighting", category: "Concert" },
  { id: 5, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop", fullSrc: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=100&w=2000&auto=format&fit=crop", alt: "Tech Conference", category: "Corporate" },
  { id: 6, src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop", fullSrc: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=100&w=2000&auto=format&fit=crop", alt: "Party Atmosphere", category: "Party" },
  { id: 7, src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop", fullSrc: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=100&w=2000&auto=format&fit=crop", alt: "DJ Performance", category: "Concert" },
  { id: 8, src: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=800&auto=format&fit=crop", fullSrc: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=100&w=2000&auto=format&fit=crop", alt: "Gala Dinner", category: "Corporate" },
  { id: 9, src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop", fullSrc: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=100&w=2000&auto=format&fit=crop", alt: "Live Band", category: "Concert" },
  { id: 10, src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop", fullSrc: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=100&w=2000&auto=format&fit=crop", alt: "Outdoor Event", category: "Festival" },
  { id: 11, src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop", fullSrc: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=100&w=2000&auto=format&fit=crop", alt: "Keynote Speaker", category: "Corporate" },
  { id: 12, src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=800&auto=format&fit=crop", fullSrc: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=100&w=2000&auto=format&fit=crop", alt: "Audience Cheering", category: "Festival" },
];

const CATEGORIES = ["All", "Concert", "Corporate", "Festival", "Party"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);
  const [columns, setColumns] = useState(3);

  // Filter images based on category
  const filteredImages = GALLERY_IMAGES.filter(
    img => activeCategory === "All" || img.category === activeCategory
  );

  // Responsive masonry columns
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 1024) setColumns(2);
      else setColumns(3);
    };
    
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Split images into columns for Masonry layout
  const masonryColumns = Array.from({ length: columns }, () => [] as typeof GALLERY_IMAGES);
  filteredImages.forEach((img, i) => {
    masonryColumns[i % columns].push(img);
  });

  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-6 md:px-10 lg:px-20 relative z-10">
      
      {/* Header Section */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold tracking-[0.2em] text-[#91bf3e] uppercase mb-4"
          >
            Our Portfolio
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Gallery
          </motion.h1>
        </div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border backdrop-blur-sm",
                activeCategory === cat 
                  ? "bg-white text-black border-white" 
                  : "bg-white/5 text-white border-white/10 hover:border-white/30 hover:bg-white/10"
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Masonry Grid */}
      <div className="flex gap-6">
        {masonryColumns.map((col, colIndex) => (
          <div key={colIndex} className="flex-1 flex flex-col gap-6">
            <AnimatePresence mode="popLayout">
              {col.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group relative cursor-pointer overflow-hidden rounded-xl bg-white/5"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-110"
                    loading="lazy"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-[#91bf3e] text-xs font-bold tracking-widest uppercase mb-1">
                      {img.category}
                    </p>
                    <h3 className="text-white text-xl font-bold tracking-wide">
                      {img.alt}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ZoomIn size={18} className="text-white" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors text-white z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl max-h-[85vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.fullSrc}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center">
                <p className="text-[#91bf3e] text-sm font-bold tracking-[0.2em] uppercase mb-2">
                  {selectedImage.category}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-white">
                  {selectedImage.alt}
                </h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
