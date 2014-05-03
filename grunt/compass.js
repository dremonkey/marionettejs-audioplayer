'use strict';

module.exports = {
  options: {
    sassDir: 'app/styles',
    imagesDir: 'app/images',
    fontsDir: 'app/fonts',
    importPath: 'app/components/bootstrap-sass/vendor/assets/stylesheets',
    httpImagesPath: '/images',
    httpGeneratedImagesPath: '/images/generated',
    httpFontsPath: '/styles/fonts',
    relativeAssets: false,
    assetCacheBuster: false,
    // raw: 'Sass::Script::Number.precision = 10\n'
  },
  serve: {
    options: {
      debugInfo: true,
      cssDir: '.tmp/styles',
      generatedImagesDir: '.tmp/images/generated'
    }
  }
};