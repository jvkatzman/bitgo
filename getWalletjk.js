var BitGoJS = require('bitgo');
var bitgo = new BitGoJS.BitGo({ env: 'test', accessToken: process.env.ACCESS_TOKEN });

// create a wallet
var wallet;
bitgo.wallets().createWalletWithKeychains({
    passphrase: 'replaceme', label:'mywallet'
},  function(err,result) {
    wallet=result.wallet.wallet;
    console.dir(wallet);
    var userKeychain = result.userKeychain;
    var backupKeychain = result.backupKeychain;
    console.log('userKeychain')
    console.dir(userKeychain);
    console.log('\n');
    console.log('backupKeychain')
    console.dir(backupKeychain);
}

);

