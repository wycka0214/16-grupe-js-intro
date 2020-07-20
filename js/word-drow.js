"use strict";

const text = 'abcdef';
let backwards = '';             // fedcba

// for ( let i=0; i<6; i++ ) {
//     console.log( i, '->', text[5-i] );
// }

// for ( let i=-5; i<=0; i++ ) {
//     console.log( i, '->', text[i * -1] );
// }

for ( let i=5; i>=0; i-- ) {
    console.log( i, '->', text[i] );
    backwards += text[i];
}

console.log( text, '<->', backwards );