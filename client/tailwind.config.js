/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {},
    container: {
      padding: {
        md: "5rem",
      }
    },
    fontFamily: {
      poppins: ["Poppins","sans-serif"],
      rouge: ["Rouge Script", "cursive"]
    },
    backgroundImage: {
      hero: "url('./assets/border.png')"
    }
  },
  plugins: [],
}

