// require the qhttp library for the ability to wrap http response in promise
// use the url specified
var qhttp = require('q-io/http'), 
path = "http://localhost:1337";

// create a qhttp promise for content of an OK HTTP response at 'path'
// take the resulting promise (value) and pass into a function 
// that will parse the JSON response and console.log
qhttp.read(path)
  .then(function (json) {
    console.log(JSON.parse(json));
  })
  // error handling on promise
  .then(null, console.error)
  // catch possible uncaught exceptions
  .done();

  // Official solution
  // var qhttp = require('q-io/http');

  // qhttp.read("http://localhost:1337")
  // .then(function (json) {
  //   console.log(JSON.parse(json));
  // })
  // .then(null, console.error)
  // .done()