// require the q library
// construct a Q object that contains a promise
var q = require('q'), defer = q.defer();

// create the attachTitle function
function attachTitle(name) {
  return "DR. " + name;
};

defer.promise
  .then(attachTitle)
  .then(console.log);
  
defer.resolve("MANHATTAN");

// official solution
      // var q = require('q')
      //   , def = q.defer();
    
      // function attachTitle (name) {
      //   return "DR. " + name;
      // }
    
      // def.promise
      // .then(attachTitle)
      // .then(console.log);
    
      // def.resolve("MANHATTAN");

