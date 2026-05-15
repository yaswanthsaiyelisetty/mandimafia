"use client";

import Button from "./ui/Button";

export default function Header({ onCartClick }: { onCartClick: () => void }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-noir/80 border-b border-charcoal/60">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <div>
          <p className="font-display text-xl text-gold">Mandi Mafia</p>
          <p className="text-xs text-smoke/70">Arabian Noir Dining • Vijayawada</p>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-smoke/80">
          <a href="#menu" className="hover:text-gold transition">
            Menu
          </a>
          <a href="#reservation" className="hover:text-gold transition">
            Private Cabin
          </a>
          <a href="#wall" className="hover:text-gold transition">
            Wall of Fame
          </a>
          <a href="#contact" className="hover:text-gold transition">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+917997885707" className="hidden sm:block text-sm text-smoke/70">
            +91 7997885707
          </a>
          <Button variant="outline" onClick={onCartClick}>
            Cart
          </Button>
        </div>
      </div>
    </header>
  );
}
