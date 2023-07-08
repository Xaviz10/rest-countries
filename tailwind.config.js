/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryRegular: ["NunitoSans", "sans-serif"],
        primaryItalic: ["NunitoSans-Italic", "sans-serif"],
      },
      colors: {
        darkMode: {
          elements: "#2b3238",
          background: "#20262b",
          text: "#ffffff",
        },
        lightMode: {
          elements: "#ffffff",
          background: "#fafafa",
          input: "#858585",
          text: "#111314",
        },
      },
    },
  },
  plugins: [],
};
