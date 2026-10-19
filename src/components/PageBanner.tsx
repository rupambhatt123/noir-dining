"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import NavigationDrawer from "@/components/NavigationDrawer";
import { getHeaderData, getBannerData } from "@/data/getSiteData";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  bgImage?: string;
}

export default function PageBanner({
  title,
  breadcrumbs,
  bgImage,
}: PageBannerProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const header = getHeaderData();
  const banner = getBannerData();

  // Dark moody fine dining fallback background matching reference
  const bannerBg =
    bgImage ||
    banner?.backgroundImage ||
    "/p.jpg";

  return (
    <>
      <NavigationDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      <section className="relative w-full h-[54vh] min-h-[450px] max-h-[580px] bg-[#070605] flex flex-col justify-between overflow-hidden">
        {/* Background Image with Dark Vignette Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={bannerBg}
            alt={title}
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center brightness-[0.7] contrast-[1.05]"
          />
          {/* Reference Dark Moody Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85 pointer-events-none" />
        </div>

        {/* Top Navbar Header: Hamburger + Visible Centered Logo + Book A Table Button */}
        <header className="w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-14 py-5 sm:py-7 flex items-center justify-between z-30 relative">
          {/* Left: 3-bar Golden Hamburger */}
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open Navigation Menu"
            className="group flex flex-col justify-center items-start gap-[5px] p-1.5 cursor-pointer focus:outline-none z-20"
          >
            <span className="w-7 sm:w-8 h-[2px] bg-[#C5A059] group-hover:bg-[#DEB887] transition-all duration-300" />
            <span className="w-5 sm:w-6 h-[2px] bg-[#C5A059] group-hover:bg-[#DEB887] transition-all duration-300" />
            <span className="w-7 sm:w-8 h-[2px] bg-[#C5A059] group-hover:bg-[#DEB887] transition-all duration-300" />
          </button>

          {/* Center: Always Visible Golden Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20">
            <Link href="/" className="block group">
              <div className="relative w-36 sm:w-48 md:w-56 h-16 sm:h-20 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={(header as { logoImage?: string })?.logoImage || "/logo.png"}
                  alt={header?.logoText || "Noir Dining Logo"}
                  fill
                  priority
                  unoptimized
                  className="object-contain drop-shadow-[0_4px_16px_rgba(212,175,55,0.45)]"
                />
              </div>
            </Link>
          </div>

          {/* Right: Golden Pill "BOOK A TABLE" Button */}
          <Link
            href={header?.ctaButton?.path || "/contact"}
            className="group flex items-center gap-2.5 sm:gap-3 bg-[#DEB887] hover:bg-[#C5A059] text-black font-semibold text-[11px] sm:text-xs tracking-[0.14em] sm:tracking-[0.18em] uppercase pl-5 sm:pl-6 pr-2 sm:pr-2.5 py-2 sm:py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-black/60 z-20"
          >
            <span className="font-sans font-bold">{header?.ctaButton?.text || "BOOK A TABLE"}</span>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black text-[#DEB887] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            </div>
          </Link>
        </header>

        {/* Center Title & Breadcrumbs */}
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col items-center text-center justify-center my-auto z-10 pb-6">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[68px] tracking-[0.15em] sm:tracking-[0.22em] text-white font-normal uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            {title}
          </h1>

          {/* Breadcrumb Navigation */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 sm:gap-2.5 mt-3 sm:mt-4 text-[11px] sm:text-xs tracking-[0.22em] sm:tracking-[0.28em] uppercase text-neutral-300">
              <Link href="/" className="hover:text-[#DEB887] transition-colors">
                HOME
              </Link>
              {breadcrumbs.map((item, idx) => (
                <React.Fragment key={idx}>
                  <ChevronRight className="w-3 h-3 text-[#C5A059]" />
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-[#DEB887] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-[#DEB887] font-medium">
                      {item.label}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
        </div>

        {/* Bottom Spacer */}
        <div className="h-4 w-full pointer-events-none z-10" />
      </section>
    </>
  );
}