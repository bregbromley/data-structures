var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var objArr = Object.keys(this.storage);
  this.storage[objArr.length + 1] = value;
};

stackMethods.pop = function() {
  var objArr = Object.keys(this.storage);
  var current = this.storage[objArr.length];
  delete this.storage[objArr.length];
  return current;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};
