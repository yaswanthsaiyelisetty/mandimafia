"use client";

import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center" id="hero">
      <img
        src="/mafia/image11.png"
        alt="Dubai Seth welcomes you"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative max-w-6xl mx-auto px-4 py-24 grid gap-10">
        <div className="max-w-2xl">
          <p className="text-gold uppercase tracking-[0.35em] text-xs">
            Arabian Noir Luxury
          </p>
          <h1 className="font-display text-4xl sm:text-6xl mt-4">
            Dubai Seth welcomes you to Mandi Mafia
          </h1>
          <p className="text-smoke/80 mt-5">
            Vijayawada’s elite Arabian dining experience—cinematic ambience,
            private cabins, and direct-to-consumer ordering without aggregator fees.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              onClick={() =>
                document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Order Now
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book Cabin
            </Button>
          </div>
          <div className="mt-8 text-xs text-smoke/60">
            Suryaprakash Square, Guru Nanak Colony, Vijayawada 520008 • Daily 12:00 PM
            – 10:30 PM
          </div>
        </div>
      </div>
    </section>
  );
}
