// var Set = function() {
//   var set = Object.create(setPrototype);
//   set._storage = null; // fix me
//   return set;
// };

// var setPrototype = {};

// setPrototype.add = function(item) {
// };

// setPrototype.contains = function(item) {
// };

// setPrototype.remove = function(item) {
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */

var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage.indexOf(item) === -1) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  if (this._storage.indexOf(item) !== -1) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  var index = this._storage.indexOf(item);
  this._storage.splice(index, 1);
};