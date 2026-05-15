"use client";

import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

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

  return (
    <div
      ref={containerRef}
      className="relative rounded-3xl border border-gold/20 bg-charcoal/40 overflow-hidden"
      onMouseMove={(event) => updatePointer(event.clientX, event.clientY)}
      onMouseLeave={() => setPointer({ x: 50, y: 50 })}
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
          {spotlightItems.map((item) => (
            <div key={item.src} className="flex-[0_0_100%] relative">
              <img
                src={item.src}
                alt={item.name}
                className="h-[320px] sm:h-[420px] md:h-[520px] w-full object-cover kenburns"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute px-4 py-2 rounded-full bg-black/60 text-gold font-display text-lg sm:text-2xl shadow-[0_0_24px_rgba(212,175,55,0.4)]"
        style={{
          left: `${pointer.x}%`,
          top: `${pointer.y}%`,
          transform: "translate(-50%, -50%)"
        }}
      >
        {spotlightItems[activeIndex]?.name}
      </div>

      <div className="absolute bottom-4 right-4 flex gap-2">
        {spotlightItems.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === activeIndex ? "bg-gold" : "bg-white/30"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to item ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
