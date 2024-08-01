/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#091156",
        secondary: "#8B8B8B",
        accent: "#FF64AE",
      },
      fontFamily: {
        base: "16px",
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
