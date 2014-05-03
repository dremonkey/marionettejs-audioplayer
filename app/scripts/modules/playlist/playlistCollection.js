'use strict';

// Module Dependencies
var App = require('../../app');
var Backbone = require('backbone');
var Song = require('../../models/song');

var Collection = Backbone.Collection.extend({
  
  model:  Song,

  initialize: function () {
    App.vent.on('song:enqueue', this.enqueue, this);
    App.vent.on('song:dequeue', this.dequeue, this);
    App.vent.on('song:ended', this.dequeue, this);
  },

  enqueue: function (song) {
    App.vent.trigger('app:log', 'Adding "' + song.get('title') + '" to playlist');
    this.add(song);
    if (this.models.length === 1) {
      this.playFirst();
    }
  },

  dequeue: function (model) {
    this.nextSong();
    this.remove(model);
  },

  playFirst: function () {
    this.at(0).play();
  },

  nextSong: function () {
    if (this.models.length > 0) {
      this.playFirst();
    }
  }

});

module.exports = Collection;
