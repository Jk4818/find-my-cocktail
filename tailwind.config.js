/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        merriweather: ["Merriweather ", "serif"],
        "roboto-mono": ["Roboto Mono", "monospace"],
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
        blob: "blob 20s infinite",
        "blob-2": "blob-2 15s infinite",
        "bounce-x": "bounce-x 1s infinite",
        ring: "ring 4s 0.7s infinite ease-in-out"
      },
      keyframes: {
        blob: {
          "0%":   { transform: "scale(1)   translate(0, 0)" },
          "10%":   { transform: "scale(1)   translate(10px, -30px)" },
          "20%":  { transform: "scale(0.8, 1) translate(30px, 0px) rotate(90deg)" },
          "78%":  { transform: "scale(1.3) translate(0vw, 40px) rotate(-20deg)" },
          "90%": { transform: "scale(1)   translate(10px, -30px)" },
          "100%":   { transform: "scale(1)   translate(0, 0)" },
        },
        "blob-2": {
          "0%":   { transform: "scale(1)   translate(0, 0)" },
          "10%":   { transform: "scale(1)   translate(10px, 20px)" },
          "20%":  { transform: "scale(0.8, 1) translate(10px, 0px) rotate(-50deg)" },
          "78%":  { transform: "scale(1.3) translate(0, 40px) rotate(60deg)" },
          "90%": { transform: "scale(1)   translate(10px, -30px)" },
          "100%":   { transform: "scale(1)   translate(0, 0)" },
        },
        ring: {
         " 0%": { transform: "rotate(0)" },
         " 1%": { transform: "rotate(30deg)" },
         " 3%": { transform: "rotate(-28deg)" },
         " 5%": { transform: "rotate(34deg)" },
         " 7%": { transform: "rotate(-32deg)" },
         " 9%": { transform: "rotate(30deg)" },
          "11%": { transform: "rotate(-28deg)" },
          "13%": { transform: "rotate(26deg)" },
          "15%": { transform: "rotate(-24deg)" },
          "17%": { transform: "rotate(22deg)" },
          "19%": { transform: "rotate(-20deg)" },
          "21%": { transform: "rotate(18deg)" },
          "23%": { transform: "rotate(-16deg)" },
          "25%": { transform: "rotate(14deg)" },
          "27%": { transform: "rotate(-12deg)" },
          "29%": { transform: "rotate(10deg)" },
          "31%": { transform: "rotate(-8deg)" },
          "33%": { transform: "rotate(6deg)" },
          "35%": { transform: "rotate(-4deg)" },
          "37%": { transform: "rotate(2deg)" },
          "39%": { transform: "rotate(-1deg)" },
          "41%": { transform: "rotate(1deg)" },
        
          "43%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(0)" },
        }
      }
    },
  },
  plugins: [],
}