// My original code with comments.

// require the Q library to make objects that contain promises
var q = require('q');

// create a named function that throws an error with the text "Oh Noes"
function throwMyGod() {
  throw new Error("OH NOES");
};

// create an iterate function that logs a number and returns the number incremented by one
function iterate(arg) {
  console.log(arg);
  return ++arg;
};


// call the first function with the Q.fcall and pass it the first parameter as the second argument.
q.fcall(iterate,1)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  // after the 5th call to iterate, throw an error
  .then(iterate).then(throwMyGod)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  // establish error handling after the 10 iterations
  .then(null, console.log)
  // declare the chain complete by using Q.done() to handle any uncaught exceptions.
  .done();

  // the official solution
  //   var q = require('q');

  // function iterate (num) {
  //   console.log(num);
  //   return ++num;
  // };

  // function throwMyGod () {
  //   throw new Error("OH NOES");
  // };

  // q.fcall(iterate, 1)
  // .then(iterate)
  // .then(iterate)
  // .then(iterate)
  // .then(iterate)
  // .then(throwMyGod)
  // .then(iterate)
  // .then(iterate)
  // .then(iterate)
  // .then(iterate)
  // .then(iterate)
  // .then(null, console.log);