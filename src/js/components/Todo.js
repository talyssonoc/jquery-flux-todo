var $ = require('jquery');
var Template = require('lodash.template');

var Component = require('../lib/Component');

var Todo = function Todo(data) {
  Component.call(this, data);

  this.template = Template($('[data-template="todo"]').html());
};

Todo.prototype = $.extend({}, Component.prototype, Todo.prototype);

module.exports = Todo;
