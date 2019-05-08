import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: 'Ubuntu',
      styles: ['300', '400', '500', '700', '800', '900'],
    },
  ],
  headerFontFamily: [
    'Ubuntu',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Ubuntu', 'Georgia', 'sans-serif'],
})

export default typography
