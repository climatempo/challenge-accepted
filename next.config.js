const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

module.exports = withImages(withSass({ cssModules: true, hmr: false }))
