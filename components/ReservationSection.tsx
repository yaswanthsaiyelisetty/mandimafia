"use client";

import { useMemo, useState } from "react";
import Button from "./ui/Button";
import SectionHeading from "./ui/SectionHeading";

export default function ReservationSection() {
  const [groupSize, setGroupSize] = useState(2);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [request, setRequest] = useState("");

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const timeSlots = useMemo(() => {
    const slots: string[] = [];
    for (let minutes = 12 * 60; minutes <= 22 * 60 + 30; minutes += 30) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      const period = hours >= 12 ? "PM" : "AM";
      const displayHour = hours > 12 ? hours - 12 : hours;
      slots.push(`${displayHour}:${mins === 0 ? "00" : mins} ${period}`);
    }
    return slots;
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      "Private Cabin Booking Request - Mandi Mafia",
      `Group Size: ${groupSize}`,
      `Date: ${date || "Not selected"}`,
      `Time: ${time || "Not selected"}`,
      `Special Request: ${request || "None"}`
    ].join("\n");

    const link = `https://wa.me/917997885707?text=${encodeURIComponent(message)}`;
    window.open(link, "_blank");
  };

  return (
    <section id="reservation" className="max-w-6xl mx-auto px-4 py-20">
      <SectionHeading
        title="Private Cabin Reservation"
        subtitle="Select your group size, date, and time slot. Add special decor requests for birthdays and anniversaries."
      />

      <form
        onSubmit={handleSubmit}
        className="grid lg:grid-cols-[1.2fr_1fr] gap-8"
      >
        <div className="space-y-4">
          <label className="block text-sm">
            Group Size
            <input
              type="number"
              min={2}
              max={30}
              value={groupSize}
              onChange={(e) => setGroupSize(Number(e.target.value))}
              className="mt-2 w-full rounded-xl bg-charcoal/60 border border-charcoal px-4 py-3"
            />
          </label>

          <label className="block text-sm">
            Date
            <input
              type="date"
              min={today}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-2 w-full rounded-xl bg-charcoal/60 border border-charcoal px-4 py-3"
            />
          </label>

          <label className="block text-sm">
            Time Slot (12:00 PM – 10:30 PM)
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="mt-2 w-full rounded-xl bg-charcoal/60 border border-charcoal px-4 py-3"
            >
              <option value="">Select a slot</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm">
            Special Request
            <textarea
              value={request}
              onChange={(e) => setRequest(e.target.value)}
              placeholder="Birthday decor, anniversary setup, custom cake..."
              className="mt-2 w-full rounded-xl bg-charcoal/60 border border-charcoal px-4 py-3 h-28"
            />
          </label>

          <Button type="submit">Confirm on WhatsApp</Button>
        </div>

        <div className="rounded-3xl border border-charcoal bg-charcoal/40 p-8">
          <p className="text-gold uppercase tracking-[0.3em] text-xs">Cabin Concierge</p>
          <h3 className="font-display text-2xl mt-4">
            Luxury Cabins with Immersive Ambience
          </h3>
          <p className="text-smoke/70 mt-4">
            Enjoy private dining with cinematic lighting, curated playlists, and
            on-demand service—perfect for celebrations or business gatherings.
          </p>
          <div className="mt-6 text-sm text-smoke/70">
            Daily 12:00 PM – 10:30 PM (Kitchen active until 11:00 PM)
          </div>
        </div>
      </form>
    </section>
  );
}
