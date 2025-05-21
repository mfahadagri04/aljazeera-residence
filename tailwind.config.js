/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // Matches all JS/JSX files in src/
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FEECE2",
        secondary: "#FFBE98",
        tertiary: "#E2BFB3", 
      }
    },
  },
  plugins: [],
}