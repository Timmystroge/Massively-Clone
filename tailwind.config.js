/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      primary: "#212931",
      secondary: "#1e252d",
      grayish: "#eeeeee",
      lightGray: "#f5f5f5",
      text1: "#909498",
      text2: "#717981",
      test: "red",
    },
    fontFamily: {
      bold: "bold",
      boldItalic: "BoldItalic",
      light: "light",
      lightItalic: "lightItalic",
      black: "black",
    },
    extend: {},
  },
  plugins: [],
};
