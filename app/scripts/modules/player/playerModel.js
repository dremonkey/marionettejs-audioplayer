'use strict';

// Module Dependencies
var App = require('../../app');
var Backbone = require('Backbone');

var PlayerModel = Backbone.Model.extend({

  defaults: {
    song: ''
  },

  initialize: function () {
    App.vent.on('song:play', this.play, this);
  },

  play: function (song) {
    this.set('song', song);
  },

  ended: function () {
    App.vent.trigger('song:ended', this.model);
  }
});

module.exports = PlayerModel;