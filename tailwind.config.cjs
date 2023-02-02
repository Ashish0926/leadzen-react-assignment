/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter var", "sans-serif"],
      },
      boxShadow: {
        card: "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)",
        cardhover:
          "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    themes: [
      "bumblebee",
      "cupcake", // first one will be the default theme
      "dark",
      "forest",
      "synthwave",
      "halloween",
      "emerald"
    ],
  },
};
