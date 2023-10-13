import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text: "#494137",
      background: "#f8dcc4",
      primary: "#cda584",
      secondary: "#e8e2de",
      accent: "#957b65",
    },
    extend: {
      fontFamily: {
        default: ["var(--font-bungee)"],
        inline: ["var(--font-bungee-inline)"],
        outline: ["var(--font-bungee-outline)"],
        shade: ["var(--font-bungee-shade)"],
      },
    },
  },
  plugins: [require("tailwindcss-patterns")],
};
export default config;
