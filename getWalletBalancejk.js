// 2NGRbP73UoaKB7odwEFgrERBbAnaxpLvPPy  id address with bitcoin
// 595e92030ef329b3077f7e95561b13aa another address
// 2MtgzBp6aVvHYJmuTRpcJMTBa4q1iasLy6M another address

var BitGoJS = require('bitgo');
var bitgo = new BitGoJS.BitGo({ env: 'test', accessToken: process.env.ACCESS_TOKEN });

// check wallet balance
bitgo.wallets().get({
    type:'bitcoin',
    id: '2NGRbP73UoaKB7odwEFgrERBbAnaxpLvPPy'
    }, function(err,wallet){
        console.log('wallet balance: ' + wallet.balance() + ' satoshis for ' + wallet.id );
    }

);