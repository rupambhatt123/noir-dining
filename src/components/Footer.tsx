// src/components/Footer.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, ChevronUp } from "lucide-react";
import siteData from "@/data/restaurantData.json";

// Gold SVG Social Icons
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current text-[#D4AF37]" viewBox="0 0 24 24">
    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.824C10.648 0 9 1.545 9 4.606V8z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current stroke-2 text-[#D4AF37]" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterXIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current text-[#D4AF37]" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current text-[#D4AF37]" viewBox="0 0 24 24">
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current text-[#D4AF37]" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// Sharp Golden Diamond Divider matching Reference
const GoldDivider = () => (
  <div className="flex items-center justify-center w-full max-w-[190px] my-1.5 sm:my-2.5 opacity-75">
    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-[#C5A059] flex-1" />
    <span className="text-[6.5px] text-[#D4AF37] mx-1.5 leading-none">◆</span>
    <div className="h-[1px] bg-gradient-to-l from-transparent via-[#C5A059] to-[#C5A059] flex-1" />
  </div>
);

export default function Footer() {
  const footerData =
    (siteData as any)?.categories?.Restaurant?.sections?.Footer?.variants?.NoirFooter1 ||
    (siteData as any)?.footer;

  const logoSrc = footerData?.logo || footerData?.logoImage || "/logo.png";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Nav Links dynamically loaded from JSON
  const rawNavLinks =
    footerData?.navLinks ||
    footerData?.navigation ||
    footerData?.quickLinks;

  const navLinks = Array.isArray(rawNavLinks)
    ? rawNavLinks.map((link: any) => ({
        name: (link?.name || link?.label || link?.title || "").toUpperCase(),
        href: link?.href || link?.url || "#",
      }))
    : [];

  // Social Links mapping
  const platforms = [
    { key: "facebook", name: "FACEBOOK", icon: <FacebookIcon /> },
    { key: "instagram", name: "INSTAGRAM", icon: <InstagramIcon /> },
    { key: "twitter", name: "TWITTER", icon: <TwitterXIcon /> },
    { key: "linkedin", name: "LINKEDIN", icon: <LinkedinIcon /> },
    { key: "youtube", name: "YOUTUBE", icon: <YoutubeIcon /> },
  ];

  const getResolvedSocials = () => {
    const socialsObj = footerData?.socials || footerData?.socialLinks;
    if (socialsObj && typeof socialsObj === "object" && !Array.isArray(socialsObj)) {
      return platforms
        .filter((p) => Boolean(socialsObj[p.key] || socialsObj[p.name.toLowerCase()]))
        .map((p) => ({
          name: p.name,
          icon: p.icon,
          href: socialsObj[p.key] || socialsObj[p.name.toLowerCase()],
        }));
    }

    if (Array.isArray(socialsObj) && socialsObj.length > 0) {
      return socialsObj.map((item: any, idx: number) => {
        const str = typeof item === "string" ? item : (item?.name || item?.platform || item?.href || item?.url || "");
        const lower = str.toLowerCase();
        const matched = platforms.find((p) => lower.includes(p.key)) || platforms[idx % platforms.length];
        const href = typeof item === "string" ? item : (item?.href || item?.url || "#");
        return {
          name: matched.name,
          icon: matched.icon,
          href: href,
        };
      });
    }

    return [];
  };

  const socialLinks = getResolvedSocials();

  return (
    <footer className="relative text-white py-10 sm:py-20 px-4 sm:px-12 lg:px-16 overflow-hidden bg-[#070707] border-t border-[#C5A059]/40 select-none">
      
      {/* Real Marble Golden Thin Veins Layer */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-0"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 600"
      >
        <defs>
          <linearGradient id="goldVein1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0" />
            <stop offset="30%" stopColor="#E5C158" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#9A7432" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C5A059" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="goldVein2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="40%" stopColor="#FFD700" stopOpacity="0.75" />
            <stop offset="80%" stopColor="#8C6426" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M-50,80 Q120,40 240,160 T480,240 T720,290 T980,180 T1320,320 T1500,280"
          fill="none"
          stroke="url(#goldVein1)"
          strokeWidth="1.2"
        />
        <path
          d="M-20,95 Q140,55 260,175 T500,250 T680,280"
          fill="none"
          stroke="url(#goldVein1)"
          strokeWidth="0.5"
          opacity="0.6"
        />
        <path
          d="M1500,60 Q1250,110 1100,240 T850,330 T600,360 T350,490 T-30,550"
          fill="none"
          stroke="url(#goldVein2)"
          strokeWidth="1"
        />
        <path
          d="M1420,50 Q1180,130 1020,220 T780,310"
          fill="none"
          stroke="url(#goldVein2)"
          strokeWidth="0.6"
          opacity="0.5"
        />
        <path
          d="M240,160 Q340,90 410,120"
          fill="none"
          stroke="url(#goldVein1)"
          strokeWidth="0.7"
        />
        <path
          d="M850,330 Q920,420 1050,450"
          fill="none"
          stroke="url(#goldVein2)"
          strokeWidth="0.8"
        />
        <path
          d="M1100,240 Q1180,310 1260,300"
          fill="none"
          stroke="url(#goldVein2)"
          strokeWidth="0.6"
        />
        <path
          d="M-20,380 Q160,420 310,360 T560,410"
          fill="none"
          stroke="url(#goldVein1)"
          strokeWidth="0.8"
        />
        <path
          d="M980,180 Q1060,90 1200,80"
          fill="none"
          stroke="url(#goldVein1)"
          strokeWidth="0.7"
        />
      </svg>

      {/* Golden Shimmer Line at Top */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-80" />

      {/* Main Content */}
      <div className="max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center relative z-10">
        
        {/* Center Column: Logo & Details */}
        <div className="lg:col-span-6 flex flex-col items-center text-center order-1 lg:order-2">
          <Link href="/" className="relative w-44 xs:w-52 sm:w-72 h-20 xs:h-24 sm:h-32 mb-1 sm:mb-2 block">
            <Image
              src={logoSrc}
              alt={footerData?.brandName || "Noir Dining Logo"}
              fill
              unoptimized
              priority
              className="object-contain drop-shadow-[0_4px_18px_rgba(212,175,55,0.4)]"
            />
          </Link>

          {/* Golden Floral Motif Line */}
          <div className="flex items-center justify-center w-full max-w-[240px] sm:max-w-[360px] mb-2 sm:mb-3 opacity-85">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-[#C5A059] flex-1" />
            <div className="mx-2 flex items-center gap-1 text-[#D4AF37]">
              <span className="text-[6px] sm:text-[7px]">❖</span>
              <span className="text-[9px] sm:text-[10px]">❖</span>
              <span className="text-[6px] sm:text-[7px]">❖</span>
            </div>
            <div className="h-[1px] bg-gradient-to-l from-transparent via-[#C5A059] to-[#C5A059] flex-1" />
          </div>

          {/* Address */}
          {footerData?.address && (
            <p className="text-[11px] sm:text-[13px] text-neutral-300 tracking-wider font-sans max-w-md px-2 leading-relaxed">
              {footerData.address}
            </p>
          )}

          {/* Contact Details (Phone & Email) */}
          {(footerData?.phone || footerData?.email) && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-[11px] sm:text-[13px] text-neutral-200 mt-3 font-sans">
              {footerData?.phone && (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                    <Phone className="w-2.5 h-2.5 stroke-[2.2]" />
                  </div>
                  <span>{footerData.phone}</span>
                </div>
              )}
              {footerData?.phone && footerData?.email && (
                <span className="text-neutral-600 hidden sm:inline">|</span>
              )}
              {footerData?.email && (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <span>{footerData.email}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Left Column: Nav Links */}
        <div className="lg:col-span-3 flex flex-col items-center order-2 lg:order-1 w-full">
          {navLinks.map((link: any, idx: number) => (
            <React.Fragment key={idx}>
              <Link
                href={link.href}
                className="text-[11px] sm:text-[13px] tracking-[0.24em] sm:tracking-[0.26em] text-[#E5D7B7] hover:text-[#FFD700] font-serif transition-colors py-0.5 uppercase"
              >
                {link.name}
              </Link>
              {idx < navLinks.length - 1 && <GoldDivider />}
            </React.Fragment>
          ))}
        </div>

        {/* Right Column: Social Media Links */}
        <div className="lg:col-span-3 flex flex-col items-center order-3 w-full">
          {socialLinks.map((social: any, idx: number) => (
            <React.Fragment key={idx}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center sm:justify-start gap-3 sm:gap-4 w-full max-w-[170px] text-[11px] sm:text-[12.5px] tracking-[0.22em] sm:tracking-[0.24em] text-[#E5D7B7] hover:text-[#FFD700] font-serif transition-colors py-0.5"
              >
                <span className="flex-shrink-0 group-hover:scale-110 transition-transform">
                  {social.icon}
                </span>
                <span>{social.name}</span>
              </a>
              {idx < socialLinks.length - 1 && <GoldDivider />}
            </React.Fragment>
          ))}
        </div>

      </div>

      {/* Pill Outline "Top ^" Button */}
      <div className="max-w-[1380px] mx-auto flex justify-center sm:justify-end mt-6 sm:mt-3 relative z-10">
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-[#C5A059] bg-[#070707] hover:bg-[#C5A059] text-[#E5D7B7] hover:text-black transition-all text-[11px] sm:text-xs font-serif tracking-widest cursor-pointer shadow-[0_0_15px_rgba(197,160,89,0.25)]"
        >
          <span className="italic font-serif">Top</span>
          <ChevronUp className="w-3.5 h-3.5 stroke-[2.2]" />
        </button>
      </div>

      {/* Copyright Text */}
      {footerData?.copyright && (
        <div className="max-w-[1380px] mx-auto text-center mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-[#C5A059]/20 relative z-10 px-4">
          <p className="text-[10px] sm:text-xs text-neutral-400 font-sans tracking-wider leading-relaxed">
            {footerData.copyright}
          </p>
        </div>
      )}
    </footer>
  );
}