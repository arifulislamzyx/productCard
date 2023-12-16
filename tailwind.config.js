/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#1A9C9C",
      "primary-light": "#95E3E3",
      black: "#1E1E1E",
      seconday: "#878787",
      devider: "#C9C9C9",
    },
  },
  plugins: [],
};
