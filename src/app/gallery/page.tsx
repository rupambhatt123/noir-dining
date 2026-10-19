// src/app/gallery/page.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { getGalleryData } from "@/data/getSiteData";

export default function GalleryPage() {
  const gallery = getGalleryData();
  const items = gallery?.items || [];
  const [activeSlide, setActiveSlide] = useState(0);

  const getImg = (id: number) =>
    items.find((item: any) => item.id === id)?.image || "";
  const getAlt = (id: number) =>
    items.find((item: any) => item.id === id)?.title || "Gallery image";

  const prevSlide = () =>
    setActiveSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  const nextSlide = () =>
    setActiveSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));

  const currentPhoto = items[activeSlide] || items[0];

  return (
    <main className="min-h-screen bg-white select-none">
      <PageBanner title="OUR GALLERY" breadcrumbs={[{ label: "Our Gallery" }]} />

      <section className="py-10 sm:py-20 md:py-24 px-4 sm:px-8 max-w-[1400px] mx-auto">
        {/* MOBILE VIEW: 1 Photo Front me + Navigation Dots + Arrow Controls */}
        <div className="block md:hidden">
          <div className="relative w-full h-[360px] xs:h-[420px] rounded-2xl overflow-hidden shadow-xl border border-[#C5A059]/40 bg-neutral-900">
            {currentPhoto && (
              <Image
                key={currentPhoto.id}
                src={currentPhoto.image}
                alt={currentPhoto.title || "Gallery image"}
                fill
                priority
                sizes="100vw"
                className="object-cover transition-opacity duration-500 ease-in-out"
              />
            )}

            {/* Gradient Overlay & Photo Title */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-left pointer-events-none">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-medium font-sans">
                NOIR GALLERY
              </span>
              <h3 className="font-serif text-lg text-white font-medium drop-shadow-sm">
                {currentPhoto?.title || "Signature Dining Moments"}
              </h3>
            </div>

            {/* Prev Arrow */}
            <button
              onClick={prevSlide}
              aria-label="Previous photo"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-[#C5A059]/50 text-[#C5A059] flex items-center justify-center hover:bg-[#C5A059] hover:text-black transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={nextSlide}
              aria-label="Next photo"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-[#C5A059]/50 text-[#C5A059] flex items-center justify-center hover:bg-[#C5A059] hover:text-black transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Indicator Dots */}
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

        {/* DESKTOP & TABLET VIEW: Original Asymmetric Grid Layout Intact */}
        <div className="hidden md:flex flex-col space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">
            <div className="md:col-span-6 relative min-h-[460px] md:min-h-[640px] rounded-sm overflow-hidden group shadow-md">
              <Image
                src={getImg(1)}
                alt={getAlt(1)}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="md:col-span-6 flex flex-col gap-4 sm:gap-6">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="relative h-56 sm:h-64 rounded-sm overflow-hidden group shadow-md">
                  <Image
                    src={getImg(2)}
                    alt={getAlt(2)}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="relative h-56 sm:h-64 rounded-sm overflow-hidden group shadow-md">
                  <Image
                    src={getImg(3)}
                    alt={getAlt(3)}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <div className="relative flex-1 min-h-[280px] sm:min-h-[350px] rounded-sm overflow-hidden group shadow-md">
                <Image
                  src={getImg(4)}
                  alt={getAlt(4)}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">
            <div className="md:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
              <div className="relative h-64 sm:h-72 rounded-sm overflow-hidden group shadow-md">
                <Image
                  src={getImg(5)}
                  alt={getAlt(5)}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="relative h-64 sm:h-72 rounded-sm overflow-hidden group shadow-md">
                <Image
                  src={getImg(6)}
                  alt={getAlt(6)}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            <div className="md:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
              <div className="relative h-64 sm:h-72 rounded-sm overflow-hidden group shadow-md">
                <Image
                  src={getImg(7)}
                  alt={getAlt(7)}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="relative h-64 sm:h-72 rounded-sm overflow-hidden group shadow-md">
                <Image
                  src={getImg(8)}
                  alt={getAlt(8)}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">
            <div className="md:col-span-6 relative min-h-[380px] sm:min-h-[460px] rounded-sm overflow-hidden group shadow-md">
              <Image
                src={getImg(9)}
                alt={getAlt(9)}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="md:col-span-6 relative min-h-[380px] sm:min-h-[460px] rounded-sm overflow-hidden group shadow-md">
              <Image
                src={getImg(10)}
                alt={getAlt(10)}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
            <div className="md:col-span-3 relative h-60 sm:h-72 rounded-sm overflow-hidden group shadow-md">
              <Image
                src={getImg(11)}
                alt={getAlt(11)}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="md:col-span-3 relative h-60 sm:h-72 rounded-sm overflow-hidden group shadow-md">
              <Image
                src={getImg(12)}
                alt={getAlt(12)}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}