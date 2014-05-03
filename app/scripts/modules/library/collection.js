'use strict';

// Module Dependencies
var Backbone = require('backbone');
var Song = require('../../models/song');

var Collection = Backbone.Collection.extend({
  model:  Song
});

module.exports = Collection;
