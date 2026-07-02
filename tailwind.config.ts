import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#7B7B7B",
        tertiary: "#F8F8F8",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)"],
      },
      fontSize: {
        hero: ["clamp(3.5rem, 9vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
      },
    },
  },
  plugins: [],
};
export default config;
