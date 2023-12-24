/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#134e4a",
        secondary: "#d0cfd3",
        tertiary: "#115e59",
        "black-100": "#0f766e",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      backgroundColor: {
        btnDisabled: "#c4c4c4 !important",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobgPng.png')",
      },
    },

    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
};
