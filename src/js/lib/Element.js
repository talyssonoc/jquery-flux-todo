var $ = require('jquery');

var Component = require('./Component');

var Element = function Element(options) {
  Component.call(this, options.data);

  this.tag = options.tag || 'div';
  this.children = options.children || [];
};

Element.prototype.mount = function mount() {
  var data = this.data;

  data.html = this.children.map(function(child) {
    var childComponent = this.createChild(child);

    return childComponent.mount();
  }.bind(this));

  this.$el = $('<' + this.tag + '>', data);

  return this.$el;
};

Element.prototype = $.extend({}, Component.prototype, Element.prototype);

module.exports = Element;
