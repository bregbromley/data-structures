

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  var finished = false;
  for (var i of this._storage.get(index)) {
    if (i[0] === k) {
      i[1] = v;
      finished = true;
    }
  } if (!finished) {
    this._storage.get(index).push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {

  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i of this._storage.get(index)) {
    if (i[0] === k) {
      return i[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i of this._storage.get(index)) {
    if (i[0] === k) {
      this._storage.get(index).splice(i, 1);
    }
  }




  // this._storage.each(function(ele) {
  //   var idx = arguments[1];
  //   var storage = arguments[2];
  //   // console.log(storage);
  //   if (arguments[1] === index) {
  //     storage[index] = undefined;
  //   }
  // });
};




/*
 * Complexity: What is the time complexity of the above functions?
 */


