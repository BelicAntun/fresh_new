import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        raleway: ["var(--font-raleway)"],
      },
      colors: {
        primary: "#2c549d",
        secondary: "#459cb2",
      },
    },
  },
  plugins: [],
};
export default config;
