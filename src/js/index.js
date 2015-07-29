var $ = require('jquery');

var App = require('./lib/App');

var TodoStore = require('./stores/TodoStore');
var Dispatcher = require('./dispatcher');
var TodoApp = require('./components/TodoApp');

var app = window.app = new App({
  stores: [ TodoStore ],
  dispatcher: Dispatcher,
  component: TodoApp,
  element: '#app'
});

app.start({
  todos: app.stores.TodoStore.getTodos()
});
