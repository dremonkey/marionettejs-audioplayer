'use strict';

// Module Dependencies
var App = require('../../app');
var Controller = require('./vizController');
var Marionette = require('backbone.marionette');
  
// Create a new Marionette module
var VizModule = App.module('Viz');
VizModule.Controller = Controller;

VizModule.addInitializer(function () {
  var controller = new VizModule.Controller();
  controller.start();
});

module.exports = VizModule;