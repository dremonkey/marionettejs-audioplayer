'use strict';

// Module Dependencies
var _ = require('underscore');
var Marionette = require('backbone.marionette');

// All Marionette Views inherit from Marionette.View 
// but you never want to use Marionette.View directly

var ItemView = Marionette.ItemView.extend({

  template: '',

  events: {},

   // You can specify a ui hash in your view that maps UI elements by their jQuery selectors. 
   // This is especially useful if you access the same UI element more than once in your view's code. 
   // Instead of duplicating the selector, you can simply reference it by this.ui.elementName
  ui: {},

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  }
});


// Note: 
// You DO NOT specify a template for a CollectionView. This is because a CollectionView 
// does not know how to render a template. It only knows how to create instances of the 
// itemView for each item in the collection that it was handed.
var CollectionView = Marionette.CollectionView.extend({
  
  itemView: ItemView,
  emptyView: '', // renders when there is no collection

  initialize: function() {}
});


// Use a CompositeView if you need a collection view with a template
// for the parent collection such as a table, a list with a header and footer, etc
//
// Note:
// If CompositeView doesn’t have an itemView specified, it will default to using another 
// instance of the CompositeView for that
var CompositeView = Marionette.CompositeView.extend({

  tagName: 'table',
  template: _.template('<thead><tr><th>Header1</th><th>Header2</th></tr></thead><tbody></tbody>'),
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

module.exports = CollectionView;
module.exports = CompositeView;