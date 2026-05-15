"use client";

import Button from "./ui/Button";
import { useCart } from "./CartProvider";

export default function CartDrawer({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { items, total, updateQty, removeItem, clear } = useCart();

  const message = [
    "Mandi Mafia Direct Order",
    ...items.map(
      (item) =>
        `• ${item.name}${item.variantLabel ? ` (${item.variantLabel})` : ""} x${item.quantity} - ₹${item.price * item.quantity}`
    ),
    `Total: ₹${total}`
  ].join("\n");

  const whatsappLink = `https://wa.me/917997885707?text=${encodeURIComponent(message)}`;

  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black/60 transition ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-noir border-l border-charcoal p-6 transition ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-display text-2xl">Your Cart</h3>
          <button onClick={onClose} className="text-smoke/70 hover:text-gold">
            Close
          </button>
        </div>

        {items.length === 0 ? (
          <div className="mt-10 text-smoke/60">
            Your cart is empty. Add items to place a direct order.
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {items.map((item) => (
              <div key={`${item.id}-${item.variantLabel}`} className="flex gap-3">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-xl object-cover"
                  />
                ) : (
                  <div className="h-16 w-16 rounded-xl bg-charcoal" />
                )}
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  {item.variantLabel && (
                    <p className="text-xs text-smoke/60">{item.variantLabel}</p>
                  )}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="px-2 py-1 rounded bg-charcoal/70"
                      onClick={() =>
                        updateQty(item.id, item.variantLabel, Math.max(1, item.quantity - 1))
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-2 py-1 rounded bg-charcoal/70"
                      onClick={() => updateQty(item.id, item.variantLabel, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      className="ml-auto text-xs text-smoke/60 hover:text-gold"
                      onClick={() => removeItem(item.id, item.variantLabel)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-gold font-semibold">₹{item.price * item.quantity}</div>
              </div>
            ))}

            <div className="border-t border-charcoal pt-4">
              <div className="flex items-center justify-between">
                <span className="text-smoke/70">Total</span>
                <span className="text-gold text-lg font-semibold">₹{total}</span>
              </div>
              <p className="text-xs text-smoke/60 mt-2">
                Direct website order = no aggregator fees.
              </p>
              <div className="mt-4 flex gap-3">
                <Button onClick={() => window.open(whatsappLink, "_blank")}>
                  Send on WhatsApp
                </Button>
                <Button variant="outline" onClick={clear}>
                  Clear
                </Button>
              </div>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
