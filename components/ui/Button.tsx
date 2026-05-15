"use client";

import React from "react";
import { useHaptic } from "../useHaptic";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
};

export default function Button({
  variant = "primary",
  className = "",
  onClick,
  ...props
}: ButtonProps) {
  const haptic = useHaptic();
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70";
  const variants = {
    primary: "bg-gold text-noir hover:bg-gold/90 shadow-[0_0_20px_rgba(212,175,55,0.35)]",
    outline: "border border-gold/60 text-gold hover:bg-gold/10",
    ghost: "text-smoke hover:text-gold hover:bg-white/5"
  };

  return (
    <button
      {...props}
      onClick={(e) => {
        haptic();
        onClick?.(e);
      }}
      className={`${base} ${variants[variant]} ${className}`}
    />
  );
}
