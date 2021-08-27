module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
