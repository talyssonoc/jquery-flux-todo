var $ = require('jquery');

var Dispatcher = function Dispatcher() {
  this.callbacks = $.Callbacks();
};

Dispatcher.prototype.registerStore = function registerStore(store) {
  this.callbacks.add(store.handleAction.bind(store));
};

Dispatcher.prototype.dispatch = function dispatch(actionType, payload) {
  this.callbacks.fire(actionType, payload);
};

module.exports = Dispatcher;
