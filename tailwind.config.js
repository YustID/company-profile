/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   hero: "url('./public/bg progammer.jpg')",
      // },
    },
  },

  plugins: [require("daisyui")],
};
