/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,rs,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        primary : "#FEECE2",
        secondary: "FFBE98",
        tertiary: "E2BFB3",
      }
    },
  },
  plugins: [],
}

