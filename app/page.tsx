import BackgroundVideo from "@/components/BackgroundVideo";
import Hero from "@/components/Hero";
import TrustedBrandsSection from "@/components/TrustedBrandsSection";
import CustomEditorialSection from "@/components/CustomEditorialSection";
import AboutHeroSection from "@/components/AboutHeroSection";
import ServicesSection from "@/components/ServicesSection";

import dynamic from "next/dynamic";

const GlobalNetwork = dynamic(() => import("@/components/GlobalNetwork"), { ssr: false });

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Layer */}
      <BackgroundVideo src="/video/background.mp4" />
      
      {/* Content Layer */}
      <div className="relative z-10">
        <Hero />
        <CustomEditorialSection />
        <AboutHeroSection />
        <ServicesSection />

        <GlobalNetwork />
        <TrustedBrandsSection />
      </div>
    </div>
  );
}
