/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",   // White
        secondary: "#D19705", // Gold
        tertiary: "#000000",  // Black
      }
    },
  },
  plugins: [],
}