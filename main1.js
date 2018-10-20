var BitGoJS = require('bitgo');
var bitgo = new BitGoJS.BitGo({env: 'test', accessToken: process.env.ACCESS_TOKEN});

var wallets = bitgo.wallets();
var data = {
  "type": "bitcoin",
  "id": "2N8pu5Fd6UHsMzTs1X3dP4DACtHywSNwLw9",
};

var jjj;

test(data);
function test(data) {
jjj = bitgo.wallets().get(data, function(err, wallet) {
            if (err) { console.log(err); process.exit(-1); }
            balance = wallet.balance();
            console.log('Wallet balance is: ' + wallet.balance() + ' Satoshis');
            return wallet.balance();
            // jjj = wallet.balance();
        });

console.log('jjj ' + jjj);
}

// console.log('wallet.balance() ' + wallet.balance());


// var results = getwalletBalance(data);
// console.log('results ' + results)
// console.log('the balance is  ' + balance)

// var balance;




// function getwalletBalance (data){
//             bitgo.wallets().get(data, function(err, wallet) {
//             if (err) { console.log(err); process.exit(-1); }
//             balance = wallet.balance();
//             console.log('Wallet balance is: ');
//             console.log(wallet.balance() + ' Satoshis');
//             // return balance();
//             });
//     //balance = wallet.balance()
//     console.dir(balance);
//     return balance;
//     //console.dir(wallet);
   
// } ;  


// function getwalletBalance (data){
//     wallets.get(data, function callback(err, wallet) {
//     if (err) {
//         // handle error
//     }
//     balance = wallet.balance()
//     console.dir(balance);
//     return balance;
//     //console.dir(wallet);
//     });
// } ;  

function myFunction(a,b) {
    return a*b;
};



// wallets.get(data, function callback(err, wallet) {
//   if (err) {
//     // handle error
//   }
//   console.dir(wallet.balance());
//   //console.dir(wallet);
// });





// const bitPayModule = require('./bitGotigoCTM');

// const myModule = require('./getit');
// let val = myModule.hello(); // val is "Hello" 
// console.dir (val);


// var BitGoJS = require('bitgo');
// var bitgo = new BitGoJS.BitGo({env: 'test', accessToken: process.env.ACCESS_TOKEN});
// var wallets = bitgo.wallets();


// var data = {
// "type": "bitcoin",
// "id": "2N8pu5Fd6UHsMzTs1X3dP4DACtHywSNwLw9",
// };

// console.dir('one');

// //bad 2MwFMYs1Z3FDBc72qLQh4iqMnQQSwgrBwkz
// //good 2N8pu5Fd6UHsMzTs1X3dP4DACtHywSNwLw9

// var balance2;

// var balance = getWalletBalance(bitgo,wallets,data);
// console.log('balance is ' + balance);
// console.log('balance2 is ' + balance2);


//  function getWalletBalance(bitgo,wallets, data) {
//      balance = wallets.get (bitgo,wallets, data) ;
//      console.log('from export '  + balance);
//      return balance;
     
//  }

// // function getWalletBalance (bitgo,wallets, data) {
// //     wallets.get(data, function callback(err, wallet) {
// //         if (err) {
// //             return 'error';
// //             // handle error
// //         }
// //         // console.dir('wallet balance from fct is ' + wallet.balance());
// //         balance2 = wallet.balance();
// //         return  wallet.balance();
// //     }); 
// // }

// function getUserFriends(userName, next) {
//     db.users.findOne({name:userName}, foundOne);

//     function foundOne(err, user) {
//         if (err != null) return next(err);
//         db.friends.find({userId:user.id}, foundFriends);
//     }

//     function foundFriends(err, friends) {
//         if (err != null) return next(err);
//         return next(null, friends);
//     }
// }



