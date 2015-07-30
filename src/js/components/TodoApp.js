var $ = require('jquery');
var Template = require('lodash.template');

var Component = require('../lib/Component');

var Todo = require('./Todo');
var toggleTodo = require('../actions/toggleTodo');

var TodoApp = function TodoApp(initialData) {
  Component.call(this, initialData);

  this.template = Template($('[data-template="app"]').html());
  app.stores.TodoStore.addListener(this.changeTodos.bind(this));
};

TodoApp.prototype.addListeners = function addListeners($el) {
  $el.on('click', '[data-component="todo"]', function() {
    toggleTodo($(this).data('id'));
  });
};

TodoApp.prototype.changeTodos = function changeTodos(TodoStore) {
  this.data.todos = TodoStore.getTodos();
  this.refresh();
};

TodoApp.prototype.render = function render() {
  var todos = this.data.todos.map(function(todo) {
    return {
      component: Todo,
      data: todo
    };
  });

  return [
    {
      component: 'ul',
      on: 'todo-list',
      children: todos
    }
  ];
};

TodoApp.prototype = $.extend({}, Component.prototype, TodoApp.prototype);

module.exports = TodoApp;
