/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F5F0E6",   // White
        secondary: "#E5890D", // Gold
      }
    },
  },
  plugins: [],
}