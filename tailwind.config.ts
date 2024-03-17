import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Founders-Grotesk-Bold": ["Founders-Grotesk-Bold", "sans-serif"],
        "Founders-Grotesk-Regular": ["Founders-Grotesk-Regular", "sans-serif"],
        "Founders-Grotesk-Light": ["Founders-Grotesk-Light", "sans-serif"],
        "Founders-Grotesk-Medium": ["Founders-Grotesk-Medium", "sans-serif"],
      },
      colors: {
        "brand-orange": "#FF4E00",
        "brand-dark": "#1C153B",
        "brand-light": "#F7F7F7",
      }
    },
  },
  plugins: [],
};
export default config;
