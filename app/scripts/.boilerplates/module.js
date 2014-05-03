'use strict';

// Module Dependencies
var App = require('../../app');
var Controller = require('./controller');
var Marionette = require('backbone.marionette');
  
// Create a new Marionette module
var ExampleModule = App.module('Example');
ExampleModule.Controller = Controller;

ExampleModule.addInitializer(function () {
  var controller = new ExampleModule.Controller();
  controller.start();
});

module.exports = ExampleModule;