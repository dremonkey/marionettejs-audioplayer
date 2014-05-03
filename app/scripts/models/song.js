'use strict';

// Module Dependencies
var App = require('../app.js');
var Backbone = require('backbone');

var SongModel = Backbone.Model.extend({

  defaults: {
    url: '',
    artist: '',
    title: '',
    state: 'stopped'
  },

  // path: '/',

  initialize: function () {},

  play: function () {
    App.vent.trigger('song:play', this);
    this.set('state', 'playing');
  },

  stop: function () {
    App.vent.trigger('song:stop', this);
    this.set('state', 'stopped');
  },

  pause: function () {
    App.vent.trigger('song:pause', this);
    this.set('state', 'paused');
  },

  enqueue: function () {
    App.vent.trigger('song:enqueue', this);
  },

  dequeue: function () {
    App.vent.trigger('song:dequeue', this);
  },

  ended: function () {
    App.vent.trigger('song:ended', this);
    this.set('state', 'stopped');
  },
});

module.exports = SongModel;