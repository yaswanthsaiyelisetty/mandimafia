"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { MenuCategory, MenuItem, menuData } from "../data/MenuData";
import InfiniteSlider from "../components/InfiniteSlider";
import Spotlight from "../components/Spotlight";
import ResponsiveImageGallery from "../components/ResponsiveImageGallery";

const whatsappLink =
  "https://wa.me/917997885707?text=" +
  encodeURIComponent("Hello Mandi Mafia, I would like to reserve a private cabin.");

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0 }
};

const slideInRight = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0 }
};

const motionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.15 },
  variants: fadeIn,
  transition: { duration: 0.7, ease: "easeOut" }
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Page() {
  return (
    <div className="min-h-screen bg-noir text-smoke font-body">
      <motion.header 
        className="fixed top-0 inset-x-0 z-40 bg-white/5 backdrop-blur-xl border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between gap-4 sm:gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <p className="font-display text-lg sm:text-xl text-gold">Mandi Mafia</p>
            <p className="text-[10px] sm:text-xs text-smoke/70">Cinematic Digital Invitation</p>
          </motion.div>
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm text-smoke/70">
            {["Home", "Ambience", "Gallery", "Menu", "Contact"].map((item) => (
              <motion.a 
                key={item}
                className="hover:text-gold transition relative group"
                href={`#${item.toLowerCase()}`}
                whileHover={{ color: "#D4AF37" }}
              >
                {item}
                <motion.span 
                  className="absolute bottom-0 left-0 h-0.5 bg-gold"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>
          <motion.a
            href={whatsappLink}
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-gold text-noir px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:bg-gold/90 transition"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Reserve
          </motion.a>
        </div>
      </motion.header>

      <section id="home" className="relative min-h-[90vh] flex items-center pt-16 sm:pt-24">
        <motion.img
          src="/mafia/image1.png"
          alt="Mandi Mafia cinematic ambience"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div 
          className="absolute inset-0 bg-black/30"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 0.8 }}
        />
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
                href="#gallery"
                className="inline-flex items-center justify-center rounded-full border border-gold/60 text-gold px-6 py-3 text-sm font-semibold hover:bg-gold/10 transition"
              >
                Explore the Gallery
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

      <ResponsiveImageGallery />

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
          <motion.div 
            className="relative space-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {menuData.map((category) => (
              <motion.div
                key={category.id}
                className="pb-10 border-b border-gold/10 last:border-b-0 last:pb-0"
                variants={itemVariants}
              >
                <CategoryBlock category={category} />
              </motion.div>
            ))}
          </motion.div>
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.08, delayChildren: 0.1 }
        }
      }}
    >
      <motion.div 
        className="flex flex-wrap items-baseline justify-between gap-3"
        variants={slideInLeft}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-display text-2xl text-gold">{category.title}</h3>
        {category.description && (
          <p className="text-smoke/60 text-sm">{category.description}</p>
        )}
      </motion.div>

      {category.sections ? (
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {category.sections.map((section) => (
            <motion.div 
              key={section.title}
              variants={itemVariants}
            >
              <motion.p 
                className="text-gold uppercase tracking-[0.2em] text-xs mb-3"
                variants={slideInRight}
                transition={{ duration: 0.5 }}
              >
                {section.title}
              </motion.p>
              <motion.div 
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {section.items.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <MenuItemRow item={item} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      ) : null}

      {category.items ? (
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {splitIntoColumns(category.items).map((column, index) => (
            <motion.div 
              key={`${category.id}-col-${index}`} 
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {column.map((item) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <MenuItemRow item={item} />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      ) : null}
    </motion.div>
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
    <motion.div 
      className="group flex items-start justify-between gap-4 text-sm border-b border-white/5 pb-2 cursor-pointer"
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-2">
        <motion.span 
          className="group-hover:text-gold transition"
          whileHover={{ x: 2 }}
        >
          {item.name}
        </motion.span>
        {item.featured && (
          <motion.span 
            className="text-[10px] uppercase tracking-[0.2em] text-gold"
            animate={{ opacity: [0.7, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            Highlight
          </motion.span>
        )}
      </div>
      <motion.span 
        className="text-smoke/70 whitespace-nowrap transition group-hover:text-gold group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.85)]"
        whileHover={{ 
          textShadow: "0 0 15px rgba(212,175,55,1)",
          scale: 1.05
        }}
      >
        {price}
      </motion.span>
    </motion.div>
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
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[75vh] overflow-hidden group">
      <motion.img
        src={src}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ scale }}
      />
      <motion.div 
        className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors duration-500" 
      />
      <motion.div className="relative h-full flex items-end">
        <motion.div 
          className="max-w-6xl mx-auto px-4 pb-12"
          style={{ y: textY }}
        >
          <motion.p 
            className="text-gold uppercase tracking-[0.3em] text-xs"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.p>
          <motion.p 
            className="text-smoke/80 mt-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}

function FloatingCabinCTA() {
  return (
    <motion.a
      href={whatsappLink}
      className="fixed bottom-6 right-4 sm:right-6 z-50 flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-xl border border-gold/40 px-4 py-3 text-sm text-gold shadow-[0_0_24px_rgba(212,175,55,0.25)] hover:bg-gold/10 transition cursor-pointer"
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      whileHover={{ 
        scale: 1.08,
        boxShadow: "0 0 32px rgba(212,175,55,0.4)",
        backgroundColor: "rgba(212,175,55,0.15)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.svg 
        viewBox="0 0 24 24" 
        className="h-5 w-5" 
        fill="none" 
        stroke="currentColor"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <circle cx="8" cy="12" r="4" />
        <path d="M12 12h9l-2 2m2-2l-2-2m-5 2v6" />
      </motion.svg>
      Reserve Your Cabin
    </motion.a>
  );
}
