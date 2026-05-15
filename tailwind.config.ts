import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        noir: "#121212",
        gold: "#D4AF37",
        charcoal: "#1F1F1F",
        smoke: "#E6E1D6",
        ember: "#2A2020"
      },
      boxShadow: {
        glow: "0 0 28px rgba(212,175,55,0.45)"
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(180deg, rgba(18,18,18,0.5) 0%, rgba(18,18,18,0.95) 70%)"
      },
      fontFamily: {
        display: ["Cinzel", "serif"],
        body: ["Poppins", "sans-serif"]
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        }
      },
      animation: {
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
