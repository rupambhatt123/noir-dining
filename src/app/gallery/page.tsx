// src/app/gallery/page.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import siteData from "@/data/restaurantData.json";

export default function GalleryPage() {
  const gallery =
    (siteData as any)?.categories?.Restaurant?.sections?.Gallery?.variants?.NoirGallery1;
  const items: any[] = gallery?.items || [];
  
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () =>
    setActiveSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  const nextSlide = () =>
    setActiveSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));

  const currentPhoto = items[activeSlide] || items[0];

  const getLayoutClasses = (layout?: string) => {
    switch (layout) {
      case "large-portrait":
        return "md:col-span-6 md:row-span-2 min-h-[460px] md:min-h-[520px]";
      case "wide":
        return "md:col-span-6 min-h-[260px] md:min-h-[300px]";
      case "half-wide":
        return "md:col-span-6 min-h-[320px] md:min-h-[380px]";
      case "quarter":
        return "md:col-span-3 min-h-[240px] md:min-h-[280px]";
      case "standard-bw":
      case "standard":
      default:
        return "md:col-span-3 min-h-[240px] md:min-h-[280px]";
    }
  };

  return (
    <main className="min-h-screen bg-white select-none">
      <PageBanner title="OUR GALLERY" breadcrumbs={[{ label: "Our Gallery" }]} />

      <section className="py-10 sm:py-20 md:py-24 px-4 sm:px-8 max-w-[1400px] mx-auto">
        {/* MOBILE VIEW */}
        <div className="block md:hidden">
          <div className="relative w-full h-[360px] xs:h-[420px] rounded-2xl overflow-hidden shadow-xl border border-[#C5A059]/40 bg-neutral-900">
            {currentPhoto && (
              <Image
                key={currentPhoto.id || activeSlide}
                src={currentPhoto.image}
                alt={currentPhoto.title || "Gallery image"}
                fill
                priority
                sizes="100vw"
                className="object-cover transition-opacity duration-500 ease-in-out"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-left pointer-events-none">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-medium font-sans">
                NOIR GALLERY
              </span>
              <h3 className="font-serif text-lg text-white font-medium drop-shadow-sm">
                {currentPhoto?.title || "Signature Dining Moments"}
              </h3>
            </div>

            <button
              onClick={prevSlide}
              aria-label="Previous photo"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-[#C5A059]/50 text-[#C5A059] flex items-center justify-center hover:bg-[#C5A059] hover:text-black transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next photo"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-[#C5A059]/50 text-[#C5A059] flex items-center justify-center hover:bg-[#C5A059] hover:text-black transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-1.5 mt-5 px-4">
            {items.map((_: any, idx: number) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to photo ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === idx
                    ? "w-6 bg-[#B88E44]"
                    : "w-1.5 bg-[#DDD3C4] hover:bg-[#B88E44]/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:grid md:grid-cols-12 gap-4 sm:gap-6 auto-rows-fr">
          {items.map((item: any, index: number) => {
            const isGrayscale = item.layout === "standard-bw";
            const layoutClass = getLayoutClasses(item.layout);

            return (
              <div
                key={item.id || index}
                className={`relative rounded-sm overflow-hidden group shadow-md ${layoutClass}`}
              >
                <Image
                  src={item.image}
                  alt={item.title || "Gallery image"}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                    isGrayscale ? "grayscale" : ""
                  }`}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-serif text-sm tracking-wide drop-shadow-md">
                    {item.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}