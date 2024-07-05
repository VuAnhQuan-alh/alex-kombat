/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-radial": "radial-gradient(circle, #00000036, #000000B2)",
      },
      fontFamily: {
        chakra: ["Chakra Petch", "serif"],
      },
    },
  },
  plugins: [],
};
