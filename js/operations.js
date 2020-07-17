"use strict";

const a = 5;
const b = 7;
const c = 9;
const d = 11;
const e = 13;

const sum = a + b - c * d / e;

console.log( sum );

const good = 'Good';
const morning = 'morning';
const name = 'Vardenis';

const greating = good + ' ' + morning + '!';

console.log( greating );

console.log( name + ' age is ' + e );
// console.log( 'Vardenis' + ' age is ' + e );
// console.log( 'Vardenis' + ' age is ' + 13 );
// console.log( 'Vardenis age is ' + 13 );
// console.log( 'Vardenis age is ' + '13' );
// console.log( 'Vardenis age is 13' );

const marks = [1, 5, 9, 10, 8, 4];

console.log( marks );
console.log( marks + 7 );
console.log( 'Pazymiai: ' + marks );


const marksSum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4] + marks[5] + marks[300];
console.log( marksSum );
console.log( marks[300] );

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log( abc[0] + abc[1] + abc[2] + abc[3] + abc[4] + abc[5] + abc[6] + Infinity );


console.log( '1' + 2 * 3 );


// const marks = [1, 5, 9, 10, 8];

console.log( marks[0] - marks[1] + marks[2] - marks[3] + marks[4] );


const atoms = ['Hidrogen', 'Helium', 'Lithium'];
const cm = ', ';

console.log( atoms[2] + cm + atoms[1] + cm + atoms[0] );


// naujo nario itraukimas i sarasa

const playlist = [];
console.log( 'Favorite musicians: ', playlist );

playlist.push( 'Bob Dilan' );
console.log( 'Favorite musicians: ', playlist );

playlist.push( 'Bob Dilan' );
console.log( 'Favorite musicians: ', playlist );

// playlist = ['ZZ top'];
// console.log( 'Favorite musicians: ', playlist );




// let pirmas = 99;
// console.log(pirmas);

// let antras = pirmas;
// console.log(antras);

// pirmas = 87;
// console.log(pirmas);

// console.log( antras );




let spinta = [150, 220, 40];
console.log( 'spinta', spinta );

let komoda = spinta;
console.log( 'komoda', komoda );

spinta.push('surprise');
console.log( 'spinta', spinta );

console.log( 'komoda', komoda );

komoda.push( ['a', 'b'] )

console.log( spinta );
console.log( komoda );

console.log( komoda[4][1] );
console.log( spinta[4][0] );