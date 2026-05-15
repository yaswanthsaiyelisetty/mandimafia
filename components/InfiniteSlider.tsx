"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function InfiniteSlider() {
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const images = Array.from({ length: 10 }, (_, i) => `/mafia/image${i + 2}.png`);
  const track = [...images, ...images];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <motion.div
      ref={ref}
      className="relative w-full overflow-hidden py-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      style={{ opacity }}
    >
      <div className="no-scrollbar overflow-x-auto">
        <div
          className="flex gap-2 sm:gap-3 md:gap-4 w-max animate-marquee px-4"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {track.map((src, index) => (
            <motion.div
              key={`${src}-${index}`}
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative rounded-lg sm:rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                whileHover={{ y: -4 }}
              >
                <motion.img
                  src={src}
                  alt="Ambience"
                  className="h-32 sm:h-48 md:h-64 w-[120px] sm:w-[200px] md:w-[280px] object-cover"
                  style={{ y: parallaxY }}
                  loading="lazy"
                />
                
                {/* Enhanced Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Glow Border */}
                <motion.div
                  className="absolute inset-0 rounded-xl sm:rounded-2xl border border-gold/0"
                  whileHover={{ borderColor: "rgba(212,175,55,0.5)" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs text-gold uppercase tracking-[0.2em] whitespace-nowrap"
        animate={{ y: paused ? 0 : [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {paused ? "✓ Release to Continue" : "← Swipe to Explore →"}
      </motion.div>
    </motion.div>
  );
}
