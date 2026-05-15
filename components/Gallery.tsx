"use client";

import SectionHeading from "./ui/SectionHeading";

export default function Gallery() {
  const images = Array.from({ length: 11 }, (_, i) => `/mafia/image${i + 1}.png`);

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <SectionHeading
        title="Arabian Noir Ambience"
        subtitle="Private cabins, cinematic lighting, and luxury finishes."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((src) => (
          <img
            key={src}
            src={src}
            alt="Mandi Mafia ambience"
            className="rounded-2xl h-56 w-full object-cover"
          />
        ))}
      </div>
    </section>
  );
}
