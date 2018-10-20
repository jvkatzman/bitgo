var BitGoJS = require('bitgo');
var bitgo = new BitGoJS.BitGo({env: 'test', accessToken: process.env.ACCESS_TOKEN});

if (process.argv.length < 6) {
  console.log("usage:\n\t" + process.argv[0] + " " + process.argv[1] + " <walletId> <walletPassphrase> <destinationAddress> <amountSatoshis>");
  process.exit(-1);
}

var walletId = process.argv[2];
var walletPassphrase = process.argv[3];
var destinationAddress = process.argv[4];
var amountSatoshis = parseInt(process.argv[5], 10);

var sendBitcoin = function() {
  console.log("Getting wallet..");

  // Now get the wallet                                                                                                                                                                             
  bitgo.wallets().get({id: walletId}, function(err, wallet) {
    if (err) { console.log("Error getting wallet!"); console.dir(err); return process.exit(-1); }
    console.log("Balance is: " + (wallet.balance() / 1e8).toFixed(4));

    wallet.sendCoins({ address: destinationAddress, amount: amountSatoshis, walletPassphrase: walletPassphrase, minConfirms: 0 },
      function(err, result) {
        if (err) { console.log("Error sending coins!"); console.dir(err); return process.exit(-1); }

        console.dir(result);
        process.exit(0);
      }
    );
  });
};

sendBitcoin();

//result:

// JudyMacAirSept:testbitgo JK$ node getAddressBalance 2NGRbP73UoaKB7odwEFgrERBbAnaxpLvPPy
// Wallet balance is: 85482 Satoshis
// JudyMacAirSept:testbitgo JK$ node sendBitcoin.js 2NGRbP73UoaKB7odwEFgrERBbAnaxpLvPPy 'replaceme'  2N8pu5Fd6UHsMzTs1X3dP4DACtHywSNwLw9  5000
// Getting wallet..s
// Balance is: 0.0009
// { status: 'accepted',
//   tx: '0100000001d26a26baa6647e55e64869223c0cd6e5fd26a33fb5afaeb8a6cc5f849645687801000000fdfd0000483045022100aaeec679232b0f3ee0322dc601b7ae201a0bf160e8c1bca71e2d61d9939911e6022038365047d12edcd9802d99b83df023509dcd06d9bcba878be2656be87f9f6e7801473044022069199a96cf00e9ac4b1cb8826dd6212cb94cea2b9b57aa53f7239e8273dcad00022056a28fd323119d9abebd37c7b25dbef0b1c37694d61af29812ec1836f0c7c345014c69522102c75236d136c944b8be6be15eca76eb81360a7885805367b37d6e8a14eef0af792103f1baf5d04972a3052a274b7e429daa21bf829ef83eb9d6f459cffe96a73bf7b921026bdd443df79a352cb0e3100843fa23c5c6e94ffc815909519ad641538a3509cd53aeffffffff02127700000000000017a9143f328f2743afb3d6827b41bc736c2feb31d00dbd87881300000000000017a914aae83d961929cbe7ba83956f1f77a8d1b8c72a4f8700000000',
//   hash: '54db4fc59ee0ec4ba75d8040ea0dd144d3dfdbfd20de9aaa4ebf5c4ec05bb569',
//   instant: false,
//   instantId: undefined,
//   fee: 7259,
//   feeRate: 19459,
//   travelInfos: [] }
// JudyMacAirSept:testbitgo JK$ node getAddressBalance 2NGRbP73UoaKB7odwEFgrERBbAnaxpLvPPy
// Wallet balance is: 73223 Satoshis
// JudyMacAirSept:testbitgo JK$ node getAddressBalance 2N8pu5Fd6UHsMzTs1X3dP4DACtHywSNwLw9
// Wallet balance is: 5000 Satoshis
// JudyMacAirSept:testbitgo JK$