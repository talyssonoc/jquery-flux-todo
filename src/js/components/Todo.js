var $ = require('jquery');
var Template = require('lodash.template');

var Todo = function Todo(data) {
  this.data = data;
  this.template = Template($('[data-template="todo"]').html());
};

Todo.prototype.render = function render() {
  var className = ['todo'];

  this.data.complete && className.push('complete');

  this.data.className = className.join(' ');

  return this.template(this.data);
};

module.exports = Todo;
