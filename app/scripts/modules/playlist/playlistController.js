'use strict';

// Module Dependencies
var App = require('../../app');
var Marionette = require('backbone.marionette');
var Collection = require('./playlistCollection');
var View = require('./playlistView');

// A Controller Controls the workflow and logic that exists at the application
// level, above the implementation detail of views and models
var Controller = Marionette.Controller.extend({
    
  initialize: function () {
    App.vent.trigger('app:log', 'Load Playlist Collection');
    this.collection = new Collection();
  },

  start: function () {
    this.show(this.collection);
  },

  show: function (collection) {
  
    var view = new View({
      collection: collection
    });

    // App.playlist is a references to a region previously defined
    // using the App.addRegions() method.
    App.playlist.show(view);
  }

});

module.exports = Controller;