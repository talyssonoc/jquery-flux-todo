var $ = require('jquery');

var Store = require('../lib/Store');
var ActionTypes = require('../constants/ActionTypes');

var TodoStore = function TodoStore() {
  Store.call(this);

  this.handlers[ActionTypes.TOGGLE_TODO] = 'onToggleTodo';

  this.todos = [
    {
      id: 0,
      title: 'Abc',
      complete: true
    },
    {
      id: 1,
      title: 'Def',
      complete: false
    }
  ];
};

TodoStore.storeName = 'TodoStore';

TodoStore.prototype.onToggleTodo = function onToggleTodo(id) {
  this.todos.forEach(function(todo) {
    if(todo.id === id) {
      todo.complete = !todo.complete;
      return this.emitChange();
    }
  }.bind(this));
};

TodoStore.prototype.getTodos = function getTodos() {
  return this.todos;
};

$.extend(TodoStore.prototype, Store.prototype);

module.exports = TodoStore;
