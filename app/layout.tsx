import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mandi Mafia Vijayawada | Arabian Noir Luxury Dining",
  description:
    "Premium Arabian dining with private cabins, cinematic ambience, and direct ordering in Vijayawada."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-noir text-smoke font-body antialiased">{children}</body>
    </html>
  );
}
