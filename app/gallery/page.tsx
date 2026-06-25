import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | WINORAA GLOBAL",
  description: "Gallery under maintenance.",
};

export default function GalleryPage() {
  return (
    <div className="relative min-h-[100vh] bg-black flex flex-col justify-center items-center overflow-hidden pt-32 pb-20">
      
      {/* Background cinematic elements specifically for the gallery */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#12319c]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#91bf3e]/5 rounded-full blur-[150px]" />
      </div>

      {/* Maintenance Heading */}
      <div className="w-full flex justify-center bg-[#12319c] py-6 my-auto shadow-[0_0_50px_rgba(18,49,156,0.5)] z-10 border-y border-white/10">
        <div className="text-white font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase text-center px-4 drop-shadow-xl">
          GALLERY UNDER MAINTENANCE
        </div>
      </div>
      
    </div>
  );
}
