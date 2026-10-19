// src/components/HeroSection.tsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import NavigationDrawer from "@/components/NavigationDrawer";
import { getHeroData } from "@/data/getSiteData";

export default function HeroSection() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const hero = getHeroData();

  const defaultSlides = [
    {
      image: "/hero.png",
      subtitle: "FINE DINING RESTAURANT",
      title: "SAVORY FLAVOR DISHES",
    },
    {
      image: "/s2.png",
      subtitle: "CULINARY EXCELLENCE",
      title: "ARTISANAL MASTERPIECES",
    },
    {
      image: "/dessert.avif",
      subtitle: "SWEET INDULGENCE",
      title: "EXQUISITE TASTE",
    },
  ];

  const heroSlides = (hero as any)?.slides;
  const slides =
    Array.isArray(heroSlides) && heroSlides.length > 0
      ? heroSlides
      : defaultSlides;

  // Faster auto-slide transition
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <NavigationDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      {/* Responsive Section Height: Mobile par compact (h-[75vh] min-h-[500px]), Desktop par original intact */}
      <section
        id="hero"
        className="relative w-full h-[75vh] sm:h-[94vh] min-h-[500px] sm:min-h-[700px] max-h-[920px] flex flex-col justify-between overflow-hidden bg-[#0A0A0A] select-none"
      >
        <div className="absolute inset-0 z-0">
          {slides.map((slide: any, index: number) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-[4000ms] ease-out will-change-transform ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title || "Hero Slide"}
                    fill
                    priority={index === 0}
                    unoptimized
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Header: Mobile par padding aur spacing properly balanced */}
        <header className="w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-14 py-4 sm:py-8 flex items-center justify-between z-30 relative">
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open Navigation Menu"
            className="group flex flex-col justify-center items-start gap-[4px] sm:gap-[5px] p-1.5 sm:p-2 cursor-pointer focus:outline-none z-20 shrink-0"
          >
            <span className="w-6 sm:w-8 h-[2.5px] bg-[#C5A059] group-hover:bg-[#DEB887] transition-all duration-300" />
            <span className="w-6 sm:w-8 h-[2.5px] bg-[#C5A059] group-hover:bg-[#DEB887] transition-all duration-300" />
            <span className="w-6 sm:w-8 h-[2.5px] bg-[#C5A059] group-hover:bg-[#DEB887] transition-all duration-300" />
          </button>

          {/* Logo: Mobile par overlap na kare isliye width/height scaled down */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10">
            <Link href="/" className="pointer-events-auto block">
              <div className="relative w-28 sm:w-52 md:w-56 h-12 sm:h-20 md:h-24 transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src={(hero as any)?.logoImage || "/logo.png"}
                  alt={(hero as any)?.logoText || "Noir Dining"}
                  fill
                  priority
                  unoptimized
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Book A Table CTA Button: Mobile par compact fit */}
          <Link
            href={(hero as any)?.ctaButton?.path || "/reservation"}
            className="group flex items-center gap-1.5 sm:gap-3 bg-[#C5A059] hover:bg-[#DEB887] text-black font-semibold tracking-wider uppercase pl-3 sm:pl-6 pr-1.5 sm:pr-2.5 py-1.5 sm:py-2.5 rounded-full transition-all duration-300 shadow-xl z-20 shrink-0"
          >
            <span className="font-sans font-bold text-[10px] sm:text-xs">
              <span className="hidden sm:inline">{(hero as any)?.ctaButton?.text || "BOOK A TABLE"}</span>
              <span className="inline sm:hidden">BOOK</span>
            </span>
            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-black text-[#C5A059] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 stroke-[2.5]" />
            </div>
          </Link>
        </header>

        {/* Center Hero Titles */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center my-auto pb-6 sm:pb-10">
          {slides.map((slide: any, idx: number) => {
            const isActive = idx === currentSlide;
            if (!isActive) return null;

            return (
              <div
                key={idx}
                className="flex flex-col items-center transition-all duration-700 transform translate-y-0 opacity-100"
              >
                <div className="flex items-center justify-center gap-2.5 sm:gap-4 mb-2 sm:mb-3">
                  <span className="w-6 sm:w-16 h-[1.5px] bg-[#C5A059]" />
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#C5A059] font-medium font-sans">
                    {slide.subtitle}
                  </span>
                  <span className="w-6 sm:w-16 h-[1.5px] bg-[#C5A059]" />
                </div>

                <h1 className="font-serif text-3xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal tracking-wide leading-tight sm:leading-tight mb-2 sm:mb-4 drop-shadow-md">
                  {slide.title}
                </h1>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}