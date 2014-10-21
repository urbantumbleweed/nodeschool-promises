// require the q module
var q = require('q');
// create the defer object that contains the actual promise.
var defer = q.defer();

// create a promise with the fullment handler "I fired"
// create a promise with the rejection handler " I did not fire"
defer.promise.then(console.log, console.log);
// simply set the resolve text, no timer needed
defer.resolve("I FIRED");
// simply set the reject text, no timer needed
defer.reject("I DID NOT FIRE");

// official solution
      // var q = require('q')
      //   , def = q.defer();
    
      // def.promise.then(console.log, console.log);
      // def.resolve("I FIRED");
      // def.reject("I DID NOT FIRE");

