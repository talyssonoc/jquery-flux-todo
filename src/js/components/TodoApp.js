var $ = require('jquery');
var Template = require('lodash.template');

var Todo = require('./Todo');
var toggleTodo = require('../actions/toggleTodo');

var TodoApp = function TodoApp(element, initialData) {
  this.$element = $(element);
  this.data = initialData;
  this.template = Template($('[data-template="app"]').html());
};

TodoApp.prototype.init = function init() {
  app.stores.TodoStore.addListener(this.changeTodos.bind(this));
  this.addListeners();
  this.render();
};

TodoApp.prototype.addListeners = function addListeners() {
  this.$element.on('click', '[data-component="todo"]', function() {
    toggleTodo($(this).data('id'));
  });
};

TodoApp.prototype.changeTodos = function changeTodos(TodoStore) {
  this.data.todos = TodoStore.getTodos();
  this.render();
};

TodoApp.prototype.render = function render() {
  var todos = this.data.todos.map(function(t) {
    var todo = new Todo(t);
    return todo.render();
  });

  var content = this.template({
    todos: todos
  });

  this.$element.html(content);
};

module.exports = TodoApp;
