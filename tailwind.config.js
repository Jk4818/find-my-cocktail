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
      },
      colors: {
        'web-gray': '#787878'
      },
      animation: {
        blob: "blob 20s infinite"
      },
      keyframes: {
        blob: {
          "0%":   { transform: "scale(1)   translate(10px, -30px)" },
          "20%":  { transform: "scale(0.8, 1) translate(30px, 0px) rotate(160deg)" },
          "78%":  { transform: "scale(1.3) translate(0vw, 40px) rotate(-20deg)" },
          "100%": { transform: "scale(1)   translate(10px, -30px)" },
        }
      }
    },
  },
  plugins: [],
}