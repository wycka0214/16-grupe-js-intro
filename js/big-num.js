"use strict";

function bigNum( numberList ) {
    // input validation
    if ( !Array.isArray( numberList ) ) {
        return 'Pateikta netinkamo tipo reikšmė.'
    }
    if ( numberList.length === 0 ) {
        return 'Pateiktas sąrašas negali būti tuščias.';
    }

    const size = numberList.length;
    let big = -Infinity;

    for ( let i=1; i<size; i++ ) {
        const number = numberList[i];
        if ( typeof number !== 'number' ) {
            continue;
        }
        if ( number > big ) {
            big = number;
        }
    }

    if ( big === -Infinity ) {
        return 'Sarase nebuvo nei vieno normalaus skaiciaus... 😥';
    }
    
    return big;
}

console.log( bigNum( 'pomidoras' ) );
console.log( bigNum( [] ) );
console.log( bigNum( {} ) );
console.log( bigNum( 35131 ) );
console.log( bigNum( [ 'asfd', 'asd', true, {} ] ) );

console.log( bigNum( [ 1 ] ), '->', 1 );
console.log( bigNum( [ 1, 2, 3 ] ), '->', 3 );
console.log( bigNum( [ -5, 78, 14, 0, 18 ] ), '->', 78 );
console.log( bigNum( [ 69, 69, 69, 69, 66 ] ), '->', 69 );
console.log( bigNum( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ), '->', -1 );
console.log( bigNum( [ -5, 78, 'asfd', 14, 0, 18 ] ), '->', 78 );
console.log( bigNum( [ -5, 78, 14, 0, 18, 'asfd' ] ), '->', 78 );
console.log( bigNum( [ 'asfd', -5, 78, 14, 0, 18 ] ), '->', 78 );

console.log('-----------');
console.log('extra - reikia rekursijos, kad rasti 87878');
console.log( bigNum( [ 'asfd', -5, true, false, [7, 9], [1, 2, [8, 99, [87878, -22]]], {} ] ), '->', -5 );