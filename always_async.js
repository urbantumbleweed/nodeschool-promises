// require the q library and set the defer object
var q = require('q'), defer = q.defer();

// call then() on the promise with a call to console log the value of defer.promise
defer.promise.then(console.log);
// resolve the promise to the value of SECOND, should evaluate on nextTick
defer.resolve("SECOND");
// should appear on this tick.
console.log("FIRST");

// Official solution
      // var q = require('q')
      //   , deferred = q.defer();
    
      // deferred.promise.then(console.log);
      // deferred.resolve("SECOND");
      // console.log("FIRST");


