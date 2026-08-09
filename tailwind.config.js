/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter Variable",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      colors: {
        ink: {
          950: "#08090c",
          900: "#0b0d12",
          850: "#0e1016",
          800: "#12141c",
          700: "#1a1d27",
          600: "#242732",
          500: "#33374424",
        },
        mist: {
          400: "#9aa0ae",
          300: "#b4b9c6",
          200: "#d3d6de",
        },
        electric: {
          DEFAULT: "#3b82f6",
          400: "#5b9dfd",
          500: "#3b82f6",
          600: "#2563eb",
        },
        violet: {
          DEFAULT: "#a855f7",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
        },
        magenta: {
          DEFAULT: "#d946ef",
          500: "#d946ef",
        },
      },
      backgroundImage: {
        "grad-brand": "linear-gradient(115deg, #3b82f6 0%, #a855f7 55%, #e341d8 100%)",
        "grad-brand-soft": "linear-gradient(115deg, rgba(59,130,246,0.5) 0%, rgba(168,85,247,0.5) 55%, rgba(227,65,216,0.5) 100%)",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(120, 100, 255, 0.35)",
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
