// src/components/TestimonialsSection.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import siteData from "@/data/restaurantData.json";

export default function TestimonialsSection() {
  const testimonialsData =
    (siteData as any)?.categories?.Restaurant?.sections?.TestimonialsPage?.variants?.NoirTestimonialsPage1;
  const items = testimonialsData?.items || [];

  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const active = items[current] || {};

  const prev = () =>
    setCurrent((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () =>
    setCurrent((i) => (i === items.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (items.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((i) => (i === items.length - 1 ? 0 : i + 1));
    }, 4500);

    return () => clearInterval(timer);
  }, [items.length]);

  if (!items.length) return null;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#FAF7F2] py-14 sm:py-24 lg:py-32 overflow-hidden select-none"
    >
      {/* 1. Left Plate */}
      <div
        className={`absolute -top-14 -left-16 sm:-top-16 sm:-left-20 lg:-top-20 lg:-left-20 w-[170px] h-[170px] sm:w-[280px] sm:h-[280px] lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden pointer-events-none z-0 sm:z-10 transition-all duration-[1400ms] ease-out ${
          isVisible
            ? "translate-x-0 translate-y-0 rotate-0 opacity-80 sm:opacity-100"
            : "-translate-x-32 -translate-y-32 -rotate-45 opacity-0"
        }`}
      >
        <div className="relative w-full h-full rounded-full overflow-hidden animate-[spin_60s_linear_infinite]">
          <Image
            src="/d.webp"
            alt="Gourmet dish garnish"
            fill
            unoptimized
            className="object-cover object-center rounded-full scale-[1.28] mix-blend-multiply"
          />
        </div>
      </div>

      {/* 2. Right Plate */}
      <div
        className={`absolute -bottom-14 -right-16 sm:-bottom-16 sm:-right-20 lg:-bottom-20 lg:-right-20 w-[170px] h-[170px] sm:w-[280px] sm:h-[280px] lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden pointer-events-none z-0 sm:z-10 transition-all duration-[1400ms] ease-out ${
          isVisible
            ? "translate-x-0 translate-y-0 rotate-0 opacity-80 sm:opacity-100"
            : "translate-x-32 translate-y-32 rotate-45 opacity-0"
        }`}
      >
        <div className="relative w-full h-full rounded-full overflow-hidden animate-[spin_60s_linear_infinite]">
          <Image
            src="/d.webp"
            alt="Gourmet dish garnish"
            fill
            unoptimized
            className="object-cover object-center scale-x-[-1.28] scale-y-[1.28] rounded-full mix-blend-multiply"
          />
        </div>
      </div>

      {/* 3. Center Content Container */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 z-20 flex flex-col items-center text-center">
        {/* Badge Subtitle */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-4 mb-2">
          <span className="w-8 sm:w-14 h-[1.5px] bg-[#C5A059]" />
          <span className="text-[10px] sm:text-[13px] uppercase tracking-[0.25em] sm:tracking-[0.32em] text-[#A68032] font-semibold font-sans">
            {testimonialsData?.badge || "CUSTOMER TESTIMONIALS"}
          </span>
          <span className="w-8 sm:w-14 h-[1.5px] bg-[#C5A059]" />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-[56px] font-normal tracking-[0.05em] text-[#141414] leading-tight mb-2 sm:mb-4 px-2">
          {testimonialsData?.title || "WHAT OUR"}{" "}
          <span className="text-[#C5A059]">
            {testimonialsData?.titleHighlight || ""}
          </span>
        </h2>

        {/* Double Quotes Accent */}
        <div className="flex items-center justify-center gap-3 my-1 sm:my-2">
          <span className="w-8 sm:w-12 h-[1px] bg-[#D4AF37]/50" />
          <span className="font-serif text-2xl sm:text-4xl leading-none text-[#B88E44]">“</span>
          <span className="w-8 sm:w-12 h-[1px] bg-[#D4AF37]/50" />
        </div>

        {/* Slider & Controls Container */}
        <div className="relative w-full max-w-3xl mx-auto mt-3 sm:mt-4 px-10 sm:px-14 lg:px-0">
          <div className="transition-opacity duration-700 ease-in-out min-h-[95px] sm:min-h-[90px] flex items-center justify-center">
            <p
              key={current}
              className="font-serif text-base sm:text-xl lg:text-[23px] text-[#222222] font-normal leading-relaxed sm:leading-[1.65] max-w-2xl mx-auto italic"
            >
              "{active.quote}"
            </p>
          </div>

          {/* Prev Button */}
          <div className="absolute left-0 sm:-left-16 lg:-left-24 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#B88E44]/50 hover:border-[#B88E44] bg-white/70 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none flex items-center justify-center text-[#555] hover:text-[#B88E44] transition-all duration-300 shadow-sm"
            >
              <ChevronLeft className="w-4 h-4 text-[#777] hover:text-[#B88E44]" />
            </button>
            <span className="text-xs sm:text-sm font-sans tracking-wider text-neutral-600 hidden sm:inline-block">
              Prev
            </span>
          </div>

          {/* Next Button */}
          <div className="absolute right-0 sm:-right-16 lg:-right-24 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <span className="text-xs sm:text-sm font-sans tracking-wider text-neutral-600 hidden sm:inline-block">
              Next
            </span>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#B88E44]/50 hover:border-[#B88E44] bg-white/70 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none flex items-center justify-center text-[#555] hover:text-[#B88E44] transition-all duration-300 shadow-sm"
            >
              <ChevronRight className="w-4 h-4 text-[#777] hover:text-[#B88E44]" />
            </button>
          </div>
        </div>

        {/* Author Details */}
        <div key={`author-${current}`} className="flex flex-col items-center mt-6 sm:mt-8">
          <div className="relative w-14 h-14 sm:w-[68px] sm:h-[68px] rounded-full overflow-hidden border-2 sm:border-[2.5px] border-[#C5A059] shadow-md mb-2 sm:mb-2.5">
            <Image
              src={active.image || active.avatar || "/avatar.png"}
              alt={active.name || "Guest"}
              fill
              unoptimized
              className="object-cover object-top"
            />
          </div>

          <h3 className="font-sans font-bold text-xs sm:text-base tracking-[0.15em] text-[#161616] uppercase">
            {active.name}
          </h3>
          <p className="font-sans text-[11px] sm:text-sm text-neutral-500 font-normal mt-0.5">
            {active.location || active.role}
          </p>

          {/* Indicator Dots */}
          <div className="flex items-center gap-1.5 mt-3 sm:mt-4">
            {items.map((_: any, dotIndex: number) => (
              <button
                key={dotIndex}
                onClick={() => setCurrent(dotIndex)}
                aria-label={`Go to slide ${dotIndex + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  dotIndex === current ? "bg-[#B88E44] w-5" : "bg-[#DDD3C4] w-1.5"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}