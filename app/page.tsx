"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MenuCategory, MenuItem, menuData } from "../data/MenuData";
import InfiniteSlider from "../components/InfiniteSlider";
import Spotlight from "../components/Spotlight";

const whatsappLink =
  "https://wa.me/917997885707?text=" +
  encodeURIComponent("Hello Mandi Mafia, I would like to reserve a private cabin.");

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const motionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.2 },
  variants: fadeIn,
  transition: { duration: 0.6, ease: "easeOut" }
} as const;

export default function Page() {
  return (
    <div className="min-h-screen bg-noir text-smoke font-body">
      <header className="fixed top-0 inset-x-0 z-40 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-6">
          <div>
            <p className="font-display text-xl text-gold">Mandi Mafia</p>
            <p className="text-xs text-smoke/70">Cinematic Digital Invitation</p>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-smoke/70">
            <a className="hover:text-gold transition" href="#home">
              Home
            </a>
            <a className="hover:text-gold transition" href="#ambience">
              Ambience
            </a>
            <a className="hover:text-gold transition" href="#menu">
              Menu
            </a>
            <a className="hover:text-gold transition" href="#contact">
              Contact
            </a>
          </nav>
          <a
            href={whatsappLink}
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-gold text-noir px-5 py-2 text-sm font-semibold shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:bg-gold/90 transition"
          >
            Reserve Your Cabin
          </a>
        </div>
      </header>

      <section id="home" className="relative min-h-[90vh] flex items-center pt-24">
        <img
          src="/mafia/image1.png"
          alt="Mandi Mafia cinematic ambience"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-6xl mx-auto px-4 py-20">
          <motion.div {...motionProps} className="max-w-2xl">
            <p className="text-gold uppercase tracking-[0.35em] text-xs">
              Arabian Noir Luxury
            </p>
            <h1 className="font-display text-4xl sm:text-6xl mt-4">
              Dubai Seth welcomes you to Mandi Mafia
            </h1>
            <p className="text-smoke/80 mt-6 text-base">
              A cinematic dining universe with private cabins, curated lighting, and
              royal Arabian feasts crafted for Vijayawada’s finest evenings.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappLink}
                className="inline-flex items-center justify-center rounded-full bg-gold text-noir px-6 py-3 text-sm font-semibold shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:bg-gold/90 transition"
              >
                Reserve Your Cabin
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-full border border-gold/60 text-gold px-6 py-3 text-sm font-semibold hover:bg-gold/10 transition"
              >
                Explore the Menu
              </a>
            </div>
            <p className="mt-8 text-xs text-smoke/70">
              Suryaprakash Square, Guru Nanak Colony, Vijayawada • Daily 12:00 PM –
              10:30 PM
            </p>
          </motion.div>
        </div>
      </section>

      <FullBleedBreak
        src="/mafia/image3.png"
        title="Enter the Private Cabins"
        subtitle="Step inside the Arabian Noir experience."
      />

      <motion.section id="ambience" {...motionProps} className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col gap-4">
          <p className="text-gold uppercase tracking-[0.3em] text-xs">Moving Noir</p>
          <h2 className="font-display text-3xl sm:text-4xl text-gold">
            Infinite Ambience Slider
          </h2>
          <p className="text-smoke/70 max-w-2xl">
            A parallax-driven, auto-scrolling journey through Mandi Mafia’s cinematic
            interiors.
          </p>
        </div>
        <div className="mt-8">
          <InfiniteSlider />
        </div>
      </motion.section>

      <FullBleedBreak
        src="/mafia/image4.png"
        title="Dubai Seth’s Noir Hall"
        subtitle="A regal passage into Arabian luxury."
      />

      <motion.section {...motionProps} className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col gap-4">
          <p className="text-gold uppercase tracking-[0.3em] text-xs">Chef’s Spotlight</p>
          <h2 className="font-display text-3xl sm:text-4xl text-gold">
            A Cinematic Food Showcase
          </h2>
          <p className="text-smoke/70 max-w-2xl">
            Swipe through signature dishes with a Ken Burns effect for hyper-real
            texture.
          </p>
        </div>
        <div className="mt-8">
          <Spotlight />
        </div>
      </motion.section>

      <motion.section id="menu" {...motionProps} className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col gap-4 mb-10">
          <p className="text-gold uppercase tracking-[0.3em] text-xs">Royal Ledger</p>
          <h2 className="font-display text-3xl sm:text-4xl text-gold">
            The Invitation Menu
          </h2>
          <p className="text-smoke/70 max-w-2xl">
            A minimalist two-column ledger, refined for an elite dining invitation.
          </p>
        </div>

        <div className="relative rounded-3xl border border-gold/20 bg-charcoal/40 p-6 md:p-10 overflow-hidden">
          <div className="absolute inset-0 smoke-bg opacity-40" />
          <div className="relative space-y-10">
            {menuData.map((category) => (
              <div
                key={category.id}
                className="pb-10 border-b border-gold/10 last:border-b-0 last:pb-0"
              >
                <CategoryBlock category={category} />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="contact" {...motionProps} className="max-w-6xl mx-auto px-4 py-20">
        <div className="rounded-3xl border border-gold/20 bg-charcoal/40 p-8 md:p-12 grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-xs">Mafia Headquarters</p>
            <h2 className="font-display text-3xl text-gold mt-3">Mandi Mafia Vijayawada</h2>
            <p className="text-smoke/70 mt-4">
              Suryaprakash Square, Guru Nanak Colony, Vijayawada, 520008.
            </p>
            <p className="text-smoke/70 mt-2">Phone: +91 7997885707</p>
            <p className="text-smoke/70 mt-2">Hours: 12:00 PM – 10:30 PM</p>
            <a
              href={whatsappLink}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gold text-noir px-6 py-3 text-sm font-semibold shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:bg-gold/90 transition"
            >
              Reserve Your Cabin
            </a>
          </div>
          <div className="rounded-2xl bg-black border border-gold/30 p-4 flex items-center justify-center">
            <svg
              viewBox="0 0 320 200"
              className="w-full h-full max-h-48"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="2"
            >
              <rect x="10" y="10" width="300" height="180" rx="18" />
              <path d="M40 140 L120 80 L200 120 L280 60" />
              <path d="M60 50 L140 40 L180 70 L240 40" />
              <circle cx="200" cy="120" r="6" fill="#D4AF37" />
              <text x="210" y="125" fill="#D4AF37" fontSize="12">
                MM HQ
              </text>
            </svg>
          </div>
        </div>
      </motion.section>

      <footer className="border-t border-white/10 bg-white/5 backdrop-blur-xl py-8 text-center text-xs text-smoke/60">
        +91 7997885707 • Suryaprakash Square • 12:00 PM - 10:30 PM
      </footer>

      <FloatingCabinCTA />
    </div>
  );
}

function CategoryBlock({ category }: { category: MenuCategory }) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="font-display text-2xl text-gold">{category.title}</h3>
        {category.description && (
          <p className="text-smoke/60 text-sm">{category.description}</p>
        )}
      </div>

      {category.sections ? (
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {category.sections.map((section) => (
            <div key={section.title}>
              <p className="text-gold uppercase tracking-[0.2em] text-xs mb-3">
                {section.title}
              </p>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <MenuItemRow key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {category.items ? (
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {splitIntoColumns(category.items).map((column, index) => (
            <div key={`${category.id}-col-${index}`} className="space-y-3">
              {column.map((item) => (
                <MenuItemRow key={item.name} item={item} />
              ))}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function MenuItemRow({ item }: { item: MenuItem }) {
  const price =
    item.halfPrice && item.fullPrice
      ? `Half ₹${item.halfPrice} | Full ₹${item.fullPrice}`
      : item.price
        ? `₹${item.price}`
        : "";

  return (
    <div className="group flex items-start justify-between gap-4 text-sm border-b border-white/5 pb-2">
      <div className="flex items-center gap-2">
        <span className="group-hover:text-gold transition">{item.name}</span>
        {item.featured && (
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold">
            Highlight
          </span>
        )}
      </div>
      <span className="text-smoke/70 whitespace-nowrap transition group-hover:text-gold group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.85)]">
        {price}
      </span>
    </div>
  );
}

function splitIntoColumns(items: MenuItem[], columns = 2) {
  const perColumn = Math.ceil(items.length / columns);
  return Array.from({ length: columns }, (_, index) =>
    items.slice(index * perColumn, (index + 1) * perColumn)
  );
}

function FullBleedBreak({
  src,
  title,
  subtitle
}: {
  src: string;
  title: string;
  subtitle: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[75vh] overflow-hidden">
      <motion.img
        src={src}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ scale }}
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative h-full flex items-end">
        <div className="max-w-6xl mx-auto px-4 pb-12">
          <p className="text-gold uppercase tracking-[0.3em] text-xs">{title}</p>
          <p className="text-smoke/80 mt-2">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}

function FloatingCabinCTA() {
  return (
    <a
      href={whatsappLink}
      className="fixed bottom-6 right-4 sm:right-6 z-50 flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-xl border border-gold/40 px-4 py-3 text-sm text-gold shadow-[0_0_24px_rgba(212,175,55,0.25)] hover:bg-gold/10 transition"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <circle cx="8" cy="12" r="4" />
        <path d="M12 12h9l-2 2m2-2l-2-2m-5 2v6" />
      </svg>
      Reserve Your Cabin
    </a>
  );
}
