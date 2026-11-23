import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          light: "#FAF8F5",
          dark: "#141312",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#1E1C1A",
          mutedLight: "#F2EFEA",
          mutedDark: "#262421",
        },
        ink: {
          light: "#23211F",
          dark: "#F5F3EF",
          mutedLight: "#6B6560",
          mutedDark: "#A8A29A",
        },
        accent: {
          light: "#D99B00",
          DEFAULT: "#EAB308",
          dark: "#F5BE18",
          subtle: "rgba(234, 179, 8, 0.12)",
        },
        borderLight: "#E8E4DD",
        borderDark: "#2F2C28",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        arabic: ["var(--font-cairo)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
