'use strict';

var Marionette = require('backbone.marionette');

var Router = Marionette.AppRouter.extend({
  appRoutes: {
    ''  : 'home',
  }
});

module.exports = Router;