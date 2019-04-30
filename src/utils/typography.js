import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '24px',
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: 'Rubik',
      styles: ['300', '400'],
    },
    {
      name: 'Ubuntu',
      styles: ['300', '400'],
    },
    {
      name: 'Roboto',
      styles: ['300', '400'],
    },
    {
      name: 'Open Sans',
      styles: ['300', '400'],
    },
  ],
  headerFontFamily: [
    'Rubik',
    'Roboto',
    'Ubuntu',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Open Sans', 'Georgia', 'sans-serif'],
})

export default typography
