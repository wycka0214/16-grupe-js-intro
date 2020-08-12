"use strict";

function kainaSuPVM( kaina, PVM ) {
    console.log( kaina+'Eur', PVM+'%' );
    
    return kaina * ( 100 + PVM ) / 100;
}

console.log( kainaSuPVM( 100, 21 ) );
console.log( kainaSuPVM( 50, 21 ) );
console.log( kainaSuPVM( 1000, 10 ) );