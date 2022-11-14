/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-red": "#ee2d1c",
        "brand-black": "#4c4c51",
        "brand-blue": "#88939e",
        "brand-gray": "#e8e8e8",
        "hero-color": "#AEB3C3",
      },
    },
  },
  plugins: [],
}
