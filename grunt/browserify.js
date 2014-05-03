'use strict';

module.exports = {
  options: {
    bundleOptions: {
      debug: true
    },
    watch: true,
    external: [
      'jquery',
      'underscore',
      'backbone',
      'backbone.marionette'
    ],
  },
  app: {
    files: {
      '.tmp/scripts/app.js': ['app/scripts/main.js']
    }
  },

  // External modules that don't need to be constantly re-compiled
  vendor: {
    src: [],
    dest: '.tmp/scripts/vendor.js',
    options: {
      bundleOptions: {
        debug: false
      },
      require: [
        'jquery',
        'underscore',
        'backbone',
        'backbone.wreqr',
        'backbone.babysitter',
        'backbone.marionette'
      ],
      external: null // Reset this here because it's not needed
    }
  }
}