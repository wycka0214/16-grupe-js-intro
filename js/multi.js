"use strict";

function daugyba( num1, num2 ) {
    console.log( num1 );
    console.log( num2 );
    return num1 * num2;
}

const skaicius1 = 7;
const skaicius2 = 3;

console.log( daugyba( skaicius1, skaicius2 ) );
console.log('-----------');
console.log( daugyba( skaicius2, skaicius1 ) );
console.log('-----------');
console.log( daugyba( 8, 5 ) );