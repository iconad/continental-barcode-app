module.exports = {
  mode: "jit",
  purge: [
    './index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "theme-yellow": '#f7a600',
        "theme-gold": '#c8994a',
        "theme-yellow-dark": '#e6b323',
        "theme-dark": '#37474f',
        "theme-gray": '#e5e3e0',
      },
      height: {
        'screen-75': '90vh',
        'screen-50': '50vh'
      },
      fontFamily: {
        'main': ['"Open Sans"']
      }
    },
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover'],
    },
  },
  plugins: [],
}
