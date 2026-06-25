"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "EVENTS", href: "#events" },
  { label: "GALLERY", href: "/gallery" },
  { label: "CAREERS", href: "/careers" },
  { label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-300 border-b",
        scrolled 
          ? "py-4 bg-black/50 backdrop-blur-md border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" 
          : "py-6 bg-black/10 backdrop-blur-sm border-transparent"
      )}>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="group flex flex-col items-center">
            <h2 
              className="text-lg md:text-[22px] font-black tracking-normal uppercase leading-none text-[#12319c] transition-all duration-300"
              style={{ textShadow: '0 0 12px rgba(18, 49, 156, 0.4)' }}
            >
              WINORAA GLOBAL
            </h2>
            <p className="text-[8px] md:text-[9px] tracking-widest font-bold uppercase mt-1.5 text-[#868ab8]">
              EVENTS AND EXPERIENCES
            </p>
          </Link>
        </div>

        {/* Nav Links & Socials */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group flex items-center gap-1">
                <Link href={item.href} className="nav-link text-sm font-bold tracking-wide text-white drop-shadow-md hover:text-[#91bf3e] transition-colors">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
          {/* Desktop Socials */}
          <div className="flex items-center gap-5 border-l border-white/20 pl-8">
            <a href="https://www.instagram.com/winoraa_global" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-[#91bf3e] hover:scale-110 transition-all drop-shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/winoraa-global-events-and-experience/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-[#91bf3e] hover:scale-110 transition-all drop-shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button 
            className="text-white opacity-90 p-2 hover:opacity-100 transition-opacity"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5 shadow-sm" />
            <div className="w-6 h-0.5 bg-white shadow-sm" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-xl flex flex-col p-6 md:hidden">
          <div className="flex justify-end mb-12">
            <button 
              className="text-white p-2 hover:rotate-90 transition-transform duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X size={32} />
            </button>
          </div>
          
          <div className="flex flex-col gap-6 md:gap-8 items-center justify-center flex-1">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.label} 
                href={item.href} 
                className="text-white text-xl md:text-2xl font-black tracking-[0.2em] uppercase hover:text-[#91bf3e] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Socials */}
          <div className="flex items-center justify-center gap-6 mt-auto pt-6 border-t border-white/10 w-full pb-6">
            <a href="https://www.instagram.com/winoraa_global" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-[44px] h-[44px] md:w-[50px] md:h-[50px] rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#91bf3e] transition-colors border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/winoraa-global-events-and-experience/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-[44px] h-[44px] md:w-[50px] md:h-[50px] rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#91bf3e] transition-colors border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

