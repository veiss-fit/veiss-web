import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "var(--font-poppins)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#DAFF0D",
        secondary: "#070709",
        tertiary: "#333333",
        lightGray: "#E0E0E0",
        grayBg: "#E0E0E0",
        grayBtn: "#D9D9D9",
        grayHeader: "#212121",
        grayFooter: "#121212",
        footerBorder: "#636971",
        bannerTitle: "#03080C",
        lightBg: "#FAFAFA",
        grayTitle: "#0A0A0C"
      },
    },
  },
  plugins: [],
};
export default config;
