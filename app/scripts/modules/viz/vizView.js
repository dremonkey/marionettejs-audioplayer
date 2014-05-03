'use strict';

// Global: THREE, Dancer

// Module Dependencies
var _ = require('underscore');
var App = require('../../app');
var Marionette = require('backbone.marionette');
var THREE = require('three');

// Dancer Settings
var PARTICLE_COUNT    = 250;
var MAX_PARTICLE_SIZE = 12;
var MIN_PARTICLE_SIZE = 2;
var GROWTH_RATE       = 5;
var DECAY_RATE        = 0.5;

var BEAM_RATE         = 0.5;
var BEAM_COUNT        = 20;

var GROWTH_VECTOR = new THREE.Vector3( GROWTH_RATE, GROWTH_RATE, GROWTH_RATE );
var DECAY_VECTOR  = new THREE.Vector3( DECAY_RATE, DECAY_RATE, DECAY_RATE );
var beamGroup     = new THREE.Object3D();
// var particles     = group.children;
var colors        = [ 0xaaee22, 0x04dbe5, 0xff0077, 0xffb412, 0xf6c83d ];

var t, dancer, kick; 

var VizView = Marionette.ItemView.extend({

  el: '<svg>',
  template: _.template(''),

  initialize: function () {

    // Rerender if the model changes
    this.listenTo(this.model, 'change', this.play);

     
    this.initVisualizer();
  },

  initVisualizer: function () {

    // Create a new dancerjs instance
    var dancer = new Dancer();
    
    // Retrieve the audio player element
    var $audio = App.player.currentView.$el;
    
    // Using an audio object
    dancer.load(App.player.currentView.el);
  },

  play: function () {
    console.log(this.model);
  }

});

module.exports = VizView;