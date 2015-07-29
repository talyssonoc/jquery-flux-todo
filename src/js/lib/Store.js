var $ = require('jquery');

var Store = function Store() {
  this.callbacks = $.Callbacks();
  this.handlers = {};
};

Store.storeName = 'Store';

Store.prototype.addListener = function addListener(callback) {
  this.callbacks.add(callback);
};

Store.prototype.emitChange = function emitChange() {
  this.callbacks.fire(this);
};

Store.prototype.handleAction = function handleAction(actionType, payload) {
  var handler = this.handlers[actionType];

  this[handler] && this[handler](payload);
};

$.Store = Store;

module.exports = Store;
