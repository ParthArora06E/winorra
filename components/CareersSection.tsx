"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function CareersSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const jobs = [
    {
      title: "EVENT MANAGER",
      experience: "3+ Years of relevant experience in corporate events and project management"
    },
    {
      title: "CLIENT SERVICING",
      experience: "2+ Years of relevant experience in corporate events and client relations"
    },
    {
      title: "OPERATION & PRODUCTION",
      experience: "2+ Years of relevant experience in corporate events and production management"
    },
    {
      title: "GRAPHIC DESIGNER",
      experience: "1+ Years of relevant experience in corporate events, marketing agency, media and advertising"
    }
  ];

  const handleApplyClick = (e: React.MouseEvent, jobTitle: string) => {
    e.preventDefault();
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  const handleApplySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData();
    formData.append('type', 'career');
    formData.append('name', (form.elements.namedItem('name') as HTMLInputElement).value);
    formData.append('phone', (form.elements.namedItem('phone') as HTMLInputElement).value);
    formData.append('email', (form.elements.namedItem('email') as HTMLInputElement).value);
    formData.append('position', selectedJob);
    formData.append('experience', (form.elements.namedItem('experience') as HTMLSelectElement).value);
    
    const fileInput = form.elements.namedItem('resume') as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      formData.append('resume', fileInput.files[0]);
    }

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
      });
      
      if (res.ok) {
        alert('Application submitted successfully!');
        setIsModalOpen(false);
        form.reset();
      } else {
        alert('Failed to submit application. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[805px] py-12 lg:py-24 overflow-hidden flex flex-col justify-center">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop')" }}
      />
      
      {/* Heavy Dark Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.84)' }} />

      {/* Centered Main Heading */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center mb-16 lg:mb-20">
        <h2 className="text-white font-heading font-black text-4xl lg:text-5xl uppercase tracking-tighter">
          JOIN OUR TEAM
        </h2>
      </div>

      {/* Content Block */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:pl-[190px]">
        <div className="max-w-[900px]">

          {/* Sub Heading */}
          <h3 className="text-white font-sans font-bold uppercase text-[22px] md:text-[26px] xl:text-[30px] leading-tight tracking-tight mb-10">
            CURRENTLY ACCEPTING RESUMES FOR THE FOLLOWING POSITIONS:
          </h3>

          {/* Job List */}
          <div className="flex flex-col space-y-8 mb-10">
            {jobs.map((job, idx) => (
              <div key={idx} className="group flex flex-col">
                <div className="text-white font-sans font-bold text-[18px] md:text-[20px] xl:text-[22px] tracking-wide mb-1">
                  {job.title}
                </div>
                <div className="text-gray-300 font-sans text-[15px] md:text-[16px] mb-2 max-w-[600px]">
                  {job.experience}
                </div>
                <button 
                  onClick={(e) => handleApplyClick(e, job.title)}
                  className="inline-flex items-center text-[#aaaaaa] hover:text-white font-sans font-bold text-[13px] uppercase tracking-wider transition-colors mt-1 w-max"
                >
                  APPLY NOW <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            ))}
          </div>

          {/* Description Line */}
          <p className="text-gray-300 font-sans text-[16px] md:text-[18px] xl:text-[20px] leading-[1.6] mb-[35px] max-w-[800px]">
            Please inquire by email regarding all positions listed above, or with any questions you may have.
          </p>

          {/* Button */}
          <a 
            href="mailto:winoraaglobal@gmail.com"
            className="inline-block"
          >
            <div className="bg-[#111111] text-[#eeeeee] hover:text-white hover:bg-black font-sans font-semibold text-[15px] md:text-[16px] px-[24px] py-[14px] rounded-[8px] transition-all duration-300 shadow-lg border border-white/5">
              Email us here.
            </div>
          </a>

        </div>
      </div>

      {/* Apply Modal */}
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
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[650px] bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col z-10"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#163399] to-[#254fbe] p-6 md:p-10 relative overflow-hidden flex flex-col items-center text-center">
                {/* Decorative circles */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl"></div>

                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all hover:rotate-90 duration-300 z-20"
                >
                  <X size={20} strokeWidth={2.5} />
                </button>
                <div className="relative z-10">
                  <h3 className="text-white text-[28px] md:text-[34px] font-black leading-tight mb-1 tracking-tight">Join Our Team</h3>
                  <p className="text-white/80 text-[15px] font-medium tracking-wide">Apply for <span className="text-[#91bf3e] font-bold">{selectedJob || "a position"}</span></p>
                </div>
              </div>

              {/* Form Body */}
              <div className="p-6 md:p-10">
                <form onSubmit={handleApplySubmit} className="flex flex-col gap-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] font-[800] text-gray-500 uppercase tracking-wider ml-1">Name *</label>
                      <input type="text" name="name" placeholder="Enter your full name" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#91bf3e] focus:ring-2 focus:ring-[#91bf3e]/20 text-gray-900 placeholder:text-gray-400 transition-all shadow-sm" required />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] font-[800] text-gray-500 uppercase tracking-wider ml-1">Phone Number *</label>
                      <input type="tel" name="phone" placeholder="Enter your phone number" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#91bf3e] focus:ring-2 focus:ring-[#91bf3e]/20 text-gray-900 placeholder:text-gray-400 transition-all shadow-sm" required />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-[800] text-gray-500 uppercase tracking-wider ml-1">Email *</label>
                    <input type="email" name="email" placeholder="Enter your email address" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#91bf3e] focus:ring-2 focus:ring-[#91bf3e]/20 text-gray-900 placeholder:text-gray-400 transition-all shadow-sm" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] font-[800] text-gray-500 uppercase tracking-wider ml-1">Position Applied For *</label>
                      <div className="relative">
                        <select 
                          value={selectedJob}
                          onChange={(e) => setSelectedJob(e.target.value)}
                          className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#91bf3e] focus:ring-2 focus:ring-[#91bf3e]/20 text-gray-900 appearance-none transition-all shadow-sm cursor-pointer font-medium"
                          required
                        >
                          <option value="" disabled>Select Position</option>
                          {jobs.map((j, idx) => (
                            <option key={idx} value={j.title}>{j.title}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] font-[800] text-gray-500 uppercase tracking-wider ml-1">Years of Experience *</label>
                      <div className="relative">
                        <select name="experience" defaultValue="" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#91bf3e] focus:ring-2 focus:ring-[#91bf3e]/20 text-gray-900 appearance-none transition-all shadow-sm cursor-pointer font-medium" required>
                          <option value="" disabled>Select Experience</option>
                          <option value="0-1">0-1 Years</option>
                          <option value="1-3">1-3 Years</option>
                          <option value="3-5">3-5 Years</option>
                          <option value="5+">5+ Years</option>
                        </select>
                        <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-[800] text-gray-500 uppercase tracking-wider ml-1">Resume *</label>
                    <div className="w-full border-2 border-dashed border-gray-300 rounded-2xl p-8 flex flex-col items-center justify-center bg-gray-50 hover:bg-[#f4f7f0] hover:border-[#91bf3e] transition-all cursor-pointer group relative">
                      <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                        <svg className="text-gray-400 group-hover:text-[#91bf3e] transition-colors" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                      </div>
                      <p className="text-gray-700 text-[15px] font-bold mb-1 group-hover:text-[#91bf3e] transition-colors">Click to upload or drag and drop</p>
                      <p className="text-gray-400 text-[13px] font-medium">PDF, DOC, DOCX (Max 5MB)</p>
                      <input type="file" name="resume" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".pdf,.doc,.docx" required />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#91bf3e] to-[#7fa836] text-white font-[800] tracking-[1px] uppercase text-[15px] py-4 rounded-xl mt-4 hover:shadow-[0_10px_25px_rgba(145,191,62,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      {!isSubmitting && <svg className="group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>}
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
    </section>
  );
}
