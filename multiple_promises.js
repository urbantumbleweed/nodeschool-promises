// Here is my original solution.

// require the Q library to create promises.
var q = require('q'), 
  // the two promise variables
  one = q.defer(), 
  two = q.defer();

// the function that accepts two promises
function all(prom1, prom2) {
  // create a defer object that contains the promise to be returned from this function.
  var group = q.defer();
  // have a counter to track arg promise fulfillment
  // have vars capture the value of promise args
  var count = 0, val1, val2;

  // function that increments and resolves the group defer promise
  function fulfiller() {
    count++;
    if (count === 2) {
      group.resolve([val1, val2]);
    }
  };

  // what do to when prom1 is fulfilled
  // set the value of the promise to val1
  // call the fulfiller function
  // if there is an error in promise, set state of group promise to rejected.
  // protect against uncaught exceptions.
  prom1
  .then(function (data){
    val1 = data;
    fulfiller();
  })
  .then(null, group.reject)
  .done();

  // the same as prom1 but with prom2 variables
  prom2
  .then(function (data){
    val2 = data;
    fulfiller();
  })
  .then(null, group.reject)
  .done();

  // return the group promise, which by now is resolved or rejected
  return group.promise;
};

// call the all function with actual promises.
all(one.promise, two.promise)
// the q implemenation of all.  Use line above OR line below.
// q.all([one.promise, two.promise])
  // .spread(console.log)
  .then(console.log)
  .done();

// use a setTimout to manually resolve promises after 200 ms
setTimeout(function() {
  one.resolve("PROMISES");
  two.resolve("FTW");
}, 200);

// Here is the official solution
 // var q = require('q')
 //    , def1 = q.defer()
 //    , def2 = q.defer();

 //  function all (prom1, prom2) {
 //    var groupDef = q.defer()
 //      , counter = 0
 //      , val1
 //      , val2;

 //    prom1
 //    .then(function (result) {
 //      val1 = result;
 //      ++counter;
 //      if (counter >=2) groupDef.resolve([val1, val2]);
 //    })
 //    .then(null, groupDef.reject)
 //    .done();

 //    prom2
 //    .then(function (result) {
 //      val2 = result;
 //      ++counter;
 //      if (counter >=2) groupDef.resolve([val1, val2]);
 //    })
 //    .then(null, groupDef.reject)
 //    .done();

 //    return groupDef.promise;
 //  }

 //  all(def1.promise, def2.promise)
 //  .then(console.log)
 //  .done();

 //  setTimeout(function () {
 //    def1.resolve("PROMISES");
 //    def2.resolve("FTW");
 //  }, 200);