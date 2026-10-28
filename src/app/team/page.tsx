"use client";
import React, { useState } from "react";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { getTeamData } from "@/data/getSiteData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FacebookIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.824C10.648 0 9 1.545 9 4.606V8z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsappIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.09 7.42C8.92 7.42 8.65 7.49 8.42 7.74C8.19 7.99 7.54 8.6 7.54 9.85C7.54 11.1 8.45 12.3 8.58 12.47C8.71 12.64 10.37 15.2 12.91 16.29C15.02 17.2 15.45 17.02 15.92 16.98C16.39 16.94 17.43 16.36 17.65 15.74C17.87 15.12 17.87 14.58 17.8 14.47C17.74 14.36 17.57 14.3 17.31 14.17C17.06 14.04 15.82 13.43 15.59 13.35C15.36 13.27 15.2 13.23 15.03 13.48C14.86 13.73 14.38 14.3 14.24 14.47C14.1 14.64 13.96 14.66 13.71 14.53C13.46 14.4 12.4 14.05 11.14 12.93C10.16 12.05 9.5 10.97 9.33 10.68C9.16 10.39 9.31 10.23 9.44 10.1C9.55 9.99 9.69 9.81 9.82 9.66C9.95 9.51 9.99 9.41 10.08 9.24C10.17 9.07 10.12 8.93 10.06 8.8C10 8.67 9.52 7.5 9.32 7.02C9.13 6.55 8.93 6.62 8.78 6.61C8.64 6.6 8.47 6.6 8.3 6.6L9.09 7.42Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
);

export default function TeamPage() {
  const teamData = getTeamData();
  const members = teamData?.members || [];
  const [mobileIndex, setMobileIndex] = useState(0);

  const prevMobile = () =>
    setMobileIndex((prev) => (prev === 0 ? members.length - 1 : prev - 1));
  const nextMobile = () =>
    setMobileIndex((prev) => (prev === members.length - 1 ? 0 : prev + 1));

  const getSocialLinks = (member: any) => [
    {
      icon: <FacebookIcon />,
      href: member?.socials?.facebook || "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <InstagramIcon />,
      href: member?.socials?.instagram || "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <WhatsappIcon />,
      href: member?.socials?.whatsapp
        ? member.socials.whatsapp.startsWith("http")
          ? member.socials.whatsapp
          : `https://wa.me/${member.socials.whatsapp.replace(/[^0-9]/g, "")}`
        : "https://whatsapp.com",
      label: "WhatsApp",
    },
    {
      icon: <LinkedinIcon />,
      href: member?.socials?.linkedin || "https://linkedin.com",
      label: "LinkedIn",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F6EEDD] via-[#FAF5EB] to-[#EFE3C8] text-neutral-900 relative">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[18%] -left-28 w-[620px] h-[620px] rounded-full bg-gradient-to-br from-[#D4AF37]/28 via-[#C5A059]/18 to-transparent blur-[120px]" />
        <div className="absolute top-[52%] -right-28 w-[680px] h-[680px] rounded-full bg-gradient-to-bl from-[#C5A059]/25 via-[#DEB887]/18 to-transparent blur-[130px]" />
        <div className="absolute top-[80%] left-[20%] w-[580px] h-[580px] rounded-full bg-gradient-to-tr from-[#B88E44]/22 via-[#FAF5EB] to-transparent blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(#9A7432 1.5px, transparent 1.5px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10">
        <PageBanner title="OUR CHEFS" breadcrumbs={[{ label: "Our Chefs" }]} />

        <section className="pt-4 sm:pt-6 pb-16 sm:pb-24 px-6 sm:px-10 lg:px-14">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
              <div className="flex items-center gap-3 sm:gap-4 text-[#C5A059] mb-2 sm:mb-3">
                <span className="w-10 sm:w-16 h-[1px] bg-[#C5A059]/70" />
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#9A7432] font-semibold">
                  OUR EXPERT TEAM
                </span>
                <span className="w-10 sm:w-16 h-[1px] bg-[#C5A059]/70" />
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#181818] font-normal tracking-wide">
                MEET OUR{" "}
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#B88E3E] to-[#8C6426] bg-clip-text text-transparent font-medium">
                  TEAM
                </span>
              </h2>

              <p className="text-neutral-600 font-sans text-xs sm:text-base max-w-xl mx-auto mt-2 sm:mt-3 leading-relaxed font-normal">
                Our talented team brings passion, creativity and dedication to
                create memorable dining experiences for you.
              </p>
            </div>

            <div className="block sm:hidden relative px-2">
              <div className="relative w-full max-w-[340px] mx-auto min-h-[480px]">
                {members.map((member: any, idx: number) => {
                  const isActive = idx === mobileIndex;
                  if (!isActive) return null;

                  return (
                    <div
                      key={idx}
                      className="w-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(197,160,89,0.25)] border border-[#C5A059]/40 animate-fadeIn cursor-default"
                    >
                      <div className="relative w-full h-[320px]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          unoptimized
                          className="object-cover object-top"
                        />
                      </div>

                      <div className="p-6 flex flex-col items-center text-center bg-white">
                        <h3 className="font-serif text-xl text-[#161616] font-bold tracking-wide">
                          {member.name}
                        </h3>
                        <p className="text-xs uppercase tracking-[0.2em] text-[#9A7432] font-semibold mt-1">
                          {member.role}
                        </p>

                        <div className="flex items-center gap-3 mt-4 text-white">
                          {getSocialLinks(member).map((social, i) => (
                            <a
                              key={i}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={social.label}
                              className="w-8 h-8 rounded-full bg-[#B88E44] hover:bg-[#9A7432] transition-colors flex items-center justify-center shadow-sm cursor-pointer"
                            >
                              {social.icon}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prevMobile}
                  aria-label="Previous chef"
                  className="w-9 h-9 rounded-full border border-[#B88E44]/60 flex items-center justify-center text-[#B88E44] bg-white/70"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  {members.map((_: any, dotIdx: number) => (
                    <button
                      key={dotIdx}
                      onClick={() => setMobileIndex(dotIdx)}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        dotIdx === mobileIndex ? "w-6 bg-[#B88E44]" : "w-2 bg-[#C5A059]/40"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextMobile}
                  aria-label="Next chef"
                  className="w-9 h-9 rounded-full border border-[#B88E44]/60 flex items-center justify-center text-[#B88E44] bg-white/70"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
              {members.map((member: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="relative flex flex-col h-[460px] bg-white rounded-2xl border border-[#C5A059]/30 shadow-md overflow-hidden cursor-default"
                  >
                    <div className="relative w-full h-[68%] overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 100vw, 25vw"
                        className="object-cover object-top"
                      />
                    </div>

                    <div className="h-[32%] px-4 py-4 flex flex-col justify-between items-center text-center bg-white">
                      <div>
                        <h3 className="font-serif text-lg text-[#161616] font-semibold tracking-wide">
                          {member.name}
                        </h3>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-[#9A7432] font-semibold mt-0.5">
                          {member.role}
                        </p>
                      </div>

                      <div className="flex items-center gap-2.5 text-white pb-1">
                        {getSocialLinks(member).map((social, i) => (
                          <a
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="w-7 h-7 rounded-full bg-[#B88E44] hover:bg-[#9A7432] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}