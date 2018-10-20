// 2NGRbP73UoaKB7odwEFgrERBbAnaxpLvPPy  id address with bitcoin
// 2MtgzBp6aVvHYJmuTRpcJMTBa4q1iasLy6M another address

var BitGoJS = require('bitgo');
var bitgo = new BitGoJS.BitGo({ env: 'test', accessToken: process.env.ACCESS_TOKEN });

// check wallet balance
bitgo.wallets().get({
    type:'bitcoin',
    id: '2NGRbP73UoaKB7odwEFgrERBbAnaxpLvPPy'
}, function(err,wallet){
        wallet.sendCoins({
            address: '2MtgzBp6aVvHYJmuTRpcJMTBa4q1iasLy6M',
            amount: 50000,
            walletPassphrase: 'replaceme',
            minConfirms: 0
        },
            function(err,result){
              if (err) { console.log("Error sending coins!"); console.dir(err); return process.exit(-1); }
              console.dir(result );
              process.exit(0);
            }
        )
        
    }

);

// var sendBitcoin = function() {
//   console.log("Getting wallet..");

//   // Now get the wallet                                                                                                                                                                             
//   bitgo.wallets().get({id: walletId}, function(err, wallet) {
//     if (err) { console.log("Error getting wallet!"); console.dir(err); return process.exit(-1); }
//     console.log("Balance is: " + (wallet.balance() / 1e8).toFixed(4));

//     wallet.sendCoins({ address: destinationAddress, amount: amountSatoshis, walletPassphrase: walletPassphrase, minConfirms: 0 },
//       function(err, result) {
//         if (err) { console.log("Error sending coins!"); console.dir(err); return process.exit(-1); }

//         console.dir(result);
//         process.exit(0);
//       }
//     );
//   });
// };

// sendBitcoin();


// bitgo.wallets().get({ type: 'bitcoin', id: '2NGRbP73UoaKB7odwEFgrERBbAnaxpLvPPy' }, function(err, wallet) {
//   wallet.sendCoins({ address: '595e92030ef329b3077f7e95561b13aa',
//   amount: 50000, walletPassphrase: 'replaceme', minConfirms: 0 },
//     function(err, result) {
//       console.dir(result);
//     }
//   );
// });