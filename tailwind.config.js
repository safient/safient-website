const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  extend: {
    fontFamily: {
      sans: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
    },
  },
};
