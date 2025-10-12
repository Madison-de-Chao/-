import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'glass-purple': '#3A2E91',
        'deep-blue': '#0C2E3E',
        'soft-gold': '#D4AF37',
      },
    },
  },
  plugins: [],
};
export default config;
