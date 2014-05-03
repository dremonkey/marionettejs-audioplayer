'use strict';

// Module Dependencies
var _ = require('underscore');
var Marionette = require('backbone.marionette');

var PlayerView = Marionette.ItemView.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay src="" />',
  template: _.template(''),

  initialize: function() {

    // Rerender if the model changes
    this.listenTo(this.model, 'change', this.play);

    // listen for the ended event from the player
    this.$el.on('ended', this.ended);
  },

  play: function () {

    // set the audio source
    var src = this.model.get('song').get('url');
    this.$el.attr('src', src);

    // play it
    this.$el[0].play();
  },

  ended: function () {
    this.model.ended();
  }

});

module.exports = PlayerView;