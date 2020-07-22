"use strict";

const from = 0;
const until = 11;
const divider = 7;
let count = 0;

// logic
for ( let i=from; i<=until; i++ ) {
    if ( i % divider === 0 ) {
        count++;
    }
}


console.log( `Skaičių intervale tarp ${from} ir ${until}, besidalijančių be liekanos iš ${divider} yra ${count} vienetai.` );


const from2 = 8;
const until2 = 31;
const divider2 = 3;
let count2 = 0;

// logic
for ( let i=from2; i<=until2; i++ ) {
    if ( i % divider2 === 0 ) {
        count2++;
    }
}


console.log( `Skaičių intervale tarp ${from2} ir ${until2}, besidalijančių be liekanos iš ${divider2} yra ${count2} vienetai.` );