import React from "react";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { getMenuData } from "@/data/getSiteData";

export default function MenuPage() {
  const menu = getMenuData();

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F6EEDD] via-[#FAF5EB] to-[#EFE3C8] text-neutral-900 relative select-none">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[15%] -left-28 w-[620px] h-[620px] rounded-full bg-gradient-to-br from-[#D4AF37]/30 via-[#C5A059]/20 to-transparent blur-[110px]" />
        <div className="absolute top-[45%] -right-28 w-[680px] h-[680px] rounded-full bg-gradient-to-bl from-[#C5A059]/30 via-[#DEB887]/20 to-transparent blur-[120px]" />
        <div className="absolute top-[75%] -left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#B88E44]/25 via-[#D4AF37]/15 to-transparent blur-[110px]" />

        <div 
          className="absolute inset-0 opacity-[0.065]"
          style={{
            backgroundImage: `radial-gradient(#9A7432 1.5px, transparent 1.5px)`,
            backgroundSize: '26px 26px'
          }}
        />
      </div>

      <div className="relative z-10">
        <PageBanner title="OUR MENU" breadcrumbs={[{ label: "Our Menu" }]} />

        <div className="pt-4 sm:pt-6 pb-16 sm:pb-24">
          {menu?.categories?.map((category: any, catIndex: number) => (
            <section
              key={category?.id || catIndex}
              className={`max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 ${
                catIndex !== 0 ? "pt-10 sm:pt-20" : ""
              }`}
            >
              <div className="flex flex-col items-center text-center mb-6 sm:mb-12">
                <div className="flex items-center gap-2.5 sm:gap-4 text-[#C5A059] mb-1.5 sm:mb-2.5">
                  <span className="w-8 sm:w-24 h-[1px] bg-[#C5A059]/80" />
                  {category?.iconType === "cutlery" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 sm:w-7 sm:h-7">
                      <path d="M18 2l-6 6M6 2l12 12M4 14l6-6M2 18l6-6M14 4l6 6" />
                      <line x1="12" y1="12" x2="20" y2="20" />
                      <line x1="4" y1="20" x2="12" y2="12" />
                    </svg>
                  )}
                  {category?.iconType === "leaf" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 sm:w-7 sm:h-7">
                      <path d="M12 2C7 5 6 11 12 21C18 11 17 5 12 2Z" />
                      <path d="M12 7V17" />
                      <path d="M12 11C9.5 9 6.5 10 5 12" />
                      <path d="M12 14C14.5 12 17.5 13 19 15" />
                    </svg>
                  )}
                  {category?.iconType === "fleur" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 sm:w-7 sm:h-7">
                      <path d="M12 2c1.5 3 4 5 4 8a4 4 0 0 1-8 0c0-3 2.5-5 4-8z" />
                      <path d="M12 10c-3 0-5.5-1-7-3 0 4 2 8 7 11 5-3 7-7 7-11-1.5 2-4 3-7 3z" />
                      <path d="M7 17h10" />
                    </svg>
                  )}
                  <span className="w-8 sm:w-24 h-[1px] bg-[#C5A059]/80" />
                </div>

                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#9A7432] font-semibold mb-1">
                  {category?.badge}
                </span>

                <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-wide text-neutral-900 leading-none">
                  <span>{category?.titlePart1}</span>
                  <span className="bg-gradient-to-r from-[#D4AF37] via-[#B88E3E] to-[#8C6426] bg-clip-text text-transparent font-normal ml-1.5 sm:ml-2">
                    {category?.titlePart2}
                  </span>
                </h2>

                <div className="flex items-center gap-2 text-[#C5A059]/80 mt-2.5 sm:mt-3">
                  <span className="w-8 sm:w-12 h-[1px] bg-[#C5A059]/60" />
                  <span className="text-[9px] transform rotate-45 border border-[#C5A059] w-2 h-2 bg-[#F6EEDD]" />
                  <span className="w-8 sm:w-12 h-[1px] bg-[#C5A059]/60" />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-14 items-start relative">
                <div className="lg:col-span-5 lg:sticky lg:top-28 self-start z-20">
                  <div className="group relative w-full h-[200px] sm:h-[380px] lg:h-[520px] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_12px_30px_rgba(197,160,89,0.18)] border sm:border-2 border-[#C5A059]/60 transition-all duration-500 ease-out cursor-pointer">
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-0 group-hover:border-[3px] sm:group-hover:border-[4px] border-[#DEB887] pointer-events-none transition-all duration-500 ease-out z-30" />
                    
                    <Image
                      src={category?.image || "/hero.png"}
                      alt={category?.titlePart1 || "Menu category"}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-10"
                      priority={catIndex === 0}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-20" />
                  </div>
                </div>

                <div className="hidden lg:flex lg:col-span-1 justify-center relative self-stretch">
                  <div className="w-[1.5px] bg-[#C5A059]/40 h-full relative">
                    <div className="absolute top-[18%] -left-[4.5px] w-2.5 h-2.5 bg-[#FAF5EB] border border-[#C5A059] transform rotate-45" />
                    <div className="absolute top-[52%] -left-[4.5px] w-2.5 h-2.5 bg-[#FAF5EB] border border-[#C5A059] transform rotate-45" />
                    <div className="absolute top-[82%] -left-[4.5px] w-2.5 h-2.5 bg-[#FAF5EB] border border-[#C5A059] transform rotate-45" />
                  </div>
                </div>

                <div className="lg:col-span-6 flex flex-col space-y-4 sm:space-y-7 pt-1 sm:pt-2 z-10">
                  {category?.items?.map((dish: any, i: number) => (
                    <div key={i} className="group cursor-default pb-2.5 sm:pb-0 border-b border-[#C5A059]/20 sm:border-none">
                      <div className="flex items-baseline justify-between gap-2 sm:gap-3">
                        <h3 className="font-serif text-base sm:text-2xl text-neutral-900 group-hover:text-[#B88E3E] transition-colors duration-200">
                          {dish?.name}
                        </h3>
                        <span className="flex-1 border-b border-dotted border-[#C5A059]/60 mx-1.5 sm:mx-2 relative -top-1" />
                        <span className="font-serif text-base sm:text-2xl text-[#9A7432] font-semibold tracking-tight shrink-0">
                          {dish?.price}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-sm text-neutral-600 font-sans mt-0.5 sm:mt-1.5 leading-relaxed tracking-normal sm:tracking-wide">
                        {dish?.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}