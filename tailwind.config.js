module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {    
      backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#f7f7f7', 'x': '#181818', 'y': '#15202B',}),
      
      textColor: theme => ({
        ...theme('colors'),
        'primary': "#ff0000", 'x': '#FFFFFF'}),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
