var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var objArr = Object.keys(storage);
    if (objArr.length === 0) {
      var max = 0;
    } else {
      var max = objArr[objArr.length - 1];
    }
    storage[Number(max) + 1] = value;
  };

  someInstance.dequeue = function() {
    console.log('storage', storage);
    var objArr = Object.keys(storage);
    var idx = Number(objArr[0]);
    var current = storage[idx];
    delete storage[idx];
    console.log('stor:', storage);
    console.log( 'current', current);
    return current;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
