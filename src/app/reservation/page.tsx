"use client";
import React, { useState } from "react";
import PageBanner from "@/components/PageBanner";
import siteData from "@/data/restaurantData.json";
import { Calendar as CalendarIcon, Clock, Users, Utensils, CheckCircle2 } from "lucide-react";

export default function ReservationPage() {
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

        <div className="max-w-6xl mx-auto px-4 sm:px-10 lg:px-14 py-8 sm:py-20 lg:py-28">
          <div className="flex flex-col items-center text-center mb-8 sm:mb-14 lg:mb-18">
            <div className="flex items-center gap-2 sm:gap-4 text-[#C5A059] mb-2 sm:mb-3">
              <span className="w-8 sm:w-20 h-[1.5px] bg-[#C5A059]/70" />
              <span className="text-[10px] sm:text-xs lg:text-sm uppercase tracking-[0.25em] sm:tracking-[0.32em] text-[#9A7432] font-semibold">
                {reservationData?.badge || "RESERVATION DESK"}
              </span>
              <span className="w-8 sm:w-20 h-[1.5px] bg-[#C5A059]/70" />
            </div>

            <h1 className="font-serif text-2xl sm:text-4xl lg:text-6xl text-[#181818] font-normal tracking-wide">
              {reservationData?.title || "RESERVE YOUR"}{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#B88E3E] to-[#8C6426] bg-clip-text text-transparent font-medium">
                {reservationData?.titleHighlight || "TABLE"}
              </span>
            </h1>

            <p className="text-neutral-600 font-sans text-xs sm:text-sm lg:text-base max-w-xl mx-auto mt-2 sm:mt-4 leading-relaxed font-normal px-2">
              {reservationData?.description || "Select your preferred date, timings, and dining lounge to experience culinary excellence crafted just for you."}
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-white/90 backdrop-blur-md max-w-2xl mx-auto rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#C5A059]/40 shadow-[0_20px_50px_rgba(197,160,89,0.25)] text-center animate-fadeIn">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#C5A059]/15 flex items-center justify-center mx-auto mb-4 sm:mb-6 text-[#A68032]">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-900 mb-2 sm:mb-3">
                Reservation Confirmed
              </h2>
              <p className="text-neutral-600 text-xs sm:text-sm lg:text-base mb-6 leading-relaxed">
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
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#DEB887] text-black font-semibold text-[11px] sm:text-xs tracking-[0.2em] uppercase hover:brightness-105 transition-all shadow-md w-full sm:w-auto"
              >
                Make Another Booking
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white/85 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-14 border border-[#C5A059]/40 shadow-[0_20px_50px_rgba(197,160,89,0.2)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-14">
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <label className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#9A7432] font-semibold mb-2.5 sm:mb-3">
                      <CalendarIcon className="w-4 h-4 text-[#C5A059] shrink-0" />
                      Select Date
                    </label>
                    <input
                      type="date"
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#C5A059]/40 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-sm sm:text-base text-neutral-800 font-sans focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] shadow-inner transition-all cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#9A7432] font-semibold mb-2.5 sm:mb-3">
                      <Users className="w-4 h-4 text-[#C5A059] shrink-0" />
                      Number of Guests
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-2.5">
                      {guestOptions.map((num: string) => (
                        <button
                          type="button"
                          key={num}
                          onClick={() => setGuests(num)}
                          className={`py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
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

                  <div>
                    <label className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#9A7432] font-semibold mb-2.5 sm:mb-3">
                      <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                      Lunch Slots
                    </label>
                    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-2.5">
                      {timeSlots.lunch.map((time: string) => (
                        <button
                          type="button"
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 sm:py-2.5 px-1.5 sm:px-2 rounded-xl text-[11px] sm:text-sm font-medium transition-all border ${
                            selectedTime === time
                              ? "bg-[#181818] text-[#DEB887] border-[#C5A059] shadow-md scale-[1.02]"
                              : "bg-[#FAF7F2] text-neutral-700 border-[#C5A059]/30 hover:border-[#C5A059]"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#9A7432] font-semibold mb-2.5 sm:mb-3">
                      <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                      Dinner Slots
                    </label>
                    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-2.5">
                      {timeSlots.dinner.map((time: string) => (
                        <button
                          type="button"
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 sm:py-2.5 px-1.5 sm:px-2 rounded-xl text-[11px] sm:text-sm font-medium transition-all border ${
                            selectedTime === time
                              ? "bg-[#181818] text-[#DEB887] border-[#C5A059] shadow-md scale-[1.02]"
                              : "bg-[#FAF7F2] text-neutral-700 border-[#C5A059]/30 hover:border-[#C5A059]"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-5 sm:space-y-6">
                  <div>
                    <label className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#9A7432] font-semibold mb-2.5 sm:mb-3">
                      <Utensils className="w-4 h-4 text-[#C5A059] shrink-0" />
                      Seating Ambience
                    </label>
                    <div className="space-y-2 sm:space-y-2.5">
                      {seatingOptions.map((opt: any) => (
                        <div
                          key={opt.id}
                          onClick={() => setSeatingArea(opt.label)}
                          className={`p-3 sm:p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                            seatingArea === opt.label
                              ? "bg-white border-[#C5A059] shadow-md ring-1 ring-[#C5A059]"
                              : "bg-[#FAF7F2] border-[#C5A059]/25 hover:border-[#C5A059]/60"
                          }`}
                        >
                          <div className="pr-2">
                            <p className="font-serif text-xs sm:text-sm font-semibold text-neutral-900">
                              {opt.label}
                            </p>
                            <p className="text-[11px] sm:text-xs text-neutral-500 font-sans mt-0.5">
                              {opt.desc}
                            </p>
                          </div>
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1 sm:mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Liam Foster"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FAF7F2] border border-[#C5A059]/40 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1 sm:mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder={siteData?.common?.phone || "+33 123 456 789"}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FAF7F2] border border-[#C5A059]/40 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1 sm:mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={siteData?.common?.email || "info@noirdining.com"}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#C5A059]/40 rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1 sm:mb-1.5">
                      Special Dietary / Anniversary Request (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="E.g., Window view, anniversary dessert with candle..."
                      value={formData.specialRequest}
                      onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#C5A059]/40 rounded-xl px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-3 sm:mt-4 bg-gradient-to-r from-[#C5A059] via-[#DEB887] to-[#C5A059] hover:brightness-110 text-black font-semibold text-[11px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase py-3.5 sm:py-4 rounded-xl shadow-lg shadow-black/15 transition-all duration-300"
                  >
                    {reservationData?.buttonText || "Confirm Table Booking"}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}