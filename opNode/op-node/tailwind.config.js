import Conclusion from "./src/conclusion";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myBackground: "#080000",
        crimsonRed: "#990000",
        cardShadow: "#981a1a",
      },
      backgroundImage: {
        heroSection: "url('./assets/background-img.webp')",
        headerSection: "url('./assets/vector.webp')",
        secondVector: "url('./assets/secondVector.png')",
        tokenBackground: "url('./assets/token-bg.webp')",
        conclusionBackground: "url('./assets/conclusion.webp')",
      },
    },
  },
  plugins: [require("daisyui")],
};
