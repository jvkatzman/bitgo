// 2NGRbP73UoaKB7odwEFgrERBbAnaxpLvPPy  id address with bitcoin
// 2MtgzBp6aVvHYJmuTRpcJMTBa4q1iasLy6M another address

// use:  node getAddressBalance.js ADDRESS

// get  Biggo modules 

// var BitGoJS = require('bitgo');
// var bitgo = new BitGoJS.BitGo({env: 'test', accessToken: process.env.ACCESS_TOKEN});


exports.hello = function() {
  return "Hello";
}


// exports.getWalletBalance = function(bitgo,wallets, data) {

 exports.getWalletBalance = function(bitgo,wallets, data) {
     balance = getWalletBalance2 (bitgo,wallets, data) ;
     console.log('from export '  + balance);
     return balance;
     
 }

function getWalletBalance2 (bitgo,wallets, data) {
    wallets.get(data, function callback(err, wallet) {
        if (err) {
            return 'error';
            // handle error
        }
        console.dir('wallet balance from fct is ' + wallet.balance());
        return  wallet.balance();
    }); 
}

function getUserFriends(userName, next) {
    db.users.findOne({name:userName}, foundOne);

    function foundOne(err, user) {
        if (err != null) return next(err);
        db.friends.find({userId:user.id}, foundFriends);
    }

    function foundFriends(err, friends) {
        if (err != null) return next(err);
        return next(null, friends);
    }
}

// exports.getWalletBalance = function(bitgo,wallets, data) {

//     wallets.get(data, function callback(err, wallet) {
//         if (err) {
//             return 'error';
//             // handle error
//         }
//         // Use wallet object here
//         //console.dir(wallet);
//         console.dir('wallet balance from fct is ' + wallet.balance());
//         return  666 //wallet.balance();
//     }); 
// }

