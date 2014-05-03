'use strict';

// Marionette Modules
require('./modules/library');
require('./modules/player');
require('./modules/playlist');
require('./modules/viz');

// Start the app and its sub-modules
var App = require('./app');
App.start();
