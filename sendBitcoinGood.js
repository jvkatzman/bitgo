//
// Send money from a wallet on BitGo
// Defaults to work on BitGo test environment at https://test.bitgo.com
//
// Copyright 2014, BitGo, Inc.  All Rights Reserved.
//

var BitGoJS = require('bitgo');

// node sendBitcoin '2NGRbP73UoaKB7odwEFgrERBbAnaxpLvPPy', 'replaceme' , '2MtgzBp6aVvHYJmuTRpcJMTBa4q1iasLy6M', 90000
if (process.argv.length < 6) {
  console.log("process.argv[0] " + process.argv[0]);
  console.log("process.argv[1] "  + process.argv[1] )+
  console.log("usage:\n\t" + process.argv[0] + " " + process.argv[1] +
    " <user> <pass> <otp> <walletId> <walletPassphrase> <destinationAddress> <amountSatoshis>");

  // console.log("user: user email (on test.bitgo.com)");
  // console.log("pass: password");
  // console.log("otp: one-time password, 0000000 on test");
  console.log("walletId: wallet ID (first address on the wallet)");
  console.log("walletPassphrase: passphrase to decrypt the user key");
  console.log("destinationAddress: the bitcoin address to send coins to");
  console.log("amountSatoshis: number of satoshis to send");
  process.exit(-1);
}


// var walletId =  '2NGRbP73UoaKB7odwEFgrERBbAnaxpLvPPy'; // process.argv[5];
// var walletPassphrase = 'replaceme' ;//process.argv[6];
// var destinationAddress = '2MtgzBp6aVvHYJmuTRpcJMTBa4q1iasLy6M' ;//process.argv[7];
// var amountSatoshis =  90000 ;//parseInt(process.argv[8], 10);

var walletId =  process.argv[2];
var walletPassphrase = process.argv[3];
var destinationAddress = process.argv[4];
var amountSatoshis =  parseInt(process.argv[5], 10);


    // type:'bitcoin',
    // id: '2NGRbP73UoaKB7odwEFgrERBbAnaxpLvPPy'

    //         address: '2MtgzBp6aVvHYJmuTRpcJMTBa4q1iasLy6M',
    //         amount: 50000,
    //         walletPassphrase: 'replaceme',
    //         minConfirms: 0



var bitgo = new BitGoJS.BitGo();

var sendBitcoin = function() {
  console.log("Getting wallet..");
  // Now get the wallet
  // bitgo.wallets().get({id: walletId}, function(err, wallet) {
  bitgo.wallets().get({type: 'bitcoin', id: walletId}, function(err, wallet) {
    if (err) { console.log("Error getting wallet!"); console.dir(err); return process.exit(-1); }
    console.log("Balance is: " + (wallet.balance() / 1e8).toFixed(4));

    wallet.sendCoins({ address: destinationAddress, amount: amountSatoshis, walletPassphrase: walletPassphrase },
      function(err, result) {
        // err.message: 'Error Insufficient funds'
        if (err) { 
            console.log("Error sending coins!"); 
            console.dir('Error ' + err.message); 
            console.dir('result ' + err.result.fee); 

            console.dir(err); return process.exit(-1); 
        }
        console.dir(result);
        process.exit(0);
      }
    );
  });
};


// // Authenticate first

var bitgo = new BitGoJS.BitGo({env: 'test', accessToken: process.env.ACCESS_TOKEN});
bitgo.session({}, function callback(err, session) {
  if (err) { console.dir(err); throw new Error("Could not authenticate!"); }
  console.log("Unlocking account.." );
  bitgo.session({}, function(err) {
  if (err) { console.dir(err); throw new Error("Could not unlock!"); }
  sendBitcoin();
  });
});
