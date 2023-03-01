/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D4967D",
          50: "#FFFFFF",
          100: "#FDF9F8",
          200: "#F2E0D9",
          300: "#E8C8BA",
          400: "#DEAF9C",
          500: "#D4967D",
          600: "#C67453",
          700: "#A95838",
          800: "#7F422A",
          900: "#552C1C",
        },
        secondary: {
          DEFAULT: "#3F4A49",
          50: "#99A8A7",
          100: "#8E9F9D",
          200: "#788C8A",
          300: "#657674",
          400: "#52605F",
          500: "#3F4A49",
          600: "#252C2B",
          700: "#0B0D0D",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
