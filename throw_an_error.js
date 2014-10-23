// require the q library
var q = require('q');

function parsePromised(obj) {
  // create a promise
  var defer = q.defer();
  // perform JSON.parse in try/catch
  try {
    defer.resolve(JSON.parse(obj));
  } catch (err) {
    defer.reject(err);
  }
  // resolve or reject promise, based on try/catch
  return defer.promise;
};

parsePromised(process.argv[2])
  .then(null, console.log);

module.exports.parsePromised = parsePromised;

// // My original solution
// // require the q library
// var q = require('q');

// function parsePromised(obj) {
//   // create a promise
//   var defer = q.defer();
//   // perform JSON.parse in try/catch
//   try {
//     defer.resolve(JSON.parse(obj));
//   } catch (err) {
//     console.log(err);
//   }
//   // resolve or reject promise, based on try/catch
// };

// parsePromised(process.argv[2]);

// ***********************

// the oficial solution
      // var q = require('q');
    
      // function parsePromised (json) {
      //   var def = q.defer()
      //     , result;
    
      //   try {
      //     result = JSON.parse(json); 
      //   } catch (e) {
      //     def.reject(e); 
      //   }
    
      //   def.resolve(result);
      //   return def.promise;
      // };
    
      // parsePromised(process.argv[2])
      // .then(null, console.log)

