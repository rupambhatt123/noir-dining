// src/app/about/page.tsx
import React from "react";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import StorySection from "@/components/StorySection";
import Footer from "@/components/Footer";
import { getPhilosophyData } from "@/data/getSiteData";

export default function AboutPage() {
  const philosophy = getPhilosophyData();

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F5EEDB] via-[#FAF4E8] to-[#EFE3C8] text-neutral-900 relative overflow-hidden select-none">
      {/* 1. High-Visibility Luxury Golden Atmospheric Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top-left distinct gold glow */}
        <div className="absolute top-[20%] -left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#D4AF37]/35 via-[#C5A059]/25 to-transparent blur-[100px]" />
        
        {/* Center-right vibrant gold glow behind text */}
        <div className="absolute top-[48%] -right-20 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-[#C5A059]/30 via-[#DEB887]/20 to-transparent blur-[110px]" />

        {/* Subtle Luxury Pattern Layer */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(#9A7432 1.5px, transparent 1.5px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="relative z-10">
        <PageBanner title="ABOUT US" breadcrumbs={[{ label: "About Us" }]} />
        <StorySection hideCta={true} />

        {/* Philosophy Section */}
        <section className="bg-transparent py-28 px-6 md:px-12 overflow-hidden relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Image Composition with Golden Frame Accents */}
            <div className="relative w-full h-[460px] sm:h-[530px]">
              {/* Luxury Double Gold Border Frame */}
              <div className="absolute top-3 left-3 w-[78%] h-[88%] border-2 border-[#C5A059]/60 pointer-events-none z-0 shadow-[0_0_20px_rgba(197,160,89,0.25)]" />

              {/* Secondary Image with Gold Shadow */}
              <div className="absolute left-0 bottom-0 w-[48%] h-[78%] rounded-sm overflow-hidden shadow-[0_15px_35px_rgba(197,160,89,0.3)] border border-[#C5A059]/50 z-10">
                <Image
                  src={philosophy?.imageSecondary || "/p.jpg"}
                  alt="Signature dining setting"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              {/* Primary Image */}
              <div className="absolute right-0 top-0 w-[68%] h-[88%] rounded-sm overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.25)] border-2 border-[#C5A059]/70 z-20">
                <Image
                  src={philosophy?.imagePrimary || "/hero.png"}
                  alt="Our Food Philosophy"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>

            {/* Philosophy Text Content */}
            <div className="flex flex-col space-y-6 max-w-lg lg:pl-6">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.25em] text-[#9A7432] font-bold">
                  {philosophy?.badge || "QUALITY & BALANCE"}
                </span>
                <span className="w-14 h-[1.5px] bg-[#C5A059]" />
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#181818] font-normal leading-[1.1]">
                {philosophy?.title || "OUR FOOD"} <br />
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#B88E3E] to-[#8C6426] bg-clip-text text-transparent font-medium">
                  {philosophy?.titleHighlight || "PHILOSOPHY"}
                </span>
              </h2>

              <div className="w-20 h-[2px] bg-gradient-to-r from-[#C5A059] to-transparent" />

              <p className="text-neutral-700 leading-relaxed text-sm sm:text-base font-sans">
                {philosophy?.description}
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}