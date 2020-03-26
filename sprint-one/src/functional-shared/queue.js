var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};

  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var objArr = Object.keys(this.storage);
  if (objArr.length === 0){
    var max = 0;
  } else {
    var max = objArr[objArr.length -1];
  }
  this.storage[Number(max) + 1] = value;
};

queueMethods.dequeue = function() {
  var objArr = Object.keys(this.storage);
  var current = this.storage[objArr[0]];
  delete this.storage[objArr[0]];
  return current;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};
