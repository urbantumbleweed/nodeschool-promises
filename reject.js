var q = require('q');
// creates an object that contains a promise object in the promise attribute
var defer = q.defer();
// create function that logs an error to the console
var rejector = function (error) {
  console.log(error.message);
};

// create a promise that calls the rejector function on an error.
defer.promise.then(null, rejector);
// set a timeout function that throws an error after 300 message
// call reject on the defer object that will set the state of defer.promise to rejected
// function processes in 300 ms
// return an error object with the message 'Rejected'
setTimeout(defer.reject, 300, new Error('REJECTED!'));

// The official solution

      // var q = require('q');
      // var def = q.defer();
    
      // function printError (err) {
      //   console.log(err.message); 
      // }
    
      // def.promise.then(null, printError);
      // setTimeout(def.reject, 300, new Error("REJECTED!"));

