/** @type {import('tailwindcss').Config} */

import animate from "tailwindcss-animate"


export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F2937", // dark gray/near-black
        accent: "#2563EB", // blue accent
        background: "#FFFFFF",
        muted: "#6B7280", // neutral text-muted
      },
      fontSize: {
        "hero-title": ["3rem", "1.2"], // large headings
        "hero-sub": ["1.5rem", "1.5"],
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // modern sans
      },
    },
  },
  plugins: [require("tailwindcss-typography"),animate],
};
