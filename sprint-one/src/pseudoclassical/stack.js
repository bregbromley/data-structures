var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};

};

Stack.prototype.push = function(value) {
  var objArr = Object.keys(this.storage);
  this.storage[objArr.length + 1] = value;

};

Stack.prototype.pop = function() {
  var objArr = Object.keys(this.storage);
  var current = this.storage[objArr[objArr.length - 1]];
  delete this.storage[objArr[objArr.length - 1]];
  return current;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

