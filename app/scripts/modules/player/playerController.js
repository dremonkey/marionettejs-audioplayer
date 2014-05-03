'use strict';

// Module Dependencies
var App = require('../../app');
var Marionette = require('backbone.marionette');
var Model = require('./playerModel');
var View = require('./playerView');

// A Controller Controls the workflow and logic that exists at the application
// level, above the implementation detail of views and models
var Controller = Marionette.Controller.extend({
    
  initialize: function () {
    App.vent.trigger('app:log', 'Load Player Controller');
    this.model = new Model();
  },

  start: function () {
    this.show(this.model);
  },

  show: function (model) {
  
    var view = new View({
      model: model
    });

    // App.main is a references to a region previously defined
    // using the App.addRegions() method.
    App.player.show(view);
  }

});

module.exports = Controller;