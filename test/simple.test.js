var fs2obj = require('../lib/');

var modules = fs2obj('./test/exampleFolder');
console.log(JSON.stringify(modules));