import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAboutData } from "@/data/getSiteData";

export default function StorySection() {
  const about = getAboutData();

  return (
    <section className="bg-[#FAF7F2] text-[#1B1B1B] pt-8 sm:pt-12 lg:pt-16 pb-6 lg:pb-8 px-4 sm:px-8 md:px-12 lg:px-16 select-none">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
        
        {/* Left Column: Text & Primary Image */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div className="space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="text-[10px] sm:text-[12px] tracking-[0.2em] sm:tracking-[0.25em] text-[#9E6C38] uppercase font-semibold">
                {about?.badge || "REFRESH YOUR TASTE BUDS"}
              </span>
              <span className="w-8 sm:w-12 h-[1px] bg-[#9E6C38]" />
            </div>

            <h2 className="font-serif text-[28px] leading-[1.15] sm:text-4xl lg:text-[54px] text-[#181818] sm:leading-[1.12] font-normal tracking-tight">
              {about?.titleLine1 || "Enjoy An"}{" "}
              <span className="text-[#C5A059]">{about?.titleHighlight || "Exceptional"}</span>
              <br />
              {about?.titleLine2 || "Journey of Taste"}
            </h2>

            <p className="text-neutral-600 leading-[1.6] sm:leading-[1.65] text-xs sm:text-[14px] max-w-xl font-sans pt-1">
              {about?.description ||
                "We see our customers as invited guests to a party, and we are the hosts. It's our job every day to make every important aspect of the customer experience a little bit better."}
            </p>

            <div className="pt-1.5 sm:pt-2">
              <Link
                href={about?.ctaLink || "/about"}
                className="inline-flex items-center gap-3 bg-[#9E6C38] hover:bg-[#86592B] text-white text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase px-5 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 shadow-sm"
              >
                <span>{about?.ctaText || "DISCOVER MORE"}</span>
                <div className="w-4 h-4 rounded-full border border-white/90 flex items-center justify-center">
                  <ArrowRight className="w-2.5 h-2.5 text-white stroke-[2.2]" />
                </div>
              </Link>
            </div>
          </div>

          {/* Bottom Left Image: Mobile par compact (220px) aur Desktop par normal */}
          <div className="relative w-full h-[220px] sm:h-[320px] lg:h-[340px] overflow-hidden mt-3 sm:mt-2 rounded-sm shadow-sm">
            <Image
              src={about?.imagePrimary || "/s2.png"}
              alt="Grilled prawns signature dish"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Column: Mobile par balanced height (260px) and Desktop par full stretch */}
        <div className="lg:col-span-5 relative w-full h-[260px] sm:h-[380px] lg:h-auto lg:min-h-[640px] overflow-hidden rounded-sm shadow-sm">
          <Image
            src={about?.imageSecondary || "/s1.png"}
            alt="Fine dining guest dining experience"
            fill
            unoptimized
            priority
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}