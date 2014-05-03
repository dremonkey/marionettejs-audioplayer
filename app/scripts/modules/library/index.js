'use strict';

// Module Dependencies
var App = require('../../app');
var LibraryView = require('./libraryView');
var Marionette = require('backbone.marionette');
var Collection = require('./collection');

// Import song data (should be retrieved using fetch)
var data = require('../../../data/data');


// Library Controller
// ------------------
//
// Control the workflow and logic that exists at the application
// level, above the implementation detail of views and models
var LibraryController = Marionette.Controller.extend({
    
  initialize: function () {
    App.vent.trigger('app:log', 'Load Songs Collection');
    this.songs = new Collection(data);
  },

  start: function () {
    this.showLibrary(this.songs);
  },

  showLibrary: function (songs) {
    var view = new LibraryView({
      collection: songs
    });

    App.library.show(view);
  }

});
  
// Create a new Marionette module
var Library = App.module('Library');
Library.Controller = LibraryController;

Library.addInitializer(function () {
  var controller = new Library.Controller(App);
  controller.start();
});

module.exports = Library;