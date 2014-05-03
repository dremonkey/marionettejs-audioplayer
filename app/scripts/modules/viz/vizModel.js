'use strict';

// Module Dependencies
var App = require('../../app');
var Backbone = require('Backbone');

var VizModel = Backbone.Model.extend({

  defaults: {
    song: ''
  },

  initialize: function () {
    App.vent.on('song:play', this.visualize, this);
  },

  visualize: function (song) {
    this.set('song', song);
  },

  ended: function () {
    this.set('song')
  }
});

module.exports = VizModel;