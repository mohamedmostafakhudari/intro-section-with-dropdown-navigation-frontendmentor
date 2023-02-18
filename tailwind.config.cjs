/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        almostWhite: "hsl(0, 0%, 98%)",
        mediumGray: "hsl(0, 0%, 41%)",
        almostBlack: "hsl(0, 0%, 8%)",
      },
      fontSize: {
        primary: "18px",
      },
      fontFamily: {
        body: ["'Epilogue'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
