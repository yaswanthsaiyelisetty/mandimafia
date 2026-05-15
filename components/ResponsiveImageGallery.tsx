"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const ambientImages: GalleryImage[] = [
  { src: "/mafia/image1.png", alt: "Cinematic Ambience", category: "Ambience" },
  { src: "/mafia/image2.png", alt: "Luxury Interiors", category: "Ambience" },
  { src: "/mafia/image3.png", alt: "Private Cabin", category: "Ambience" },
  { src: "/mafia/image4.png", alt: "Dubai Seth Welcome", category: "Ambience" },
  { src: "/mafia/image5.png", alt: "Elegant Lighting", category: "Ambience" },
  { src: "/mafia/image6.png", alt: "Arabian Decor", category: "Ambience" },
  { src: "/mafia/image7.png", alt: "Dining Hall", category: "Ambience" },
  { src: "/mafia/image8.png", alt: "VIP Section", category: "Ambience" },
  { src: "/mafia/image9.png", alt: "Bar Area", category: "Ambience" },
  { src: "/mafia/image10.png", alt: "Lounge", category: "Ambience" },
  { src: "/mafia/image11.png", alt: "Fine Dining", category: "Ambience" }
];

const foodImages: GalleryImage[] = [
  { src: "/mafia/pic1.png", alt: "Mandi Mafia Special", category: "Cuisine" },
  { src: "/mafia/pic2.png", alt: "Sultan Darbar", category: "Cuisine" },
  { src: "/mafia/pic3.png", alt: "Juicy Crab Mandi", category: "Cuisine" },
  { src: "/mafia/pic4.png", alt: "Alfaham Chicken", category: "Cuisine" },
  { src: "/mafia/pic5.png", alt: "Bhimavaram Royyala Mandi", category: "Cuisine" },
  { src: "/mafia/pic6.png", alt: "Pepper Mutton Mandi", category: "Cuisine" },
  { src: "/mafia/pic7.png", alt: "Arabian Fish Mandi", category: "Cuisine" },
  { src: "/mafia/pic8.png", alt: "Chicken Chinese Sizzler", category: "Cuisine" },
  { src: "/mafia/pic9.png", alt: "Mutton Seekh Kebab", category: "Cuisine" },
  { src: "/mafia/pic10.png", alt: "Peri Peri Grilled Fish", category: "Cuisine" },
  { src: "/mafia/pic11.png", alt: "Minced Chicken Pide", category: "Cuisine" },
  { src: "/mafia/pic12.png", alt: "Kaddu Ka Kheer", category: "Cuisine" },
  { src: "/mafia/pic13.png", alt: "Signature Beverage", category: "Cuisine" }
];

export default function ResponsiveImageGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeTab, setActiveTab] = useState<"ambience" | "cuisine">("ambience");

  const images = activeTab === "ambience" ? ambientImages : foodImages;

  return (
    <section id="gallery" className="relative max-w-7xl mx-auto px-4 py-16 sm:py-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.15 }}
        className="text-center mb-12"
      >
        <p className="text-gold uppercase tracking-[0.35em] text-xs sm:text-sm">
          Visual Experience
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-4 text-gold">
          Gallery of Excellence
        </h2>
        <p className="text-smoke/70 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Discover the cinematic ambience and culinary artistry that defines Mandi Mafia
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex gap-4 justify-center mb-10 sm:mb-12">
        {(["ambience", "cuisine"] as const).map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold uppercase tracking-[0.15em] text-xs sm:text-sm transition-all ${
              activeTab === tab
                ? "bg-gold text-noir shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                : "border border-gold/40 text-gold bg-transparent hover:bg-gold/10"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab === "ambience" ? "Ambience" : "Culinary Art"}
          </motion.button>
        ))}
      </div>

      {/* Responsive Grid Gallery */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4"
        >
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05
              }}
              className="group relative aspect-square overflow-hidden rounded-md sm:rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image */}
              <motion.img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Overlay - Mobile Optimized */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Text Label */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-2 sm:p-4"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gold font-semibold text-xs sm:text-sm truncate">
                  {image.alt}
                </p>
              </motion.div>

              {/* Glow Border on Hover */}
              <motion.div
                className="absolute inset-0 rounded-md sm:rounded-lg border border-gold/0"
                whileHover={{ borderColor: "rgba(212,175,55,0.6)" }}
                transition={{ duration: 0.3 }}
              />

              {/* Plus Icon - Mobile Optimized */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  className="h-8 w-8 sm:h-10 sm:w-10 text-gold drop-shadow-lg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-auto"
            >
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-2xl object-cover shadow-2xl"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Close Button */}
              <motion.button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 sm:-top-12 sm:right-0 text-gold hover:text-gold/80 transition"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="h-8 w-8 sm:h-10 sm:w-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              {/* Image Title */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-gold text-center mt-4 font-semibold text-sm sm:text-base"
              >
                {selectedImage.alt}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
