import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        cosmic: {
          dark: "#1A1F2C",
          darker: "#151922",
          light: "#E5DEFF",
          accent: "#FF719A",
          purple: "#9b87f5",
          muted: "rgba(229, 222, 255, 0.7)",
        },
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        bitter: ["Bitter", "serif"],
      },
      textShadow: {
        glow: "0 0 10px #FF719A, 0 0 20px #FF719A",
      },
      keyframes: {
        "twinkle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow": {
          "0%, 100%": { textShadow: "0 0 10px #FF719A" },
          "50%": { textShadow: "0 0 20px #FF719A, 0 0 30px #FF719A" },
        },
        "portal": {
          "0%": { transform: "scale(1)", opacity: "0" },
          "50%": { transform: "scale(1.2)", opacity: "0.5" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "twinkle": "twinkle 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "portal": "portal 2s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in": "slide-in 0.6s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('tailwindcss-textshadow'),
  ],
} satisfies Config;