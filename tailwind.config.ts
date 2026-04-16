import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0a0a0f",
          800: "#12121a",
          700: "#1a1a26",
          600: "#242435",
          500: "#33334d",
          400: "#555575",
          300: "#9999b0",
          200: "#cccce0",
          100: "#f0f0ff",
        },
        gold: {
          50:  "#fdf7e3",
          100: "#f9ebb0",
          200: "#f3d978",
          300: "#edc441",
          400: "#e6ac1f",
          500: "#c9900f",
          600: "#9f6e08",
          700: "#754e04",
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(237, 196, 65, 0.3), 0 8px 24px -8px rgba(237, 196, 65, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
