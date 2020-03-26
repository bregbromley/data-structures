var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[Object.keys(this.storage).length + 1] = value;
};

stackMethods.pop = function() {
  var current = this.storage[Object.keys(this.storage).length];
  delete this.storage[Object.keys(this.storage).length];
  return current;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};


