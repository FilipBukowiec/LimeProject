/** @type {import('tailwindcss').Config} */
const assert = require("assert");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
