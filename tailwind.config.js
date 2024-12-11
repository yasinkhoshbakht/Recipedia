/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F79F1A",
        green: "#046E1B",
        lightBlue: "#75B8EE",
      },
      fontFamily: {
        Inter: "Inter,sans",
      },
    },
  },
  plugins: [],
};
