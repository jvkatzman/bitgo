console.dir('Error ' + err.message); 
console.dir('result ' + err.result.fee); 


insufficient funds

JudyMacAirSept:testbitgo JK$ node sendBitcoin2
BitGo SDK env not set - defaulting to testnet at test.bitgo.com.
one
Unlocking account..
Getting wallet..
Balance is: 0.0002
Error sending coins!
{ Error: Insufficient funds
    at /Users/JK/node_modules/bitgo/src/transactionBuilder.js:451:19
    at _fulfilled (/Users/JK/node_modules/q/q.js:794:54)
    at self.promiseDispatch.done (/Users/JK/node_modules/q/q.js:823:30)
    at Promise.promise.promiseDispatch (/Users/JK/node_modules/q/q.js:756:13)
    at /Users/JK/node_modules/q/q.js:564:44
    at flush (/Users/JK/node_modules/q/q.js:110:17)
    at _combinedTickCallback (internal/process/next_tick.js:67:7)
    at process._tickCallback (internal/process/next_tick.js:98:9)
  result: 
   { fee: 3102,
     feeRate: 8316,
     estimatedSize: 373,
     available: 17673,
     bitgoFee: undefined,
     txInfo: { nP2SHInputs: 1, nP2PKHInputs: 0, nOutputs: 2 } } }


accepted:
console.dir("result.status " + result.status); 'result.status accepted'

JudyMacAirSept:testbitgo JK$ node sendBitcoin2
BitGo SDK env not set - defaulting to testnet at test.bitgo.com.
one
Unlocking account..
Getting wallet..
Balance is: 0.0002
{ status: 'accepted',
  tx: '0100000001db4032b7b709178d62d9ea2b57ec970e734f991168f46b2f2389295f68c9d7e701000000fdfd0000483045022100f89f3ffe9a9d426de2b6f81ad47c7af0e5146058323f46a983bc2cf9381e1adb0220183dc8443e2cbf19d5d5eec8aacf4185af685b2d13f7a63ad47da960382f33ec0147304402201b2bfc11049ff4d5dd3863d94c4e3acd747332b26ba578316659dec4e2ff3b1002207bd437c146465062090b2d6fa8afb0081475b1dcb3650e35dd50282156fd9675014c6952210372242b8d6021347a5bd1eccfe8e63cecae8c64f635b43cb6ebdab47865d374bd2103ebc5576a571eaa7bfadc19206ef390c166328f6600bfc8e1de05a45be607bda52102aae635f6e7fab609443958c5b505670e2bb28c67fda2809b4b4aead42b9dd5b653aeffffffff02102700000000000017a9140fd76b8c1c15a47170bbac679f8f13242126ac9e87db1100000000000017a914864cfb65c7f561bfdb2064c93d4679c39338c8568700000000',
  hash: 'd6171b402b7bd6076987772e1d6176ecf57c3e8c1133f806fd2a753aab36b407',
  instant: false,
  instantId: undefined,
  fee: 3102,
  feeRate: 8316,
  travelInfos: [] }

