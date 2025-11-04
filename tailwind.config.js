/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neonBlue: "#00E5FF",
        darkBlue: "#0A0F24",
        cyanGlow: "#00FFFF",
      },
    },
  },
  plugins: [],
};
