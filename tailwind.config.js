/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ important for ThemeProvider toggle
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
