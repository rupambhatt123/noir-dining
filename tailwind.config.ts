import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          bg: "#0B0B0B",
          dark: "#121212",
          gold: "#C5A059",
          cream: "#FAF7F2",
        },
      },
    },
  },
  plugins: [],
};

export default config;