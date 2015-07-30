var $ = require('jquery');


var Component = function Component(data) {
  this.data = data || {};
};

Component.prototype.addListeners = function addListeners($el) {};

Component.prototype.renderTemplate = function renderTemplate(data) {
  return this.template(data);
};

Component.prototype.mount = function mount() {
  this.$el = $(this.renderTemplate(this.data));

  this.renderChildren();

  this.addListeners(this.$el);

  return this.$el;
};

Component.prototype.refresh = function refresh() {
  this.renderChildren();
};

Component.prototype.renderChildren = function renderChildren() {
  var children = this.render();

  children.forEach(function(child) {
    var childComponent = this.createChild(child);

    this.$el.find('[data-yield="' + child.on + '"]').html(childComponent.mount());
  }.bind(this));
};

Component.prototype.createChild = function createChild(child) {
  var Element = require('./Element');
  var childComponent;

  if(typeof child.component === 'string') {
    childComponent = new Element({
      tag: child.component,
      data: child.data,
      children: child.children
    });
  } else {
    childComponent = new child.component(child.data, child.children);
  }

  return childComponent;
};

Component.prototype.render = function render() {
  return [];
};

module.exports = Component;
