/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      manrope: ["Manrope", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      primaryColor: "#E50914",
      secondaryColor: "#1B3139",
      tertiaryColor: "#F9F4EA",
      blackColor: "#000000",
      whiteColor: "#ffffff",
      textPrimary: "#4F4F4F",
    },

    extend: {
      backgroundImage: {},
      boxShadow: {
        shadow1: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
      keyframes: {},
      animation: {},
    },
    screens: {
      sm: "426px",
      md: "800px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
