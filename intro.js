// q is a library that lets me use promises
var q = require('q');

// defer() creates a Q object that has a promise property (the actual promise) along with associated functions for working with the promise.
var defer = q.defer();

// on the actual promise object, define what is to happen when the promise object is resolved(has a value)
defer.promise.then(console.log);
// set the value of the promise to the result of the timeOut function.
setTimeout(defer.resolve, 300, "RESOLVED!");


// Official Solution

      // var q = require('q');
      // var def = q.defer();
    
      // def.promise.then(console.log);
      // setTimeout(def.resolve, 300, "RESOLVED!");

