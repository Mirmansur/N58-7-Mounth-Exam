/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
    },
    extend: {
      colors: {
        one: "#000",
        two: "#fff",
        three: "#B3B3B3",
        four: "#63CF6C",
        five: "#604EC1",
        six: "#4077CA",
        seven: "#3333A3",
        eight: "rgba(255, 255, 255, 0.233);",
        nine: " #3333a3 5.09%, #121212 33.4%",
        ten: "#000000e0",
        eleven: "#63CF6C",
        twelve: "#DEF628",
        purple: "rgba(96, 78, 193, 1)",
        red: "rgba(18, 18, 18, 1)",
        yellow: "#272525b2",
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
