'use strict';

// Module Dependencies
var App = require('../../app');
var Controller = require('./playlistController');
var Marionette = require('backbone.marionette');
  
// Create a new Marionette module
var PlaylistModule = App.module('Example');
PlaylistModule.Controller = Controller;

PlaylistModule.addInitializer(function () {
  var controller = new PlaylistModule.Controller();
  controller.start();
});

module.exports = PlaylistModule;
