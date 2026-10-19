"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import siteData from "@/data/restaurantData.json";

// Chef Hat Icon
const ChefHatIcon = () => (
  <svg
    className="w-8 h-8 text-[#C5A059] mx-3 inline-block"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
    <line x1="6" y1="17" x2="18" y2="17" />
  </svg>
);

export default function TestimonialsPage() {
  // 100% Direct Data Binding from restaurantData.json
  const testimonialsData =
    (siteData as any)?.categories?.Restaurant?.sections?.TestimonialsPage?.variants?.NoirTestimonialsPage1;
  const items = testimonialsData?.items || [];
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () =>
    setActiveSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  const nextSlide = () =>
    setActiveSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));

  const currentItem = items[activeSlide] || items[0];

  // Horizontal Card Layout (JSON fields: quote, image/avatar, name, location/role, rating)
  const renderCard = (item: any) => {
    const ratingCount = typeof item?.rating === "number" ? item.rating : 5;

    return (
      <div className="bg-[#FFFDF9]/95 backdrop-blur-xs p-6 sm:p-7 rounded-2xl border border-[#C5A059]/40 shadow-[0_4px_20px_rgba(197,160,89,0.08)] hover:shadow-[0_12px_28px_rgba(197,160,89,0.18)] transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 relative h-full">
        {/* Round Avatar from JSON */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 border border-[#C5A059]/30 shadow-sm">
          <Image
            src={item?.image || item?.avatar || "/avatar.png"}
            alt={item?.name || "Guest"}
            fill
            unoptimized
            className="object-cover object-top"
          />
        </div>

        {/* Right Content from JSON */}
        <div className="flex-1 flex flex-col justify-between w-full h-full">
          {/* Rating Stars + Pale Gold Quote Decor */}
          <div className="flex items-center justify-between mb-2 sm:mb-2.5">
            <div className="flex items-center gap-1 text-[#C5A059]">
              {[...Array(ratingCount)].map((_, i) => (
                <span key={i} className="text-base sm:text-lg leading-none">
                  ★
                </span>
              ))}
            </div>

            <span className="font-serif text-3xl sm:text-4xl text-[#E8D4B0] leading-none select-none">
              ”
            </span>
          </div>

          {/* Testimonial Quote */}
          <p className="font-sans text-neutral-700 leading-relaxed text-xs sm:text-[13.5px] font-normal mb-3">
            “{item?.quote}”
          </p>

          {/* Guest Name & Location / Role */}
          <div className="pt-2 border-t border-[#C5A059]/15 flex items-center justify-between text-xs mt-auto">
            <h3 className="font-serif font-bold text-neutral-900 tracking-wide text-xs sm:text-sm">
              {item?.name}
            </h3>
            <p className="text-[11px] text-[#9A7432] font-medium tracking-wider">
              {item?.location || item?.role}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FBF7F0] via-[#FAF5EB] to-[#F5EEDB] text-neutral-900 relative">
      {/* Background Subtle Warm Grain */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#9A7432 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10">
        <PageBanner
          title={testimonialsData?.bannerTitle || testimonialsData?.title || "TESTIMONIALS"}
          breadcrumbs={[{ label: "Testimonials" }]}
        />

        {/* Content Container */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-10 pt-4 sm:pt-6 pb-16 sm:pb-24">
          {/* Section Header Connected to JSON */}
          <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
            {/* Chef Hat with Lines */}
            <div className="flex items-center justify-center w-full max-w-xs mb-2">
              <span className="h-[1px] bg-[#C5A059]/70 flex-1" />
              <ChefHatIcon />
              <span className="h-[1px] bg-[#C5A059]/70 flex-1" />
            </div>

            {/* Subtitle Badge from JSON */}
            {testimonialsData?.badge && (
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#9A7432] font-semibold mb-2 font-sans">
                {testimonialsData.badge}
              </span>
            )}

            {/* Title & Highlight from JSON */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[52px] text-[#141414] font-normal tracking-wide leading-tight">
              {testimonialsData?.title || "WHAT OUR"}{" "}
              <span className="text-[#C5A059] font-normal">
                {testimonialsData?.titleHighlight || ""}
              </span>
            </h1>

            {/* Description from JSON */}
            {testimonialsData?.description && (
              <p className="text-neutral-600 font-sans text-xs sm:text-[14px] max-w-xl mx-auto mt-2 leading-relaxed px-2">
                {testimonialsData.description}
              </p>
            )}
          </div>

          {/* MOBILE VIEW: Single Horizontal Card Slider */}
          <div className="block md:hidden">
            <div className="relative">
              {currentItem && renderCard(currentItem)}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between gap-4 mt-5 px-2">
              <button
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="w-9 h-9 rounded-full bg-white border border-[#C5A059]/50 text-[#9A7432] flex items-center justify-center hover:bg-[#C5A059] hover:text-white transition-colors shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {items.map((_: any, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeSlide === idx ? "w-6 bg-[#B88E44]" : "w-1.5 bg-[#DDD3C4]"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="w-9 h-9 rounded-full bg-white border border-[#C5A059]/50 text-[#9A7432] flex items-center justify-center hover:bg-[#C5A059] hover:text-white transition-colors shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* DESKTOP VIEW: 2-Column Horizontal Cards Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
            {items.map((item: any, idx: number) => (
              <div key={item.id || item.name || idx} className="h-full">
                {renderCard(item)}
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}