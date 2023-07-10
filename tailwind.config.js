/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      urbanist: ["Urbanist", "sans-serif"],
    },
    colors: {
      blue: "#5F19E6",
      red: "#E6193A",
      green: "#A0E619",
      aqua: "#028082",
      black: "#000",
      white: "#fff",
    },
    screens: {
      ss: "340px",
      sm: "550px",
      md: "768px",
      lg: "1050px",
      xl: "1280px",
      xl2: "1500px",
    },
  },
  plugins: [],
};