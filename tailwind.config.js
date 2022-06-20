const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
    },
    extend: {
      fontFamily: {
        sans: ["metropolis", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        jwilde: {
          300: "#9cc7ec",
          500: "#006bc9",
          700: "#004b8c",
        },
      },
    },
  },
  plugins: [],
};
