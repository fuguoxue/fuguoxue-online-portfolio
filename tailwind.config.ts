import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        primary: "rgb(var(--primary))",
        secondary: "rgb(var(--secondary))",
        tag: "rgb(var(--tag))",
        selected: "rgb(var(--selected))",
        caption: "rgb(var(--caption))",
        date: "rgb(var(--date))",
        transparent: "transparent",
        current: "currentColor",
      },
      listStyleType: {
        circle: 'circle',
      },
    },
  },
  plugins: [],
};
export default config;
