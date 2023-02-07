// const object = {
//     "p1": 1,
//     "p2": 2,
//     "p3": 3,
//     "p4": {
//         "p5": 4
//     },
// }

// console.log(object);
// var size = Object.keys(object).length;
// console.log(size);

// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)
    
//       myResolve(); // when successful
//       myReject();  // when error
//     });
    
//     // "Consuming Code" (Must wait for a fulfilled Promise)
//     myPromise.then(
//       function(value) { /* code if successful */ },
//       function(error) { /* code if some error */ }
//     );

// console.log((fetch('portal.tycoonstats.com/api/demo')));

async function abc() {
    const data = await fetch('https://portal.tycoonstats.com/api/demo')
    console.log(data.text())
}

abc();