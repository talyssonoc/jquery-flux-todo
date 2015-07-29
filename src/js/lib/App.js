var getStoresMap = function getStoresMap(stores) {
  var storesMap = {};

  stores.forEach(function(Store) {
    storesMap[Store.storeName] = new Store();
  });

  return storesMap;
};

var App = function App(options) {
  this.stores = getStoresMap(options.stores || []);
  this.dispatcher = options.dispatcher;
  this.component = options.component;
  this.element = options.element;

  this.registerStores();
};

App.prototype.registerStores = function registerStores() {
  for(var s in this.stores) {
    this.dispatcher.registerStore(this.stores[s]);
  }
};

App.prototype.start = function start(initialData) {
  this.component = new this.component(this.element, initialData);
  this.component.init();
};

module.exports = App;
