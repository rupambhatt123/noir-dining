import React from "react";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { getBlogDetailData } from "@/data/getSiteData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailsPage({ params }: PageProps) {
  await params;
  const detail = getBlogDetailData();

  return (
    <main className="min-h-screen bg-white">
      <PageBanner
        title="BLOG DETAILS"
        breadcrumbs={[
          { label: "Our Blog", href: "/blog" },
          { label: "Blog Details" },
        ]}
      />

      <article className="py-16 sm:py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="relative w-full h-[360px] sm:h-[480px] md:h-[540px] rounded-sm overflow-hidden shadow-md">
          <Image
            src={detail.heroImage}
            alt="Hero Dish"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="object-cover"
          />
        </div>

        <div className="flex items-center gap-4 mt-10 mb-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
            {detail.date} &nbsp;/&nbsp; {detail.category}
          </span>
          <span className="flex-1 h-[1px] bg-[#C5A059]/40" />
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-neutral-900 font-normal tracking-wide leading-[1.15]">
          {detail.titleLine1} <br />
          <span className="text-[#C5A059]">{detail.titleHighlight}</span>
        </h1>

        <div className="mt-8 space-y-5 text-neutral-700 text-sm sm:text-base leading-relaxed font-sans">
          {detail.introParagraphs.map((para:any, i: number) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="my-14 sm:my-16 flex items-center justify-center gap-4 sm:gap-8">
          <span className="w-16 sm:w-28 h-[1.5px] bg-[#C5A059]/60" />
          <blockquote className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#C5A059] text-center max-w-xl font-normal leading-snug">
            “{detail.quote}”
          </blockquote>
          <span className="w-16 sm:w-28 h-[1.5px] bg-[#C5A059]/60" />
        </div>

        <div className="mt-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 tracking-wide uppercase">
            {detail.historySection.title}
          </h2>
          <div className="w-12 h-[2px] bg-[#C5A059] mt-3 mb-5" />
          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-sans">
            {detail.historySection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 my-14">
          {detail.featureCards.map((card: any) => (
            <div key={card.id} className="flex flex-col">
              <div className="relative h-60 sm:h-64 w-full rounded-sm overflow-hidden shadow-sm">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold text-center mt-5 mb-2">
                {card.title}
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm text-center leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 tracking-wide uppercase">
            {detail.tipsSection.title}
          </h2>
          <div className="w-12 h-[2px] bg-[#C5A059] mt-3 mb-5" />
          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-sans">
            {detail.tipsSection.description}
          </p>
        </div>
      </article>
    </main>
  );
}