import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.45,
  scaleRatio: 3,
  googleFonts: [
    {
      name: 'Unna',
      styles: ['400', '700'],
    },
    {
      name: 'Lato',
      styles: ['300', '400', '700'],
    },
  ],
  headerFontFamily: ['Maria', 'Unna', '-apple-system', 'system-ui', 'sans-serif'],
  bodyFontFamily: ['GT America', 'Lato', '-apple-system', 'system-ui', 'sans-serif'],
})

export default typography