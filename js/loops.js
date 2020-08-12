"use strict";

// ciklai: for, while
// ir kiti: do..while, for-in, for-of, forEach, map, reduce, filter, sort

console.log('a');
console.log('a');
console.log('a');
console.log('a');
console.log('a');

console.log('---------');

for ( let i = 0; i < 5; i++ ) {
    console.log('a');
}

console.log('---------');

let skaitliukas = 0;
for ( ; skaitliukas < 5; ) {
    console.log('b');
    skaitliukas++;
}

console.log('---------');

for ( let i=0; i<5; i++ ) {
    const xyz = 7;
    console.log( `Esamos iteracijos numeris: ${i}, ${xyz}` );
}

const ttt = 'ttt';

if ( 4 > 2 ) {
    console.log( 'Kas tas?', ttt );
}

console.log( 'Kas tas?', ttt );