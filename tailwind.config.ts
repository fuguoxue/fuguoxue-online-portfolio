import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        tag: "rgb(var(--tag) / <alpha-value>)",
        selected: "rgb(var(--selected) / <alpha-value>)",
        caption: "rgb(var(--caption) / <alpha-value>)",
        date: "rgb(var(--date) / <alpha-value>)",
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
