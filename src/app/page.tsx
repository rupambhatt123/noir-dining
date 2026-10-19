// src/app/page.tsx
import React from "react";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import CulinaryStatsSection from "@/components/CulinaryStatsSection";
import AmbienceSection from "@/components/AmbienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#0A0704] overflow-x-hidden">
      <HeroSection />

      <ScrollReveal>
        <StorySection />
      </ScrollReveal>

      <ScrollReveal>
        <CulinaryStatsSection />
      </ScrollReveal>

      <ScrollReveal>
        <AmbienceSection />
      </ScrollReveal>

      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>

      <ScrollReveal>
        <TeamSection />
      </ScrollReveal>

      <Footer />
    </main>
  );
}