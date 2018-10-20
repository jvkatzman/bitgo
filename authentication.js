var BitGoJS = require('bitgo');


// use:  node authentication.js $ACCESS_TOKEN


if (process.argv.length < 3) {
  console.log("usage:\n\t" + process.argv[0] + " " + process.argv[1] + " <accessToken>");
  process.exit(-1);
}

// For Testnet environment set env to test
// For Livenet environment set env to prod
// in console test: echo $ACCESS_TOKEN
// in console test: node authentication.js $ACCESS_TOKEN

var accessToken = process.argv[2];
var bitgo = new BitGoJS.BitGo({env: 'test', accessToken: accessToken});
console.log("BitGoJS library version: " + bitgo.version());
bitgo.session({})
.then(function(res) {
  console.log(res);
})
.catch(function(err) {
  console.log(err);
});

