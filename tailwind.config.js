/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      manrope: ["Manrope", "sans-serif"],
    },
    colors: {
      primaryColor: "#e40915",
      blackColor: "#000000",
      whiteColor: "#ffffff",
      textPrimary: "#4F4F4F",
    },

    extend: {
      backgroundImage: {},
      boxShadow: {},
      keyframes: {},
      animation: {},
    },
    screens: {
      sm: "425px",
      md: "800px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
