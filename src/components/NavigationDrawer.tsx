// src/components/NavigationDrawer.tsx
"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowRight, Phone, Mail } from "lucide-react";
import { getHeaderData, getFooterData } from "@/data/getSiteData";

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationDrawer({ isOpen, onClose }: NavigationDrawerProps) {
  const header = getHeaderData();
  const footer = getFooterData();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/85 backdrop-blur-sm z-50 transition-opacity duration-500 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-[85vw] max-w-[380px] sm:max-w-[420px] bg-[#070707] border-r border-[#C5A059]/40 text-white z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xl flex flex-col justify-between overflow-y-auto overscroll-contain ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-25 z-0"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 420 800"
        >
          <defs>
            <linearGradient id="drawerGoldVein1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C5A059" stopOpacity="0" />
              <stop offset="35%" stopColor="#E5C158" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#9A7432" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#C5A059" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="drawerGoldVein2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
              <stop offset="45%" stopColor="#FFD700" stopOpacity="0.7" />
              <stop offset="85%" stopColor="#8C6426" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            d="M-20,60 Q80,120 140,240 T280,410 T180,590 T380,760"
            fill="none"
            stroke="url(#drawerGoldVein1)"
            strokeWidth="1.1"
          />
          <path
            d="M400,30 Q310,180 230,290 T120,520 T260,710"
            fill="none"
            stroke="url(#drawerGoldVein2)"
            strokeWidth="0.9"
          />
        </svg>

        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-80 z-10" />

        <div className="px-5 sm:px-8 py-4 sm:py-6 flex items-center justify-between border-b border-[#C5A059]/20 shrink-0 relative z-10 bg-[#070707]/60">
          <Link href="/" onClick={onClose} className="block group">
            <div className="relative w-28 sm:w-36 h-11 sm:h-14 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={(header as { logoImage?: string })?.logoImage || "/logo.png"}
                alt={header?.logoText || "Noir Dining Logo"}
                fill
                priority
                unoptimized
                className="object-contain object-left drop-shadow-[0_2px_12px_rgba(212,175,55,0.3)]"
              />
            </div>
          </Link>

          <button
            onClick={onClose}
            aria-label="Close Menu"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#C5A059]/50 flex items-center justify-center text-[#D4AF37] hover:text-white hover:border-[#D4AF37] hover:bg-[#C5A059]/20 transition-all duration-300 group"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        <nav className="px-5 sm:px-8 py-4 sm:py-6 flex flex-col space-y-1.5 sm:space-y-3 overflow-y-auto relative z-10">
          {header?.navLinks?.map((item: any) => (
            <Link
              key={item.title}
              href={item.path}
              onClick={onClose}
              className="group flex items-center justify-between py-2 border-b border-[#C5A059]/15 hover:border-[#C5A059]/50 transition-all duration-300"
            >
              <span className="font-serif text-base sm:text-lg tracking-[0.14em] sm:tracking-[0.18em] text-[#E5D7B7] group-hover:text-[#FFD700] group-hover:translate-x-2 transition-all duration-300">
                {item.title}
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="px-5 sm:px-8 py-4 sm:py-6 border-t border-[#C5A059]/25 space-y-3.5 sm:space-y-4 bg-[#0a0a0a]/90 shrink-0 relative z-10">
          <Link
            href={header?.ctaButton?.path || "/reservation"}
            onClick={onClose}
            className="group w-full flex items-center justify-between bg-gradient-to-r from-[#C5A059] to-[#E5C158] hover:brightness-110 text-black font-semibold text-[11px] sm:text-xs tracking-[0.18em] sm:tracking-[0.2em] uppercase px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full shadow-lg shadow-black/80 transition-all duration-300"
          >
            <span>{header?.ctaButton?.text || "BOOK A TABLE"}</span>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black text-[#E5C158] flex items-center justify-center transition-transform group-hover:translate-x-1">
              <ArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            </div>
          </Link>

          <div className="pt-1 space-y-1.5 sm:space-y-2 text-[10px] sm:text-[11px] text-neutral-300 font-sans">
            {footer?.phone && (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-[#D4AF37] flex items-center justify-center shrink-0">
                  <Phone className="w-2 h-2 text-[#D4AF37]" />
                </div>
                <span className="truncate">{footer.phone}</span>
              </div>
            )}
            {footer?.email && (
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span className="truncate">{footer.email}</span>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}