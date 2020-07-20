"use strict";

// 0 - 4        = 10
// -50 - 50     = 0
// 0 - 100      = 5050
// 0 - 1000000  = 500000500000
// 0 - 0        = 0
// 8 - 8        = 8
// 574 - 815    = 168069
// -70 - 30     = -2020

const from = 0;
const until = 4;
let sum = 0;

for ( let i=from; i<=until; i++ ) {
    // sum = sum + i;
    sum += i;
    // console.log( i, sum );
}

console.log( `Suma yra ${sum}` );