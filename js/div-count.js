"use strict";

const from = 0;
const until = 11;
const divider = 7;
let count = 0;

// logic
for ( let i=from; i<=until; i++ ) {
    // jeigu dalybos rezultatas neturi liekanos
    if ( i % divider === 0 ) {
        count++;
    }

    // if ( Number.isInteger( i/divider ) ) {
    //     count++;
    // }
}


console.log( `Skaičių intervale tarp ${from} ir ${until}, besidalijančių be liekanos iš ${divider} yra ${count} vienetai.` );