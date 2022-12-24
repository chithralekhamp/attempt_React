module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        gray_51: "#fafafa",
        indigo_900_0c: "#1b3a770c",
        bluegray_500: "#6d7391",
        bluegray_400: "#7b8db0",
        bluegray_100: "#cbd4e6",
        indigo_A200: "#605dec",
        white_A700: "#ffffff",
        gray_50: "#f6f5fd",
      },
      borderRadius: { radius4: "4px" },
      fontFamily: { nunitosans: "Nunito Sans" },
      boxShadow: { bs: "0px 12px  24px 0px #1b3a770c" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
