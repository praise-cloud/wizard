/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#B9FF66",
          secondary: "#191A23",
          light: "#F3F3F3",
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
};
