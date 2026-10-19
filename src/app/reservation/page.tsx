// src/app/reservation/page.tsx
"use client";
import React, { useState } from "react";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import siteData from "@/data/restaurantData.json";
import { Calendar as CalendarIcon, Clock, Users, Utensils, CheckCircle2 } from "lucide-react";

export default function ReservationPage() {
  // 100% Dynamic Data connected from restaurantData.json
  const reservationData =
    siteData?.categories?.Restaurant?.sections?.Reservation?.variants?.NoirReservation1;

  const guestOptions: string[] = reservationData?.guestOptions || ["1", "2", "3", "4", "5", "6+"];
  const timeSlots = reservationData?.timeSlots || {
    lunch: ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM"],
    dinner: ["07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM"],
  };
  const seatingOptions = reservationData?.seatingOptions || [
    { id: "main", label: "Main Dining Hall", desc: "Central ambient chandelier seating" },
    { id: "private", label: "Private Dining Suite", desc: "Exclusive curtained luxury space" },
    { id: "terrace", label: "Velvet Terrace", desc: "Open-air scenic rooftop view" },
  ];

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [guests, setGuests] = useState(guestOptions[1] || "2");
  const [seatingArea, setSeatingArea] = useState(seatingOptions[0]?.label || "Main Dining Hall");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialRequest: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert("Please select both a date and time slot for your reservation.");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F6EEDD] via-[#FAF5EB] to-[#EFE3C8] text-neutral-900 relative select-none">
      {/* Background Luxury Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[12%] -left-28 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#D4AF37]/30 via-[#C5A059]/20 to-transparent blur-[120px]" />
        <div className="absolute top-[48%] -right-28 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-[#C5A059]/30 via-[#DEB887]/20 to-transparent blur-[130px]" />
        <div className="absolute top-[82%] left-[15%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#B88E44]/25 via-[#FAF5EB] to-transparent blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.065]"
          style={{
            backgroundImage: "radial-gradient(#9A7432 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10">
        <PageBanner title="BOOK A TABLE" breadcrumbs={[{ label: "Reservation" }]} />

        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
          {/* Header connected from JSON */}
          <div className="flex flex-col items-center text-center mb-14 sm:mb-18">
            <div className="flex items-center gap-4 text-[#C5A059] mb-3">
              <span className="w-12 sm:w-20 h-[1.5px] bg-[#C5A059]/70" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.32em] text-[#9A7432] font-semibold">
                {reservationData?.badge || "RESERVATION DESK"}
              </span>
              <span className="w-12 sm:w-20 h-[1.5px] bg-[#C5A059]/70" />
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#181818] font-normal tracking-wide">
              {reservationData?.title || "RESERVE YOUR"}{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#B88E3E] to-[#8C6426] bg-clip-text text-transparent font-medium">
                {reservationData?.titleHighlight || "TABLE"}
              </span>
            </h1>

            <p className="text-neutral-600 font-sans text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed font-normal">
              {reservationData?.description || "Select your preferred date, timings, and dining lounge to experience culinary excellence crafted just for you."}
            </p>
          </div>

          {/* Booking Form or Success State */}
          {isSubmitted ? (
            <div className="bg-white/90 backdrop-blur-md max-w-2xl mx-auto rounded-3xl p-10 sm:p-14 border border-[#C5A059]/40 shadow-[0_20px_50px_rgba(197,160,89,0.25)] text-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#C5A059]/15 flex items-center justify-center mx-auto mb-6 text-[#A68032]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 mb-3">
                Reservation Confirmed
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base mb-6 leading-relaxed">
                Thank you, <span className="font-semibold text-neutral-900">{formData.name}</span>. Your reservation for{" "}
                <span className="font-semibold text-neutral-900">{guests} guests</span> on{" "}
                <span className="text-[#A68032] font-semibold">{selectedDate}</span> at{" "}
                <span className="text-[#A68032] font-semibold">{selectedTime}</span> ({seatingArea}) has been recorded.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setSelectedTime("");
                }}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DEB887] text-black font-semibold text-xs tracking-[0.2em] uppercase hover:brightness-105 transition-all shadow-md"
              >
                Make Another Booking
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white/85 backdrop-blur-md rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#C5A059]/40 shadow-[0_20px_50px_rgba(197,160,89,0.2)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
                {/* Left Column: Date & Time Picker */}
                <div className="space-y-8">
                  <div>
                    <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#9A7432] font-semibold mb-3">
                      <CalendarIcon className="w-4 h-4 text-[#C5A059]" />
                      Select Date
                    </label>
                    <input
                      type="date"
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#C5A059]/40 rounded-xl px-4 py-3.5 text-neutral-800 font-sans focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] shadow-inner transition-all cursor-pointer"
                    />
                  </div>

                  {/* Guests Selection (From JSON) */}
                  <div>
                    <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#9A7432] font-semibold mb-3">
                      <Users className="w-4 h-4 text-[#C5A059]" />
                      Number of Guests
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                      {guestOptions.map((num: string) => (
                        <button
                          type="button"
                          key={num}
                          onClick={() => setGuests(num)}
                          className={`py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                            guests === num
                              ? "bg-[#C5A059] text-black border-[#C5A059] shadow-md scale-105"
                              : "bg-[#FAF7F2] text-neutral-700 border-[#C5A059]/30 hover:border-[#C5A059]"
                          }`}
                        >
                          {num} {num.includes("+") ? "" : "Ppl"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Lunch Slots (From JSON) */}
                  <div>
                    <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#9A7432] font-semibold mb-3">
                      <Clock className="w-4 h-4 text-[#C5A059]" />
                      Lunch Slots
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {timeSlots.lunch.map((time: string) => (
                        <button
                          type="button"
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-2.5 px-2 rounded-xl text-xs sm:text-sm font-medium transition-all border ${
                            selectedTime === time
                              ? "bg-[#181818] text-[#DEB887] border-[#C5A059] shadow-md scale-[1.03]"
                              : "bg-[#FAF7F2] text-neutral-700 border-[#C5A059]/30 hover:border-[#C5A059]"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dinner Slots (From JSON) */}
                  <div>
                    <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#9A7432] font-semibold mb-3">
                      <Clock className="w-4 h-4 text-[#C5A059]" />
                      Dinner Slots
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {timeSlots.dinner.map((time: string) => (
                        <button
                          type="button"
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-2.5 px-2 rounded-xl text-xs sm:text-sm font-medium transition-all border ${
                            selectedTime === time
                              ? "bg-[#181818] text-[#DEB887] border-[#C5A059] shadow-md scale-[1.03]"
                              : "bg-[#FAF7F2] text-neutral-700 border-[#C5A059]/30 hover:border-[#C5A059]"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Seating Preference & Guest Contact */}
                <div className="space-y-6">
                  {/* Seating Preference (From JSON) */}
                  <div>
                    <label className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#9A7432] font-semibold mb-3">
                      <Utensils className="w-4 h-4 text-[#C5A059]" />
                      Seating Ambience
                    </label>
                    <div className="space-y-2.5">
                      {seatingOptions.map((opt: any) => (
                        <div
                          key={opt.id}
                          onClick={() => setSeatingArea(opt.label)}
                          className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                            seatingArea === opt.label
                              ? "bg-white border-[#C5A059] shadow-md ring-1 ring-[#C5A059]"
                              : "bg-[#FAF7F2] border-[#C5A059]/25 hover:border-[#C5A059]/60"
                          }`}
                        >
                          <div>
                            <p className="font-serif text-sm font-semibold text-neutral-900">
                              {opt.label}
                            </p>
                            <p className="text-xs text-neutral-500 font-sans mt-0.5">
                              {opt.desc}
                            </p>
                          </div>
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              seatingArea === opt.label
                                ? "border-[#C5A059] bg-[#C5A059]"
                                : "border-neutral-400"
                            }`}
                          >
                            {seatingArea === opt.label && (
                              <div className="w-1.5 h-1.5 rounded-full bg-black" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Personal Contact Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Liam Foster"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FAF7F2] border border-[#C5A059]/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder={siteData?.common?.phone || "+33 123 456 789"}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FAF7F2] border border-[#C5A059]/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={siteData?.common?.email || "info@noirdining.com"}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#C5A059]/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1.5">
                      Special Dietary / Anniversary Request (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="E.g., Window view, anniversary dessert with candle..."
                      value={formData.specialRequest}
                      onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#C5A059]/40 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 bg-gradient-to-r from-[#C5A059] via-[#DEB887] to-[#C5A059] hover:brightness-110 text-black font-semibold text-xs tracking-[0.25em] uppercase py-4 rounded-xl shadow-lg shadow-black/15 transition-all duration-300"
                  >
                    {reservationData?.buttonText || "Confirm Table Booking"}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

        <Footer />
      </div>
    </main>
  );
}