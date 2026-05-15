"use client";

import SectionHeading from "./ui/SectionHeading";

const influencers = [
  {
    name: "Arun Teja",
    handle: "@arunteja",
    quote: "“The ambience feels straight out of Dubai—pure cinematic luxury.”"
  },
  {
    name: "Greeshma Vlogs",
    handle: "@greeshmavlogs",
    quote: "“Mandi Mafia’s kabin vibe is unmatched in Vijayawada.”"
  },
  {
    name: "Bezawada Food Hunters",
    handle: "@bezawadafoodhunters",
    quote: "“A feast for both the palate and the camera.”"
  }
];

export default function WallOfFame() {
  return (
    <section id="wall" className="max-w-6xl mx-auto px-4 py-20">
      <SectionHeading
        title="Wall of Fame"
        subtitle="Influencer moments that elevated the Mandi Mafia experience."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {influencers.map((inf) => (
          <div
            key={inf.name}
            className="rounded-2xl border border-charcoal bg-charcoal/40 p-6"
          >
            <p className="text-gold text-sm">{inf.handle}</p>
            <h4 className="font-display text-xl mt-2">{inf.name}</h4>
            <p className="text-smoke/70 mt-3">{inf.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
