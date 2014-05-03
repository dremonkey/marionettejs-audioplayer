'use strict';

// Module Dependencies
var _ = require('underscore');
var Marionette = require('backbone.marionette');

var SongView = Marionette.ItemView.extend({

  tagName: 'tr',
  template: _.template('<td class="artist">(<%= artist %>)</td><td class="title"><%= title %></td>'),

  events: {
    'click': 'enqueue'
  },

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
  },

  enqueue: function (e) {
    this.model.enqueue();
  }
});

var LibraryView = Marionette.CompositeView.extend({

  tagName: 'table',
  template: _.template('<thead><tr><th>Artist</th><th>Title</th></tr></thead><tbody></tbody>'),
  itemView: SongView,

  events: {},

  initialize: function () {
    this.listenTo(this.collection, 'change', this.render);
  },

  // appendHtml is a Marionette.View method
  appendHtml: function (collectionView, itemView) {
    // ensure we nest the child list inside of 
    // the current list item
    collectionView.$("tbody").append(itemView.el);
  }
});

module.exports = LibraryView;