
const bitPayModule = require('./bitGotigoCTM');

const myModule = require('./getit');
let val = myModule.hello(); // val is "Hello" 
console.dir (val);


var BitGoJS = require('bitgo');
var bitgo = new BitGoJS.BitGo({env: 'test', accessToken: process.env.ACCESS_TOKEN});
var wallets = bitgo.wallets();


var data = {
"type": "bitcoin",
"id": "2N8pu5Fd6UHsMzTs1X3dP4DACtHywSNwLw9",
};

console.dir('one');

//bad 2MwFMYs1Z3FDBc72qLQh4iqMnQQSwgrBwkz
//good 2N8pu5Fd6UHsMzTs1X3dP4DACtHywSNwLw9

var balance = bitPayModule.getWalletBalance(bitgo,wallets,data);
console.log('balance is ' + balance);
// if (balance == undefined){
//     console.dir('not valid wallet')
// }else{
// console.dir('the balace is ' + balance);
// }