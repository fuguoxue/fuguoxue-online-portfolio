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
        background: "#fff",
        primary: "#333333",
        secondary: "#3A3D98",
        tag: "#008080",
        selected:"#FF6F61",
        caption:"#5A6B95"
      },
    },
  },
  plugins: [],
};
export default config;
