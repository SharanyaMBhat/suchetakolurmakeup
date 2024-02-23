/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    backgroundImage: {
      "hero-pattern": "url('../public/hero.jpeg')",
      book: "url('../public/hero.jpg')",
    },
    colors: {
      primary: "#E8C4C4",
      secondary: "#D14D72",
      base: "#CE7777",
      footer: "#2B3A55",
      cream: "#FDEFEF",
      white: "#FFFFFF",
      btn: "#D14D72",
      btnHover: "#CD867D",
      card: "#FFDDD2",
      title: "#2C3333",
      body: "#282A3A",
      green: "#62D2A2",
      darkGreen: "#679B9B",
      logo: "#03072b",
      navbar: "#FCC8D1",
      fafa: "#FAFAFA",
      powder: "#D894C4",
      bg: "#FDF8F4",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      mono: ["Monaco", "ui-monospace"],
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      widestt: ".25em",
    },
    extend: {
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
      },
    },
  },
  plugins: [],
};
