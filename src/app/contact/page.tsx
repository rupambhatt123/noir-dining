// src/app/contact/page.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Clock, ArrowRight, MapPin, CheckCircle2, RotateCcw } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { getContactData } from "@/data/getSiteData";

export default function ContactPage() {
  const contact = getContactData();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitted(false);
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] select-none">
      <PageBanner title="CONTACT US" breadcrumbs={[{ label: "Contact Us" }]} />

      {/* Main Form & Image Section */}
      <section className="bg-white py-10 sm:py-20 lg:py-28 px-4 sm:px-8 md:px-12 border-b border-[#E8DFD1]/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Form / Thank you block */}
          <div className="flex flex-col max-w-xl order-1">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#9A7432] font-semibold">
                {contact?.badge || "GET IN TOUCH"}
              </span>
              <span className="w-8 sm:w-12 h-[1px] bg-[#9A7432]" />
            </div>

            <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-neutral-900 font-normal leading-[1.15] mb-3 sm:mb-6">
              {contact?.title || "We Would Love"}{" "}
              <br className="hidden sm:inline" />
              <span className="text-[#C5A059]">{contact?.titleHighlight || "To Hear From You"}</span>
            </h2>

            <p className="text-neutral-600 text-xs sm:text-base leading-relaxed font-sans mb-3 sm:mb-5">
              {contact?.description}
            </p>

            <div className="flex items-start gap-2.5 text-neutral-500 text-[11px] sm:text-sm font-sans mb-5 sm:mb-8">
              <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>{contact?.responseNote}</span>
            </div>

            {/* Form & Thank You View State */}
            {isSubmitted ? (
              <div className="bg-[#FAF7F2] p-6 sm:p-10 rounded-xl sm:rounded-2xl border border-[#C5A059]/40 shadow-[0_12px_30px_rgba(197,160,89,0.18)] text-center animate-fadeIn">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#C5A059]/15 flex items-center justify-center mx-auto mb-3.5 sm:mb-5 text-[#A68032]">
                  <CheckCircle2 className="w-7 h-7 sm:w-10 sm:h-10" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-neutral-900 mb-1.5 sm:mb-2">
                  Thank You, {formData.name || "Valued Guest"}!
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 font-sans">
                  Aapka message receive ho chuka hai. Hamari team 24 ghante ke andar aapse email (
                  <span className="font-semibold text-neutral-900">{formData.email}</span>) par sampark karegi.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 bg-[#A47133] hover:bg-[#8D5F28] text-white text-[10px] sm:text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-sm"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white border border-[#D5C9B8] text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#C5A059] rounded-none transition"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white border border-[#D5C9B8] text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#C5A059] rounded-none transition"
                  />
                </div>

                <div>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white border border-[#D5C9B8] text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#C5A059] rounded-none transition"
                  >
                    <option value="" disabled>Select Subject</option>
                    <option value="reservation">Reservation Enquiry</option>
                    <option value="event">Private Event / Dining</option>
                    <option value="feedback">Feedback / Experience</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <textarea
                    rows={3}
                    required
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white border border-[#D5C9B8] text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#C5A059] rounded-none resize-none transition"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#A47133] hover:bg-[#8D5F28] text-white text-[11px] sm:text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-sm w-full sm:w-auto"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Image (Mobile par 240px compact height) */}
          <div className="relative w-full h-[240px] xs:h-[280px] sm:h-[450px] lg:h-[620px] rounded-sm overflow-hidden shadow-xl order-2">
            <Image
              src={contact?.image || "/contact.png"}
              alt="Dining table setting"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Map & Location Details Section */}
      <section className="py-10 sm:py-20 lg:py-28 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-6 sm:mb-12">
          <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
            <span className="w-8 sm:w-12 h-[1px] bg-[#9A7432]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#9A7432] font-semibold">
              {contact?.locationSection?.badge || "OUR LOCATION"}
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-[#9A7432]" />
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-neutral-900 font-light tracking-wide leading-tight">
            {contact?.locationSection?.title || "Visit Our"}{" "}
            <span className="text-[#C5A059] font-normal">
              {contact?.locationSection?.titleHighlight || "Restaurant"}
            </span>
          </h2>

          <p className="text-neutral-600 text-xs sm:text-base max-w-2xl mt-2.5 sm:mt-4 leading-relaxed font-sans px-2">
            {contact?.locationSection?.description}
          </p>

          <div className="flex items-center justify-center gap-2 text-neutral-800 text-xs sm:text-base font-medium mt-4 sm:mt-6 px-2">
            <MapPin className="w-4 h-4 text-[#A47133] shrink-0" />
            <span className="break-words">{contact?.locationSection?.address}</span>
          </div>
        </div>

        {/* Google Maps Embed (Mobile par 260px compact height) */}
        <div className="w-full h-[260px] sm:h-[380px] lg:h-[480px] rounded-xl sm:rounded-sm overflow-hidden border border-[#E8DFD1] shadow-lg relative bg-neutral-200">
          <iframe
            title="Restaurant Location Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={contact?.locationSection?.mapEmbedUrl}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}