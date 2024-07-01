const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },

    colors: {
      "BG-Green": "#001C00",
      "BG-Red": "#1C0000",
      "BG-Yellow": "#352800",
      "BG-Blue": "#002451",
    },
  },
  plugins: [],
});
