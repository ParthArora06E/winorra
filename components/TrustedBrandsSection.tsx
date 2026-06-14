import React from "react";
import Image from "next/image";

const logos = [
  "MTS_LOGO REG.png",
  "Metsi-Logo-1.png",
  "WhatsApp_Image_2025-12-30_at_6.28.53_PM__1_-removebg-preview.png",
  "2025-12-30_18_15_37-02-8X3米_拷贝.jpg-removebg-preview.png",
  "2025-12-30_18_17_38-01-8X3米_拷贝__2_.jpg-removebg-preview.png",
  "2025-12-30_18_20_15-images_-_Antigravity_-_script.js-removebg-preview.png",
  "2025-12-30_18_22_42-images_-_Antigravity_-_script.js-removebg-preview.png",
  "467735332_569220405701299_6205380545285116017_n-removebg-preview.png",
  "1.png",
  "cf228243-da69-4d66-907e-3cd8c652043c-removebg-preview.png",
  "18354053-9c92-4523-ae88-462c897fd9a9-removebg-preview.png"
];

const TrustedBrandsSection = () => {
  return (
    <section className="w-full bg-[#d3d6da] relative overflow-hidden">
      {/* Desktop layout wrapper */}
      <div className="max-w-[1220px] mx-auto px-4 md:px-8 lg:px-0 py-16 md:py-0 md:h-[383px] flex flex-col relative z-10">
        
        {/* Top Row: Heading and Tagline */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center md:absolute md:top-[82px] w-full mt-4 md:mt-0">
          
          <h2 
            className="text-black uppercase text-center md:text-left mb-8 md:mb-0 font-heading font-black antialiased"
            style={{
              fontSize: 'clamp(38px, 5vw, 56px)',
              lineHeight: 0.95,
              width: '100%',
              maxWidth: '700px',
              letterSpacing: '-0.02em',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              textRendering: 'optimizeLegibility'
            }}
          >
            TRUSTED BY GROWING<br />BRANDS
          </h2>

          <div className="flex items-center justify-center md:justify-end md:mt-2">
            <p 
              className="text-[#1a1a1a] text-center md:text-right"
              style={{
                fontSize: '15px',
                fontWeight: 600,
                lineHeight: 1.4,
                width: '100%',
                maxWidth: '300px'
              }}
            >
              Creating experiences that speak<br />beyond the moment.
            </p>
          </div>

        </div>

        {/* Logo Row Marquee */}
        <div className="md:absolute md:top-[285px] w-full mt-12 md:mt-0 overflow-hidden flex flex-nowrap group" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
          
          {/* Marquee Animation Styles */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-100%); }
            }
            .animate-marquee {
              animation: marquee 35s linear infinite;
              display: flex;
              flex-shrink: 0;
              width: max-content;
            }
            .group:hover .animate-marquee {
              animation-play-state: paused;
            }
          `}} />

          {/* First Marquee Group */}
          <div className="animate-marquee items-center justify-around">
            {logos.map((logo, idx) => (
              <div key={`logo-1-${idx}`} className="mx-8 md:mx-12 lg:mx-16 flex-shrink-0">
                <Image 
                  src={`/logos/${logo}`} 
                  alt="Brand Logo" 
                  width={300}
                  height={120}
                  className="h-12 md:h-16 lg:h-20 w-auto max-w-none object-contain grayscale opacity-50 mix-blend-multiply hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>

          {/* Second Marquee Group (Duplicate for seamless loop) */}
          <div className="animate-marquee items-center justify-around" aria-hidden="true">
            {logos.map((logo, idx) => (
              <div key={`logo-2-${idx}`} className="mx-8 md:mx-12 lg:mx-16 flex-shrink-0">
                <Image 
                  src={`/logos/${logo}`} 
                  alt="Brand Logo" 
                  width={300}
                  height={120}
                  className="h-12 md:h-16 lg:h-20 w-auto max-w-none object-contain grayscale opacity-50 mix-blend-multiply hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default TrustedBrandsSection;
