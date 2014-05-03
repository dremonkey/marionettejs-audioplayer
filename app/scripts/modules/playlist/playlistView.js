'use strict';

// Module Dependencies
var _ = require('underscore');
var Marionette = require('backbone.marionette');

var ItemView = Marionette.ItemView.extend({

  tagName: 'tr',
  template: _.template('<td class="artist"><%= artist %></td><td class="title"><%= title %></td>'),

  events: {},

   // You can specify a ui hash in your view that maps UI elements by their jQuery selectors. 
   // This is especially useful if you access the same UI element more than once in your view's code. 
   // Instead of duplicating the selector, you can simply reference it by this.ui.elementName
  ui: {},

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  }
});

var CompositeView = Marionette.CompositeView.extend({

  tagName: 'table', 
  template: _.template('<thead><tr><th>Artist</th><th>Title</th></tr></thead><tbody></tbody>'),
  itemView: ItemView,
  emptyView: '', // renders when there is no collection

  events: {},

  initialize: function () {
    this.listenTo(this.collection, 'change', this.render);
  },

  appendHtml: function (collectionView, itemView) {
    // ensure we nest the child list inside of the current list item
    collectionView.$('tbody').append(itemView.el);
  }
});

module.exports = CompositeView;