// src/components/CulinaryStatsSection.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface CulinaryStatsSectionProps {
  image?: string;
}

// Custom Counter Component with Scroll Trigger
function AnimatedCounter({
  target,
  suffix = "",
  duration = 1800,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, target, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function CulinaryStatsSection({ image }: CulinaryStatsSectionProps) {
  const bgImage =
    image ||
    "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1200&auto=format&fit=crop";

  return (
    <section className="bg-[#111111] text-white overflow-hidden select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-0 lg:min-h-[460px] lg:h-[480px] items-stretch">
        
        {/* Left Half: Chef Plating Image (Mobile par 240px, desktop par full height) */}
        <div className="lg:col-span-6 relative h-[240px] sm:h-[320px] lg:h-full min-h-0">
          <Image
            src={bgImage}
            alt="Chef garnishing gourmet steak dish"
            fill
            unoptimized
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        {/* Right Half: Content & Animated Stats */}
        <div className="lg:col-span-6 flex flex-col justify-center px-5 sm:px-10 lg:px-16 py-10 sm:py-12 lg:py-0 bg-[#111111]">
          <div className="max-w-[560px]">
            {/* Subtitle Badge */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
              <span className="text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] text-[#C5A059] uppercase font-semibold">
                CULINARY EXCELLENCE
              </span>
              <span className="w-8 sm:w-10 h-[1px] bg-[#C5A059]/70" />
            </div>

            {/* Heading: whitespace-nowrap removed for mobile readability */}
            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] text-white font-normal tracking-tight leading-tight sm:leading-none">
              Passion in <span className="text-[#C5A059]">Every Plate</span>
            </h2>

            {/* Paragraph */}
            <p className="text-neutral-300 text-xs sm:text-[13.5px] leading-relaxed mt-3 sm:mt-4 font-sans max-w-xl">
              Our chefs combine traditional techniques with modern flavours to create dishes
              that are both authentic and innovative. Each plate is a work of art, crafted
              with care and attention to detail.
            </p>

            {/* Dynamic Animated Stats Row (Balanced grid layout on small screens) */}
            <div className="grid grid-cols-3 items-center pt-6 sm:pt-8 mt-5 sm:mt-6 border-t border-white/10 sm:border-t-0">
              {/* Stat 1 */}
              <div className="text-left pr-2 sm:pr-6">
                <span className="font-serif text-2xl xs:text-3xl sm:text-4xl text-[#C5A059] font-normal leading-none block">
                  <AnimatedCounter target={10} suffix="+" />
                </span>
                <p className="text-[9px] sm:text-[10px] tracking-wider text-neutral-400 mt-1.5 sm:mt-2 font-sans uppercase leading-tight">
                  Years of Excellence
                </p>
              </div>

              {/* Stat 2 with Borders */}
              <div className="text-center px-2 sm:px-6 border-x border-white/15">
                <span className="font-serif text-2xl xs:text-3xl sm:text-4xl text-[#C5A059] font-normal leading-none block">
                  <AnimatedCounter target={50} suffix="+" />
                </span>
                <p className="text-[9px] sm:text-[10px] tracking-wider text-neutral-400 mt-1.5 sm:mt-2 font-sans uppercase leading-tight">
                  Signature Dishes
                </p>
              </div>

              {/* Stat 3 */}
              <div className="text-right pl-2 sm:pl-6">
                <span className="font-serif text-2xl xs:text-3xl sm:text-4xl text-[#C5A059] font-normal leading-none block">
                  <AnimatedCounter target={10} suffix="K+" />
                </span>
                <p className="text-[9px] sm:text-[10px] tracking-wider text-neutral-400 mt-1.5 sm:mt-2 font-sans uppercase leading-tight">
                  Happy Guests
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}