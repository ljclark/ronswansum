module.exports = {
  content: ["./templates/**/*.{html,js,twig}"],
  theme: {
    extend: {
      keyframes: {
        "move-bg": {
          to: {
            backgroundPosition: "400% 0",
          },
        },
      },
      fontFamily: {
        wotfardReg: ["Wotfard-Regular", "sans-serif"],
        wotfardMed: ["Wotfard-Medium", "sans-serif"],
        wotfardLight: ["Wotfard-Light", "sans-serif"],
      },
      animation: {
        "move-bg": "move-bg 8s infinite linear",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
