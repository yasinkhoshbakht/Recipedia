/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#046E1B",
        secondaryColor: "#F79F1A",
        blue: "#75B8EE",
        bisco: "#FFC170",
        gray: "#7F7D7D",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        comment: "0 4px 30px #00000010",
      },
    },
  },
  plugins: [],
};
