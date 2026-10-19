// src/components/LuxuryBackground.tsx
"use client";
import React from "react";

export default function LuxuryBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Base Warm Luxury Gradient */}
      <div className="absolute inset-0 bg-[#FAF6F0]" />

      {/* 2. Soft Golden Atmospheric Light Halos */}
      <div className="absolute -top-[10%] -left-[10%] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br from-[#D4AF37]/18 via-[#C5A059]/10 to-transparent blur-[120px] animate-pulse duration-[8000ms]" />
      
      <div className="absolute top-[35%] -right-[10%] w-[50vw] h-[50vw] max-w-[750px] max-h-[750px] rounded-full bg-gradient-to-bl from-[#C5A059]/16 via-[#E6C687]/8 to-transparent blur-[130px]" />
      
      <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] max-w-[850px] max-h-[850px] rounded-full bg-gradient-to-tr from-[#B88E44]/15 via-[#FAF6F0] to-transparent blur-[140px]" />

      {/* 3. Subtle Repeating Luxury Gold Geometric Watermark Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#B88E44 1px, transparent 1px), radial-gradient(#C5A059 1px, #FAF6F0 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}
      />

      {/* 4. Elegant Vignette Border Glow */}
      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(197,160,89,0.12)] pointer-events-none" />
    </div>
  );
}