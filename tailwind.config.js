module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['"Manrope"'],
        DMSans: ['"DM+Sans"'],
      },
      colors: {
        "custom-gray": "#D9D9D9",
      },
      backdropBlur: {
        xl: "20px",
      },
      backgroundColor: {
        "black-10": "rgba(0, 0, 0, 0.1)",
      },
      backdropBlur: {
        10: "10px",
      },
    },
    variants: {
      extend: {
        backgroundOpacity: ["responsive", "hover", "focus", "active"],
        backdropBlur: ["responsive", "hover", "focus"],
      },
    },
  },
  plugins: [],
};
