/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#F5F1E6",
        sage: "#E6E3D6",
        deepGreen: "#3B5A40",
        olive: "#A1B57D",
        terra: "#D9A066",
        clay: "#B57A5A"
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Open Sans", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      }
    }
  },
  plugins: []
};
