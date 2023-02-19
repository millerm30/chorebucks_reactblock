module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/wave.svg')"
      }
    },
  },
  plugins: [
    require("tw-elements/dist/plugin")
  ],
};
