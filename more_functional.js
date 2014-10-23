var q = require('q')
, qhttp = require('q-io/http')
, _ = require('lodash')
, sessPath = "http://localhost:7000/"
, dbPath = "http://localhost:7001/";

// create a variable that will be the base dbPath and the result 
// of concat called later
// bind concat function call to dbPath.  In other words, 
// add the new string to the end of dbPath
var buildDbPath = _.bind(String.prototype.concat, dbPath);

// create a HTTP request promise
qhttp.read(sessPath)
// when promise is fulfilled, compose two functions using lodash
// take the value of the promise (http response) and call the 
// right-most argument passing the promise value as argument
// in this case the content to be concatenated in buildDBPath
// take the result of buildDBPath and pass it into the other function
  .then(_.compose(qhttp.read, buildDbPath))
  .then(_.compose(console.log, JSON.parse))
  .then(null, console.error)
  .done();


  // The official solution
    // var qhttp = require('q-io/http')
    //   , _ = require('lodash')
    //   , cachePath = "http://localhost:7000/"
    //   , dbPath = "http://localhost:7001/";
  
    // var buildDbPath = _.bind(String.prototype.concat, dbPath);
  
    // qhttp.read(cachePath)
    // .then(_.compose(qhttp.read, buildDbPath))
    // .then(_.compose(console.log, JSON.parse))
    // .then(null, console.error)
    // .done();