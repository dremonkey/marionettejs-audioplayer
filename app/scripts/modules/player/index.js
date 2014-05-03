'use strict';

// Module Dependencies
var App = require('../../app');
var Controller = require('./playerController');
var Marionette = require('backbone.marionette');
  
// Create a new Marionette module
var PlayerModule = App.module('Player');
PlayerModule.Controller = Controller;

PlayerModule.addInitializer(function () {
  var controller = new PlayerModule.Controller();
  controller.start();
});

module.exports = PlayerModule;