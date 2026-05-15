"use client";

import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";

const spotlightItems = [
  { src: "/mafia/pic1.png", name: "Mandi Mafia Special" },
  { src: "/mafia/pic2.png", name: "Sultan Darbar" },
  { src: "/mafia/pic3.png", name: "Juicy Crab Mandi" },
  { src: "/mafia/pic4.png", name: "Alfaham Chicken" },
  { src: "/mafia/pic5.png", name: "Bhimavaram Royyala Mandi" },
  { src: "/mafia/pic6.png", name: "Pepper Mutton Mandi" },
  { src: "/mafia/pic7.png", name: "Arabian Fish Mandi" },
  { src: "/mafia/pic8.png", name: "Chicken Chinese Sizzler" },
  { src: "/mafia/pic9.png", name: "Mutton Seekh Kebab" },
  { src: "/mafia/pic10.png", name: "Peri Peri Grilled Fish" },
  { src: "/mafia/pic11.png", name: "Minced Chicken Pide" },
  { src: "/mafia/pic12.png", name: "Kaddu Ka Kheer" },
  { src: "/mafia/pic13.png", name: "Blueberry Rush" }
];

export default function Spotlight() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const updatePointer = (clientX: number, clientY: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    setPointer({ x, y });
  };

  const handlePrevious = () => emblaApi?.scrollPrev();
  const handleNext = () => emblaApi?.scrollNext();

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl sm:rounded-3xl border border-gold/20 bg-charcoal/40 overflow-hidden group"
      onMouseMove={(event) => {
        updatePointer(event.clientX, event.clientY);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setPointer({ x: 50, y: 50 });
        setIsHovered(false);
      }}
      onTouchMove={(event) => {
        const touch = event.touches[0];
        if (touch) updatePointer(touch.clientX, touch.clientY);
      }}
      onTouchStart={(event) => {
        const touch = event.touches[0];
        if (touch) updatePointer(touch.clientX, touch.clientY);
      }}
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {spotlightItems.map((item, index) => (
            <motion.div 
              key={item.src} 
              className="flex-[0_0_100%] relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={item.src}
                alt={item.name}
                className="h-64 sm:h-80 md:h-96 w-full object-cover kenburns"
                animate={{ 
                  filter: index === activeIndex ? "brightness(1)" : "brightness(0.8)"
                }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
              <motion.div 
                className="absolute inset-0 bg-black/30 group-hover:bg-black/20"
                animate={{
                  backgroundColor: index === activeIndex ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.4)"
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="pointer-events-none absolute px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/60 text-gold font-display text-sm sm:text-xl md:text-2xl shadow-[0_0_24px_rgba(212,175,55,0.4)] whitespace-nowrap"
          style={{
            left: `${pointer.x}%`,
            top: `${pointer.y}%`,
            transform: "translate(-50%, -50%)"
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          {spotlightItems[activeIndex]?.name}
        </motion.div>
      </AnimatePresence>

      {/* Dot Indicators - Mobile Optimized */}
      <motion.div 
        className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        {spotlightItems.map((_, index) => (
          <motion.button
            key={index}
            className={`h-1.5 sm:h-2 rounded-full transition-all cursor-pointer ${
              index === activeIndex ? "bg-gold" : "bg-white/30"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to item ${index + 1}`}
            animate={{ 
              width: index === activeIndex ? "20px" : "6px",
              opacity: index === activeIndex ? 1 : 0.6
            }}
            whileHover={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </motion.div>

      {/* Navigation Buttons - Hidden on Mobile */}
      <motion.button
        onClick={handlePrevious}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 h-8 sm:h-10 w-8 sm:w-10 rounded-full bg-gold/10 border border-gold/40 text-gold backdrop-blur-sm hover:bg-gold/20 transition flex items-center justify-center hidden sm:flex"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(212,175,55,0.3)" }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      <motion.button
        onClick={handleNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 h-8 sm:h-10 w-8 sm:w-10 rounded-full bg-gold/10 border border-gold/40 text-gold backdrop-blur-sm hover:bg-gold/20 transition flex items-center justify-center hidden sm:flex"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(212,175,55,0.3)" }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Mobile Swipe Indicator */}
      <motion.div 
        className="absolute bottom-12 sm:bottom-14 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs text-gold/60 uppercase tracking-[0.1em]"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Swipe left/right to explore
      </motion.div>
    </div>
  );
}
