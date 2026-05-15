"use client";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-charcoal bg-noir/90">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <p className="font-display text-xl text-gold">Mandi Mafia</p>
          <p className="text-smoke/70 mt-2">
            Arabian Noir luxury dining for Vijayawada’s elite.
          </p>
        </div>
        <div>
          <p className="text-sm text-smoke/60 uppercase tracking-[0.2em]">Visit</p>
          <p className="mt-2 text-smoke/80">
            Suryaprakash Square, Kaviraju Tripuraneni Ramaswamy Rd, Guru Nanak Colony,
            Vijayawada, AP 520008.
          </p>
        </div>
        <div>
          <p className="text-sm text-smoke/60 uppercase tracking-[0.2em]">Contact</p>
          <p className="mt-2">+91 7997885707</p>
          <p className="text-smoke/70 mt-1">Daily 12:00 PM – 10:30 PM</p>
          <p className="text-xs text-smoke/60">Kitchen active until 11:00 PM</p>
        </div>
      </div>
    </footer>
  );
}
