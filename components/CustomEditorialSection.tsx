"use client";

import React from "react";

export default function CustomEditorialSection() {
  return (
    <section id="about" className="relative z-20 w-full bg-white text-black min-h-screen lg:min-h-[900px] overflow-hidden flex items-center">
      
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
              Music Festivals, Concerts and<br/>incredible music experiences.
            </h2>
            <p className="font-sans text-[14.5px] leading-[1.55] text-black/85 font-medium">
              Festival Haus, our Flagship Music and Entertainment brand, is where some of our biggest moments
              happen. The Fathom // Festival Haus Studio develops, promotes, and produces large-scale Live Concerts and
              Music Festival events, in-house. Our passion for music runs deep, and from concept-to-show, we
              strategically develop and execute to produce incredible mega-events that bring together thousands.
            </p>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col gap-2">
            <h2 className="font-heading font-bold text-[24px] leading-[1.15] text-black tracking-tight">
              World-Class Athletic Experiences.
            </h2>
            <p className="font-sans text-[14.5px] leading-[1.55] text-black/85 font-medium">
              Our original foray into event production began in 2012. It all started with the Mud Challenger
              Adventure Series, a secret, navy-seal designed challenge course. That first event brought two
              thousand people together to get muddy and complete our challenge out in the wilderness. Fast
              forward a few years, and our portfolio of unique athletic brands is second to none, and includes a
              diverse line-up of healthy, fun, and challenging experiences.
            </p>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col gap-2">
            <h2 className="font-heading font-bold text-[24px] leading-[1.15] text-black tracking-tight">
              We provide turn-key production<br/>services for every type of event.
            </h2>
            <p className="font-sans text-[14.5px] leading-[1.55] text-black/85 font-medium">
              Our production reputation is stellar. We are well-known for our rapid brand development, effective
              marketing strategies and production logistics, all done in-house. From conceptualization and
              creative, to marketing and physical site logistics, and a wide gamut of equipment, our Services
              Team is available to collaborate on projects at any stage of and any scale, using the same
              techniques, equipment, and partners we use to produce our own smash-hit events and festivals.
            </p>
          </div>

          {/* Block 4 */}
          <div className="flex flex-col gap-2">
            <h2 className="font-heading font-bold text-[24px] leading-[1.15] text-black tracking-tight">
              Innovating guest experience and the technology<br/>that powers it.
            </h2>
            <p className="font-sans text-[14.5px] leading-[1.55] text-black/85 font-medium">
              Our craft is where the the arts converge with technology. The Fathom Labs team is at the core of
              our research, technology development, and innovation pipeline that shapes how we operate. Our
              proprietary technology systems allow us to be agile, flexible, move swiftly and launch rapidly.
              Fathom has the ability to deploy experiences and brands from the ground-up; faster and better
              than any other production company.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
