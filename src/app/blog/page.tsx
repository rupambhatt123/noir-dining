"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import { getBlogData } from "@/data/getSiteData";

export default function BlogPage() {
  const blog = getBlogData();
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <main className="min-h-screen bg-white">
      <PageBanner title="OUR BLOG" breadcrumbs={[{ label: "Our Blog" }]} />

      <section className="pt-4 sm:pt-6 pb-16 sm:pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <div className="flex items-center gap-3 sm:gap-4 text-[#C5A059] mb-2 sm:mb-3">
            <span className="w-12 sm:w-20 h-[1px] bg-[#C5A059]/60" />
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 sm:w-8 sm:h-8">
              <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
              <line x1="6" y1="17" x2="18" y2="17" />
            </svg>
            <span className="w-12 sm:w-20 h-[1px] bg-[#C5A059]/60" />
          </div>

          <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#9A7432] font-semibold mb-1 sm:mb-2">
            {blog.badge}
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-neutral-900 font-light tracking-wide leading-tight">
            {blog.title} <span className="text-[#C5A059] font-normal">{blog.titleHighlight}</span>
          </h2>

          <p className="text-neutral-600 text-xs sm:text-base max-w-2xl mt-2.5 sm:mt-3 leading-relaxed font-sans">
            {blog.description}
          </p>
        </div>

        <div className="flex flex-col space-y-12 sm:space-y-20">
          {blog.posts.map((post: any, index: number) => {
            const isImageLeft = index % 2 === 0;

            return (
              <article
                key={post.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center"
              >
                <div className={`lg:col-span-6 ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}>
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[420px] rounded-sm overflow-hidden group shadow-md cursor-pointer">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  </Link>
                </div>

                <div className={`lg:col-span-6 flex flex-col items-start ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}>
                  <span className="text-xs tracking-[0.2em] uppercase text-[#C5A059] font-medium mb-2.5">
                    {post.date} &nbsp;/&nbsp; {post.category}
                  </span>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl text-neutral-900 font-normal tracking-wide leading-tight hover:text-[#C5A059] transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>

                  <div className="w-12 h-[2px] bg-[#C5A059] my-4 sm:my-5" />

                  <p className="text-neutral-600 text-xs sm:text-base leading-relaxed font-sans mb-6 sm:mb-8">
                    {post.description}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2.5 px-6 py-2.5 sm:py-3 border border-[#C5A059] text-[#9A7432] hover:bg-[#C5A059] hover:text-white transition-all duration-300 text-xs uppercase tracking-widest font-medium group"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-2 mt-14 sm:mt-20">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="w-10 h-10 rounded-sm border border-[#C5A059]/40 flex items-center justify-center text-neutral-700 hover:bg-[#C5A059] hover:text-white transition"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-sm font-sans text-sm transition-all ${
                currentPage === page
                  ? "bg-[#B87D3B] text-white font-medium shadow-sm"
                  : "border border-[#C5A059]/40 text-neutral-800 hover:bg-[#C5A059]/20"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}
            className="w-10 h-10 rounded-sm border border-[#C5A059]/40 flex items-center justify-center text-neutral-700 hover:bg-[#C5A059] hover:text-white transition"
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </main>
  );
}