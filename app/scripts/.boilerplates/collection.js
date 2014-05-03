'use strict';

// Module Dependencies
var Backbone = require('backbone');
var Model = require('./model');

var Collection = Backbone.Collection.extend({
  model:  Model
});

module.exports = Collection;
