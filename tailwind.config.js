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
        secondary: "#C5A880", // Muted Metallic Gold
        tertiary: "#000000",  // Black
      }
    },
  },
  plugins: [],
}