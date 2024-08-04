/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        customStart: "#1f242d",
        customEnd: "rgb(14, 134, 143)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
