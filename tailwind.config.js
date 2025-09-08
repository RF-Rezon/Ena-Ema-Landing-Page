// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["var(--font-manrope)", "sans-serif"],
        general: ["var(--font-general)", "sans-serif"],
      },
    },
  },
  plugins: [],
};