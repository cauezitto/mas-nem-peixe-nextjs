// next.config.js

const withCSS = require('@zeit/next-css')


module.exports = withCSS({
  cssModules: false,
  exportTrailingSlash: true
})
