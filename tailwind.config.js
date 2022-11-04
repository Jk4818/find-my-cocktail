/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      dropShadow: {
        'main': [
          '0 0 20px rgba(0, 0, 0, 0.25)'
        ]
      }
    },
  },
  plugins: [],
}