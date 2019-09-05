import Typography from "typography"

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.5,
  scaleRatio: 3,
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["300", "400", "700"],
    },
    {
      name: "Lato",
      styles: ["300", "400", "700"],
    },
  ],
  headerFontFamily: [
    "Montserrat",
    "Lato",
    "-apple-system",
    "system-ui",
    "sans-serif",
  ],
  bodyFontFamily: [
    "Montserrat",
    "Lato",
    "-apple-system",
    "system-ui",
    "sans-serif",
  ],
})

export default typography
