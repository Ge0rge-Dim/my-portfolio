/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        katibeh: ["Katibeh", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },

      colors: {
        "primary-light": "#FBFBFB",
        "secondary-light": "#8F5E10",
        "primary-dark": "#262626",
        "secondary-dark": "#CEB389",
      },
    },
  },
  plugins: [],
};
