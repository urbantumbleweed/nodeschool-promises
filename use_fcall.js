// require the q module to have access to fcall.
var q = require('q');

// call the fcall function from the q library
// pass in JSON.parse as the first parameter,
// as the second parameter pass the object to be parsed
// because what is returned from fcall is a promise
// call then and specify what to do in the event of an error
q.fcall(JSON.parse, process.argv[2])
  .then(null, console.log);

// *************************

// Original solution using my previous work work a module.
// require the q module for promises
// // require the throw an error function from the other file
// var q = require('q'), p = require('./throw_an_error');

// return q.fcall(p);

// *************************

// Official solution


      // var q = require('q');
    
      // q.fcall(JSON.parse, process.argv[2])
      // .then(null, console.log)

