'use strict';

// Module Dependencies
var App = require('../../app');
var Marionette = require('backbone.marionette');
var Model = require('./vizModel');
var View = require('./vizView');

// A Controller Controls the workflow and logic that exists at the application
// level, above the implementation detail of views and models
var Controller = Marionette.Controller.extend({
    
  initialize: function () {
    App.vent.trigger('app:log', 'Load Viz Controller', this);
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
    App.viz.show(view);
  }

});

module.exports = Controller;