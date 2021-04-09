const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "blue-gray": colors.blueGray,
      },
      spacing: {
        18: "4.5rem",
        110: "30rem",
        130: "35rem",
        170: "40rem",
        192: "48rem",
      },
      width: {
        drawer: "calc(100% - 4rem)",
        "drawer-open": "calc(100% - 16rem)",
      },
      minHeight: {
        0: "0px",
        12: "3rem",
        full: "100%",
        screen: "100vh",
      },
      minWidth: {
        0: "0px",
        full: "100%",
        min: "min-content",
        max: "max-content",
      },
      maxHeight: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
