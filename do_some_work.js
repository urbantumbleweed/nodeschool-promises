// require the q-io/http library to return promises
var q = require('q')
, qhttp = require('q-io/http');

qhttp.read("http://localhost:7000")
  .then(function (data) {
    // My original solution is the next comment line
    // return qhttp.read("http://localhost:7001/" + data.toString());
      return qhttp.read("http://localhost:7001/" + data);
  })
  .then(function (json) {
    console.log(JSON.parse(json));
  })
  .then(null, console.error)
  .done();


// The complete official solution
  // var qhttp = require('q-io/http');

  // qhttp.read("http://localhost:7000/")
  // .then(function (id) {
  //   return qhttp.read("http://localhost:7001/" + id);
  // })
  // .then(function (json) {
  //   console.log(JSON.parse(json));
  // })
  // .then(null, console.error)
  // .done();


