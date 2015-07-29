var ActionTypes = require('../constants/ActionTypes');

module.exports = function toggleTodo(id) {
  app.dispatcher.dispatch(ActionTypes.TOGGLE_TODO, id);
};
