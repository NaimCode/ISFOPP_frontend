module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        topOpa1: "topOpa1 1.5s forwards",
        topOpa2: "topOpa2 2.1s forwards",
      },
      keyframes: {
        topOpa1: {
          from: {
            opacity: "0",
            transform: "translateY(40px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        topOpa2: {
          from: {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "35%": {
            opacity: "0",
            transform: "translateY(40px)",
          },

          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      colors: {
        primary: "#8338ec",
        primaryLight: "#3a86ff",
        secondary: "#ffbe0b",
        thirdy: "#fb5607",
        accent: "#ff006e",
      },
      fontFamily: {
        title: ["Maven Pro", "Arial", "sans-serif"],
        body: ["Manrope", "Arial", "sans-serif"],
        special: ["Baloo Thambi 2", "Arial", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
