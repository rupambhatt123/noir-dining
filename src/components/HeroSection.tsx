"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import NavigationDrawer from "@/components/NavigationDrawer";
import siteData from "@/data/restaurantData.json";

export default function HeroSection() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerData =
    (siteData as any)?.categories?.Restaurant?.sections?.Banner?.variants?.NoirBanner1;

  const slides =
    Array.isArray(bannerData?.slides) && bannerData.slides.length > 0
      ? bannerData.slides
      : Array.isArray(bannerData?.backgroundImages) && bannerData.backgroundImages.length > 0
      ? bannerData.backgroundImages.map((img: string, idx: number) => ({
          image: img,
          badge: idx === 0 ? "SWEET INDULGENCE" : idx === 1 ? "FINE DINING RESTAURANT" : "CULINARY EXCELLENCE",
          title: idx === 0 ? "EXQUISITE TASTE" : idx === 1 ? "SAVORY FLAVOR DISHES" : "ARTISANAL MASTERPIECES"
        }))
      : [
          {
            image: bannerData?.backgroundImage || "/hero.webp",
            badge: "SWEET INDULGENCE",
            title: "EXQUISITE TASTE"
          }
        ];

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

      <section
        id="hero"
        className="relative w-full h-[75vh] sm:h-[94vh] min-h-[500px] sm:min-h-[700px] max-h-[920px] flex flex-col justify-between overflow-hidden bg-[#0A0A0A] select-none"
      >
        <div className="absolute inset-0 z-0">
          {slides.map((slide: any, index: number) => {
            const isActive = index === currentSlide;
            const slideImg = slide?.image || slide;

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
                    src={slideImg}
                    alt={slide?.title || "Noir Dining Hero Slide"}
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

        <header className="w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-14 py-4 sm:py-8 flex items-center justify-between gap-2 z-30 relative">
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open Navigation Menu"
            className="group flex flex-col justify-center items-start gap-[4px] sm:gap-[5px] p-1.5 sm:p-2 cursor-pointer focus:outline-none z-20 shrink-0"
          >
            <span className="w-6 sm:w-8 h-[2.5px] bg-[#C5A059] group-hover:bg-[#DEB887] transition-all duration-300" />
            <span className="w-6 sm:w-8 h-[2.5px] bg-[#C5A059] group-hover:bg-[#DEB887] transition-all duration-300" />
            <span className="w-6 sm:w-8 h-[2.5px] bg-[#C5A059] group-hover:bg-[#DEB887] transition-all duration-300" />
          </button>

          <div className="flex-1 flex justify-center items-center pointer-events-none z-10 sm:flex-initial sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
            <Link href="/" className="pointer-events-auto block">
              <div className="relative w-24 xs:w-28 sm:w-52 md:w-56 h-11 xs:h-12 sm:h-20 md:h-24 transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src={bannerData?.logoImage || "/logo.png"}
                  alt={bannerData?.logoText || "Noir Dining"}
                  fill
                  priority
                  unoptimized
                  className="object-contain drop-shadow-[0_4px_16px_rgba(212,175,55,0.35)]"
                />
              </div>
            </Link>
          </div>

          <Link
            href={bannerData?.ctaButton?.path || "/reservation"}
            className="group flex items-center gap-1.5 sm:gap-3 bg-[#C5A059] hover:bg-[#DEB887] text-black font-semibold tracking-wider uppercase pl-3 sm:pl-6 pr-1.5 sm:pr-2.5 py-1.5 sm:py-2.5 rounded-full transition-all duration-300 shadow-xl z-20 shrink-0 whitespace-nowrap"
          >
            <span className="font-sans font-bold text-[10px] sm:text-xs">
              {bannerData?.ctaButton?.text || "BOOK A TABLE"}
            </span>
            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-black text-[#C5A059] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 stroke-[2.5]" />
            </div>
          </Link>
        </header>

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
                    {slide?.badge || slide?.subtitle || "SWEET INDULGENCE"}
                  </span>
                  <span className="w-6 sm:w-16 h-[1.5px] bg-[#C5A059]" />
                </div>

                <h1 className="font-serif text-3xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal tracking-wide leading-tight sm:leading-tight mb-2 sm:mb-4 drop-shadow-md">
                  {slide?.title || "EXQUISITE TASTE"}
                </h1>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
