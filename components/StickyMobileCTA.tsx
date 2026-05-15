"use client";

import Button from "./ui/Button";

export default function StickyMobileCTA({ onOrder }: { onOrder: () => void }) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden">
      <div className="bg-noir/90 border-t border-charcoal px-4 py-3 flex gap-3">
        <Button className="flex-1" onClick={onOrder}>
          Order Now
        </Button>
        <Button
          variant="outline"
          className="flex-1"
          onClick={() =>
            document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Book Cabin
        </Button>
      </div>
    </div>
  );
}
