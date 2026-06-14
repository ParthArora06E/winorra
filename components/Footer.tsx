"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const pathname = usePathname();
  const bgColor = pathname === '/' ? '#d3d6da' : 'transparent';

  return (
    <>
      <footer className="w-full relative z-20 flex flex-col transition-colors duration-300" style={{ backgroundColor: bgColor }}>
        {/* PART 1: ROUNDED CTA PANEL */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="w-full bg-[#282828] rounded-t-[48px] lg:rounded-t-[100px] h-auto lg:h-[760px] flex flex-col items-center justify-center py-24 lg:py-0 relative z-10 overflow-hidden"
        >
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#91bf3e] uppercase text-[15px] font-[800] tracking-[2px] text-center mb-8"
          >
            GET IN TOUCH
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center justify-center font-heading font-black text-center leading-[1.05]"
          >
            <h2 
              className="text-white"
              style={{ fontSize: 'clamp(28px, 8vw, 88px)' }}
            >
              YOUR
            </h2>
            
            <div className="flex items-center justify-center gap-2 md:gap-3 lg:gap-5 my-1 lg:my-2" style={{ fontSize: 'clamp(20px, 6vw, 64px)' }}>
              <span style={{ WebkitTextStroke: '1px #777', color: 'transparent' }}>EVENT</span>
              <span className="text-white">EVENT</span>
              <span style={{ WebkitTextStroke: '1px #777', color: 'transparent' }}>EVENT</span>
            </div>
            
            <h2 
              className="text-white"
              style={{ fontSize: 'clamp(28px, 8vw, 88px)' }}
            >
              OUR EXPERTISE
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-[#91bf3e] text-white text-[15px] font-[800] rounded-full px-[31px] py-[16px] mt-12 hover:bg-[#7fa836] hover:-translate-y-[2px] transition-all inline-block shadow-lg"
            >
              CONTACT US &rarr;
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-[90px] flex flex-col items-center"
          >
            <p className="text-white text-[18px] font-[700] text-center">
              Follow Our Journey
            </p>
            <div className="flex gap-[14px] justify-center mt-6">
              <a href="https://www.instagram.com/winoraa_global" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-[48px] h-[48px] rounded-full bg-[#444444] text-white flex items-center justify-center hover:bg-[#91bf3e] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/winoraa-global-events-and-experience/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-[48px] h-[48px] rounded-full bg-[#444444] text-white flex items-center justify-center hover:bg-[#91bf3e] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </motion.div>

        </motion.div>

        {/* PART 2: BLACK NAVIGATION FOOTER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="w-full bg-[#000000] pt-12 md:pt-[92px] pb-[36px] relative z-20"
        >
          <div className="max-w-[1160px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              
              {/* Column 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col"
              >
                <h4 className="text-[#163399] text-[18px] font-[800] mb-[22px]">Winoraa</h4>
                <p className="text-white text-[17px] leading-[1.45] w-full max-w-[270px]">
                  Creating unforgettable<br/>
                  experiences through world-class<br/>
                  event production.
                </p>
              </motion.div>

              {/* Column 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col"
              >
                <h4 className="text-[#163399] text-[18px] font-[800] mb-[22px]">Services</h4>
                <div className="flex flex-col">
                  {['MICE', 'Events', 'Digital services', 'Corporate Gifting', 'Employee Engagement'].map((link) => (
                    <Link key={link} href="#" className="text-white text-[17px] leading-[2] hover:text-[#91bf3e] transition-colors">
                      {link}
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Column 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col"
              >
                <h4 className="text-[#163399] text-[18px] font-[800] mb-[22px]">Company</h4>
                <div className="flex flex-col">
                  {['About Us', 'Careers', 'Contact'].map((link) => (
                    <Link key={link} href="#" className="text-white text-[17px] leading-[2] hover:text-[#91bf3e] transition-colors">
                      {link}
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Column 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col"
              >
                <h4 className="text-[#163399] text-[18px] font-[800] mb-[22px]">Mail us</h4>
                <a href="mailto:winoraaglobal@gmail.com" className="text-white text-[17px] leading-[2] hover:text-[#91bf3e] transition-colors">
                  winoraaglobal@gmail.com
                </a>
              </motion.div>

            </div>

            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full h-px bg-white/25 mt-[48px] mb-[32px] origin-left"
            ></motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center text-white/70 text-[16px]"
            >
              &copy; 2026 Winoraa. All rights reserved.
            </motion.p>
          </div>

          {/* Floating Button */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
            className="absolute right-4 bottom-4 md:right-[24px] md:bottom-[32px] lg:right-[34px] lg:bottom-[32px] z-50"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[86px] lg:h-[86px] bg-[#1d3f9e] rounded-full flex flex-col items-center justify-center text-white font-[900] text-[11px] md:text-[13px] leading-[1.1] text-center shadow-xl hover:scale-105 transition-transform"
            >
              <span>LET&apos;S</span>
              <span>PLAN!</span>
            </button>
          </motion.div>
        </motion.div>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[550px] bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col z-10"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#163399] to-[#254fbe] p-6 md:p-10 relative overflow-hidden">
                {/* Decorative circle in header */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
                
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all hover:rotate-90 duration-300"
                >
                  <X size={20} />
                </button>
                <div className="relative z-10">
                  <h3 className="text-white text-[32px] md:text-[36px] font-black leading-tight mb-2 tracking-tight">Let&apos;s Plan<br/>Something <span className="text-[#91bf3e]">Epic.</span></h3>
                  <p className="text-white/80 text-[15px] font-medium">Fill out the details below and our team will get back to you shortly.</p>
                </div>
              </div>

              {/* Form Body */}
              <div className="p-6 md:p-10">
                <form className="flex flex-col gap-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] font-[800] text-gray-500 uppercase tracking-wider ml-1">Your Name *</label>
                      <input type="text" placeholder="John Doe" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#91bf3e] focus:ring-2 focus:ring-[#91bf3e]/20 text-gray-900 placeholder:text-gray-400 transition-all shadow-sm" required />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] font-[800] text-gray-500 uppercase tracking-wider ml-1">Phone Number</label>
                      <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#91bf3e] focus:ring-2 focus:ring-[#91bf3e]/20 text-gray-900 placeholder:text-gray-400 transition-all shadow-sm" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-[800] text-gray-500 uppercase tracking-wider ml-1">Your Email *</label>
                    <input type="email" placeholder="john@company.com" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#91bf3e] focus:ring-2 focus:ring-[#91bf3e]/20 text-gray-900 placeholder:text-gray-400 transition-all shadow-sm" required />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-[800] text-gray-500 uppercase tracking-wider ml-1">Event Type</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#91bf3e] focus:ring-2 focus:ring-[#91bf3e]/20 text-gray-900 appearance-none transition-all shadow-sm font-medium cursor-pointer">
                        <option value="" disabled>Select the type of event...</option>
                        <option value="mice">MICE</option>
                        <option value="corporate">Corporate Events</option>
                        <option value="exhibitions">Exhibitions</option>
                        <option value="digital">Digital Services</option>
                      </select>
                      <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-[800] text-gray-500 uppercase tracking-wider ml-1">Event Vision *</label>
                    <textarea 
                      rows={3} 
                      placeholder="Tell us about your goals, audience size, and any special requirements..." 
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#91bf3e] focus:ring-2 focus:ring-[#91bf3e]/20 text-gray-900 resize-none placeholder:text-gray-400 transition-all shadow-sm leading-relaxed"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#91bf3e] to-[#7fa836] text-white font-[800] tracking-[1px] uppercase text-[15px] py-4 rounded-xl mt-4 hover:shadow-[0_10px_25px_rgba(145,191,62,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Send Details
                      <svg className="group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </span>
                    {/* Button shine effect */}
                    <div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Contact Info Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsContactModalOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[480px] bg-gradient-to-b from-[#222533] to-[#151722] rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden flex flex-col z-10"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#163399] via-[#1c40b8] to-[#254fbe] p-6 pb-6 md:p-8 md:pb-8 relative flex flex-col items-center justify-center text-center overflow-hidden">
                {/* Decorative glowing circles */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl"></div>

                <button 
                  onClick={() => setIsContactModalOpen(false)}
                  className="absolute top-5 right-5 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all duration-300 p-2 hover:rotate-90 backdrop-blur-md"
                >
                  <X size={18} strokeWidth={2.5} />
                </button>
                <div className="relative z-10">
                  <h3 className="text-white text-[24px] md:text-[28px] font-black mb-1 tracking-tight drop-shadow-md">Contact Information</h3>
                  <p className="text-white/80 text-[14px] font-medium tracking-wide">Get in touch with WINORAA GLOBAL</p>
                </div>
              </div>

              {/* Form Body / List */}
              <div className="p-6 md:p-10 flex flex-col gap-2">
                
                {/* Item 1: Email */}
                <motion.a 
                  href="mailto:winoraaglobal@gmail.com"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="group flex items-center gap-5 p-4 -mx-4 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-br from-[#163399] to-[#254fbe] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(22,51,153,0.4)] border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:-translate-y-0.5 transition-transform"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-[17px] mb-0.5 group-hover:text-blue-200 transition-colors">Email</span>
                    <span className="text-[#91bf3e] font-medium text-[15px]">winoraaglobal@gmail.com</span>
                  </div>
                </motion.a>

                {/* Item 2: Vivek */}
                <motion.a 
                  href="tel:+919593551959"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="group flex items-center gap-5 p-4 -mx-4 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-br from-[#163399] to-[#254fbe] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(22,51,153,0.4)] border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:rotate-12 transition-transform"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-[17px] mb-0.5 group-hover:text-blue-200 transition-colors">Vivek</span>
                    <span className="text-gray-300 font-medium text-[15px] group-hover:text-white transition-colors">+91 95935 51959</span>
                  </div>
                </motion.a>

                {/* Item 3: Warehouse */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="group flex items-center gap-5 p-4 -mx-4 rounded-2xl hover:bg-white/5 transition-all duration-300"
                >
                  <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-br from-[#2d662e] to-[#409141] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(56,127,57,0.4)] border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:-translate-y-0.5 transition-transform">
                      <rect x="2" y="14" width="8" height="8" rx="1"/>
                      <rect x="14" y="14" width="8" height="8" rx="1"/>
                      <rect x="8" y="4" width="8" height="8" rx="1"/>
                      <path d="M2 14h8v8H2z"/><path d="M14 14h8v8h-8z"/><path d="M8 4h8v8H8z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-[17px] mb-0.5 group-hover:text-green-200 transition-colors">Warehouse</span>
                    <span className="text-gray-300 font-medium text-[14px]">Delhi, Bengaluru, Mumbai, Chennai &amp; Hyderabad</span>
                  </div>
                </motion.div>

                {/* Item 4: Location */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="group flex items-center gap-5 p-4 -mx-4 rounded-2xl hover:bg-white/5 transition-all duration-300"
                >
                  <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-br from-[#1873bf] to-[#2ba1ff] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(29,138,229,0.4)] border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:-translate-y-0.5 transition-transform"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-[17px] mb-0.5 group-hover:text-blue-200 transition-colors">Office</span>
                    <span className="text-gray-300 font-medium text-[15px]">Delhi &amp; Bengaluru</span>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
