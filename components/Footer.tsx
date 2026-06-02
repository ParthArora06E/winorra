import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full relative z-20 flex flex-col" style={{ backgroundColor: '#d3d6da' }}>
      {/* PART 1: ROUNDED CTA PANEL */}
      <div className="w-full bg-[#282828] rounded-t-[48px] lg:rounded-t-[100px] h-auto lg:h-[760px] flex flex-col items-center justify-center py-24 lg:py-0 relative z-10">
        
        <p className="text-[#91bf3e] uppercase text-[15px] font-[800] tracking-[2px] text-center mb-8">
          GET IN TOUCH
        </p>
        
        <div className="flex flex-col items-center justify-center font-heading font-black text-center leading-[1.05]">
          <h2 className="text-white text-4xl md:text-[48px] lg:text-[88px]">YOUR</h2>
          
          <div className="flex items-center justify-center gap-2 md:gap-3 lg:gap-5 text-[28px] md:text-[34px] lg:text-[64px] my-1 lg:my-2">
            <span style={{ WebkitTextStroke: '1px #777', color: 'transparent' }}>EVENT</span>
            <span className="text-white">EVENT</span>
            <span style={{ WebkitTextStroke: '1px #777', color: 'transparent' }}>EVENT</span>
          </div>
          
          <h2 className="text-white text-4xl md:text-[48px] lg:text-[88px]">OUR EXPERTISE</h2>
        </div>

        <Link 
          href="/contact" 
          className="bg-[#91bf3e] text-white text-[15px] font-[800] rounded-full px-[31px] py-[16px] mt-12 hover:bg-[#7fa836] hover:-translate-y-[2px] transition-all inline-block shadow-lg"
        >
          CONTACT US &rarr;
        </Link>

        <div className="mt-[90px] flex flex-col items-center">
          <p className="text-white text-[18px] font-[700] text-center">
            Follow Our Journey
          </p>
          <div className="flex gap-[14px] justify-center mt-6">
            <a href="#" aria-label="Instagram" className="w-[48px] h-[48px] rounded-full bg-[#444444] text-white flex items-center justify-center hover:bg-[#91bf3e] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="w-[48px] h-[48px] rounded-full bg-[#444444] text-white flex items-center justify-center hover:bg-[#91bf3e] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

      </div>

      {/* PART 2: BLACK NAVIGATION FOOTER */}
      <div className="w-full bg-[#000000] pt-12 md:pt-[92px] pb-[36px] relative z-20">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Column 1 */}
            <div className="flex flex-col">
              <h4 className="text-[#163399] text-[18px] font-[800] mb-[22px]">Winoraa</h4>
              <p className="text-white text-[17px] leading-[1.45] w-full max-w-[270px]">
                Creating unforgettable<br/>
                experiences through world-class<br/>
                event production.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col">
              <h4 className="text-[#163399] text-[18px] font-[800] mb-[22px]">Services</h4>
              <div className="flex flex-col">
                {['MICE', 'Events', 'Digital services', 'Corporate Gifting', 'Employee Engagement'].map((link) => (
                  <Link key={link} href="#" className="text-white text-[17px] leading-[2] hover:text-[#91bf3e] transition-colors">
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col">
              <h4 className="text-[#163399] text-[18px] font-[800] mb-[22px]">Company</h4>
              <div className="flex flex-col">
                {['About Us', 'Careers', 'Contact'].map((link) => (
                  <Link key={link} href="#" className="text-white text-[17px] leading-[2] hover:text-[#91bf3e] transition-colors">
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col">
              <h4 className="text-[#163399] text-[18px] font-[800] mb-[22px]">Mail us</h4>
              <a href="mailto:winoraaglobal@gmail.com" className="text-white text-[17px] leading-[2] hover:text-[#91bf3e] transition-colors">
                winoraaglobal@gmail.com
              </a>
            </div>

          </div>

          <div className="w-full h-px bg-white/25 mt-[48px] mb-[32px]"></div>

          <p className="text-center text-white/70 text-[16px]">
            &copy; 2026 Winoraa. All rights reserved.
          </p>
        </div>

        {/* Floating Button */}
        <Link 
          href="/plan"
          className="absolute right-4 bottom-4 md:right-[24px] md:bottom-[32px] lg:right-[34px] lg:bottom-[32px] w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[86px] lg:h-[86px] bg-[#1d3f9e] rounded-full flex flex-col items-center justify-center text-white font-[900] text-[11px] md:text-[13px] leading-[1.1] text-center shadow-xl hover:scale-105 transition-transform z-50"
        >
          <span>LET&apos;S</span>
          <span>PLAN!</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
