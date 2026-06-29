"use client";

import React from "react";

export default function CustomEditorialSection() {
  return (
    <section id="events" className="relative z-20 w-full bg-white text-black min-h-screen lg:min-h-[900px] overflow-hidden flex items-center">
      
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-[95px] py-20 flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-12">
        
        {/* LEFT COLUMN: 3D Video Mask Text */}
        <div className="w-full lg:w-auto flex-shrink-0 lg:-ml-10 xl:-ml-[80px]">
          
          <div className="relative w-max max-w-full">
            {/* Flow Content (Invisible, sets the layout size) */}
            <h1 
              className="font-heading font-black uppercase tracking-[-0.04em] leading-[0.8] text-left opacity-0 pointer-events-none pr-4 lg:pr-8"
              style={{ fontSize: 'clamp(2rem, 12vw, 135px)' }}
            >
              CREATING<br />
              AMAZING<br />
              EXPERIENCES<br />
              IS WHAT<br />
              WE DO.
            </h1>

            {/* Video Container */}
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-gray-200">
               <video
                 autoPlay
                 muted
                 loop
                 playsInline
                 className="w-full h-full object-cover"
               >
                 <source src="/video/Video_Generation_From_Sky_View.mp4" type="video/mp4" />
               </video>
            </div>

            {/* Mask Layer: White background, black text becomes transparent window */}
            <div className="absolute inset-0 bg-white mix-blend-screen pointer-events-none z-10 flex flex-col justify-start">
              <h1 
                className="font-heading font-black uppercase tracking-[-0.04em] leading-[0.8] text-left text-black pr-4 lg:pr-8"
                style={{ fontSize: 'clamp(2rem, 12vw, 135px)' }}
              >
                CREATING<br />
                AMAZING<br />
                EXPERIENCES<br />
                IS WHAT<br />
                WE DO.
              </h1>
            </div>

            {/* Subtle Edge Definition Layer */}
            <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-start">
              <h1 
                className="font-heading font-black uppercase tracking-[-0.04em] leading-[0.8] text-left text-transparent pr-4 lg:pr-8"
                style={{ 
                  fontSize: 'clamp(2rem, 12vw, 135px)',
                  WebkitTextStroke: '1px rgba(0,0,0,0.1)'
                }}
              >
                CREATING<br />
                AMAZING<br />
                EXPERIENCES<br />
                IS WHAT<br />
                WE DO.
              </h1>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Content Blocks */}
        <div className="w-full lg:max-w-[620px] flex flex-col gap-[45px]">
          
          {/* Block 1 */}
          <div className="flex flex-col gap-2">
            <h2 className="font-heading font-bold text-[24px] leading-[1.15] text-black tracking-tight">
              Innovative Stall Designing &<br/>Premium Fabrication.
            </h2>
            <p className="font-sans text-[14.5px] leading-[1.55] text-black/85 font-medium">
              Your brand&apos;s physical presence speaks volumes. At Winoraa Global, we conceptualize and build custom exhibition stalls that captivate and engage. From the initial 3D design to the final on-site fabrication, we use premium materials and cutting-edge techniques to ensure your booth stands out and effectively communicates your brand&apos;s unique story.
            </p>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col gap-2">
            <h2 className="font-heading font-bold text-[24px] leading-[1.15] text-black tracking-tight">
              Spectacular Stage Designing.
            </h2>
            <p className="font-sans text-[14.5px] leading-[1.55] text-black/85 font-medium">
              The stage is where the magic happens. We design immersive and technically advanced stage setups that elevate any event. Whether it&apos;s an intimate corporate gathering or a massive award ceremony, our stage designs integrate state-of-the-art lighting, AV production, and dynamic structures to create an unforgettable focal point that leaves audiences in awe.
            </p>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col gap-2">
            <h2 className="font-heading font-bold text-[24px] leading-[1.15] text-black tracking-tight">
              Flawlessly Executed<br/>Corporate Shows.
            </h2>
            <p className="font-sans text-[14.5px] leading-[1.55] text-black/85 font-medium">
              We understand that corporate events are a reflection of your company&apos;s excellence. Winoraa Global provides end-to-end production for corporate shows, dealer meets, and galas. We handle the logistics, aesthetics, and technical execution with military precision, ensuring a seamless experience that impresses your stakeholders and achieves your business objectives.
            </p>
          </div>

          {/* Block 4 */}
          <div className="flex flex-col gap-2">
            <h2 className="font-heading font-bold text-[24px] leading-[1.15] text-black tracking-tight">
              Unforgettable Product Launches<br/>and Experiential Marketing.
            </h2>
            <p className="font-sans text-[14.5px] leading-[1.55] text-black/85 font-medium">
              Introduce your latest innovations to the world with maximum impact. We orchestrate spectacular product launches that generate buzz and drive engagement. By combining creative staging, immersive sound, and breathtaking visual effects, we help you create a powerful narrative that connects with your audience and ensures your new product makes a monumental entrance.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
