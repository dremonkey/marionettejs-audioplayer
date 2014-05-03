'use strict';

// Module Dependencies
var _ = require('underscore');
var App = require('../../app');
var Marionette = require('backbone.marionette');

var VizView = Marionette.ItemView.extend({

  el: '<svg>',
  template: _.template(''),

  initialize: function () {

    // Rerender if the model changes
    this.listenTo(this.model, 'change', this.play);

     
    this.initVisualizer();
  },

  initVisualizer: function () {
    
    // Retrieve the audio player element
    var $audio = App.player.currentView.$el;

    // Start off by initializing a new context.
    var context = new (window.AudioContext || window.webkitAudioContext)();
    
    var analyser = context.createAnalyser();
    var source = context.createMediaElementSource(audio);
    
    source.connect(analyser);
    analyser.connect(context.destination); //speakers
  },

  play: function () {
    console.log(this.model);
  }

});

module.exports = VizView;