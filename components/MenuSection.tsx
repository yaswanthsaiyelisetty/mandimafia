"use client";

import { useMemo, useState } from "react";
import Button from "./ui/Button";
import SectionHeading from "./ui/SectionHeading";
import { useCart } from "./CartProvider";

type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price?: number;
  variants?: { label: string; price: number }[];
  tags?: string[];
  isChefSpecial?: boolean;
  image?: string;
};

type MenuCategory = {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
};

type MenuData = {
  categories: MenuCategory[];
};

export default function MenuSection({
  menu,
  onCheckout
}: {
  menu: MenuData;
  onCheckout: () => void;
}) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    const categories =
      activeCategory === "all"
        ? menu.categories
        : menu.categories.filter((c) => c.id === activeCategory);

    if (!normalizedQuery) return categories;

    return categories
      .map((c) => ({
        ...c,
        items: c.items.filter((item) => {
          const haystack = [item.name, item.description, ...(item.tags ?? [])]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();
          return haystack.includes(normalizedQuery);
        })
      }))
      .filter((c) => c.items.length > 0);
  }, [activeCategory, menu.categories, normalizedQuery]);

  return (
    <section id="menu" className="max-w-6xl mx-auto px-4 py-20">
      <SectionHeading
        title="The Mandi Mafia Menu"
        subtitle="Smart search, curated categories, and chef specials with a luxe glow."
      />

      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-xs border transition ${
              activeCategory === "all"
                ? "border-gold text-gold bg-gold/10"
                : "border-charcoal text-smoke/70 hover:text-gold"
            }`}
          >
            All
          </button>
          {menu.categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 rounded-full text-xs border transition ${
                activeCategory === c.id
                  ? "border-gold text-gold bg-gold/10"
                  : "border-charcoal text-smoke/70 hover:text-gold"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
        <div className="flex gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Smart Search: mandi, sizzler, mojito..."
            className="w-full lg:w-72 rounded-full bg-charcoal/60 border border-charcoal px-4 py-2 text-sm text-smoke placeholder:text-smoke/50 focus:outline-none focus:ring-2 focus:ring-gold/60"
          />
          <Button variant="outline" onClick={onCheckout}>
            View Cart
          </Button>
        </div>
      </div>

      <div className="space-y-12">
        {filtered.map((category) => (
          <div key={category.id}>
            <h3 className="font-display text-2xl text-gold">{category.name}</h3>
            {category.description && (
              <p className="text-smoke/60 mt-2">{category.description}</p>
            )}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {category.items.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(
    item.variants ? item.variants[0] : undefined
  );

  const price = selectedVariant?.price ?? item.price ?? 0;

  return (
    <div
      className={`rounded-2xl border border-charcoal bg-charcoal/40 overflow-hidden transition hover:border-gold/50 ${
        item.isChefSpecial ? "shadow-glow" : ""
      }`}
    >
      {item.image ? (
        <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />
      ) : (
        <div className="h-40 w-full bg-gradient-to-br from-charcoal to-noir" />
      )}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="font-semibold text-lg">{item.name}</h4>
            {item.description && (
              <p className="text-sm text-smoke/70 mt-1">{item.description}</p>
            )}
          </div>
          {item.isChefSpecial && (
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold">
              Chef Special
            </span>
          )}
        </div>

        {item.variants ? (
          <div className="mt-4 flex gap-2 flex-wrap">
            {item.variants.map((variant) => (
              <button
                key={variant.label}
                onClick={() => setSelectedVariant(variant)}
                className={`px-3 py-1 rounded-full text-xs border transition ${
                  selectedVariant?.label === variant.label
                    ? "border-gold text-gold bg-gold/10"
                    : "border-charcoal text-smoke/70 hover:text-gold"
                }`}
              >
                {variant.label} • ₹{variant.price}
              </button>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-gold font-semibold">₹{price}</p>
        )}

        <div className="mt-4 flex items-center justify-between">
          {item.variants && <p className="text-gold font-semibold">₹{price}</p>}
          <Button
            onClick={() =>
              addItem({
                id: item.id,
                name: item.name,
                price,
                variantLabel: selectedVariant?.label,
                image: item.image
              })
            }
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
