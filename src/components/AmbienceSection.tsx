import React from "react";
import Image from "next/image";
import { getAmbienceData } from "@/data/getSiteData";

export default function AmbienceSection() {
  const ambience = getAmbienceData();

  return (
    <section className="bg-[#FAF7F2] text-[#1A1A1A] overflow-hidden select-none m-0 p-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-0 lg:min-h-[440px] lg:h-[480px] items-stretch">
        
        {/* Left Side: Content from JSON */}
        <div className="lg:col-span-6 flex flex-col justify-center px-5 sm:px-12 lg:pl-24 lg:pr-14 py-9 sm:py-12 lg:py-0 order-1">
          <div className="max-w-[480px]">
            {/* Badge */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
              <span className="text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] text-[#A67C37] uppercase font-semibold">
                {ambience.badge}
              </span>
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#A67C37]" />
            </div>

            {/* Heading */}
            <h2 className="font-serif text-[26px] leading-[1.18] sm:text-4xl lg:text-[44px] text-[#181818] sm:leading-[1.12] font-normal tracking-tight">
              {ambience.title}
            </h2>

            {/* Description */}
            <p className="text-neutral-600 leading-[1.6] sm:leading-[1.65] text-xs sm:text-[14px] font-sans mt-3 sm:mt-4">
              {ambience.description}
            </p>
          </div>
        </div>

        {/* Right Side: Image from JSON (Mobile par 240px, desktop par full height) */}
        <div className="lg:col-span-6 relative w-full h-[240px] sm:h-[320px] lg:h-full min-h-0 order-2">
          <Image
            src={ambience.image}
            alt="Ambience fine dining setting"
            fill
            unoptimized
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
}