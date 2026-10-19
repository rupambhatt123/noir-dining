// src/components/Navbar.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import NavigationDrawer from "@/components/NavigationDrawer";
import { getHeaderData } from "@/data/getSiteData";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const header = getHeaderData();

  return (
    <>
      <NavigationDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      <header className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 flex items-center justify-between z-30 relative">
        <button
          onClick={() => setDrawerOpen(true)}
          aria-label="Open Navigation Menu"
          className="group flex flex-col justify-center items-start gap-1.5 p-2 -ml-2 cursor-pointer focus:outline-none"
        >
          <span className="w-8 h-[2px] bg-[#C5A059] group-hover:bg-white group-hover:w-9 transition-all duration-300" />
          <span className="w-6 h-[2px] bg-[#C5A059] group-hover:bg-white group-hover:w-9 transition-all duration-300" />
          <span className="w-8 h-[2px] bg-[#C5A059] group-hover:bg-white transition-all duration-300" />
        </button>

        <Link href="/" className="flex flex-col items-center select-none cursor-pointer group">
          {"logoImage" in header && header.logoImage ? (
            <div className="relative w-36 sm:w-44 h-16 sm:h-20 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={(header as { logoImage: string }).logoImage}
                alt={header.logoText || "Noir Dining Logo"}
                fill
                priority
                unoptimized
                className="object-contain"
              />
            </div>
          ) : (
            <>
              <div className="text-[#C5A059] mb-0.5">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M12 2L14.5 7.5L20 8.5L16 12.5L17 18L12 15.5L7 18L8 12.5L4 8.5L9.5 7.5L12 2Z" />
                </svg>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl tracking-[0.25em] text-[#DEB887] font-semibold leading-none">
                {header.logoText}
              </h1>
              <span className="text-[10px] tracking-[0.45em] text-[#C5A059] font-medium mt-1">
                {header.tagline}
              </span>
            </>
          )}
        </Link>

        <Link
          href={header.ctaButton.path}
          className="group flex items-center gap-3 bg-[#C5A059] hover:bg-[#DEB887] text-black font-semibold text-xs md:text-sm tracking-wider uppercase px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-black/50"
        >
          <span>{header.ctaButton.text}</span>
          <div className="w-6 h-6 rounded-full bg-black text-[#DEB887] flex items-center justify-center transition-transform group-hover:translate-x-1">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </Link>
      </header>
    </>
  );
}