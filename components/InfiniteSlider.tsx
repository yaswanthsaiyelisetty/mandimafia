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

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="no-scrollbar overflow-x-auto">
        <div
          className="flex gap-4 w-max animate-marquee"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {track.map((src, index) => (
            <motion.img
              key={`${src}-${index}`}
              src={src}
              alt="Ambience"
              className="h-64 sm:h-72 md:h-80 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl object-cover shadow-2xl"
              style={{ y: parallaxY }}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full text-xs text-gold uppercase tracking-[0.2em]">
        Swipe to Explore
      </div>
    </div>
  );
}
