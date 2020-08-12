"use strict";

function skaitmenuKiekisSkaiciuje( number ) {
    // input validation
    if ( typeof number !== 'number' ) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    if ( isNaN(number) ) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }

    let count = 0;
    const text = '' + number;

    // logic
    count = text.length;

    // jeigu skaicius yra neigiamas
    if ( number < 0 ) {
        count--;
    }

    // jei skaicius nera sveikasis (t.y. turi desimtaine dali)
    if ( number % 1 !== 0 ) {
        count--;
    }

    return count;
}

console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( false ) );
console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );

console.log( skaitmenuKiekisSkaiciuje( 5 ), '->', 1 );
console.log( skaitmenuKiekisSkaiciuje( 781 ), '->', 3 );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ), '->', 11 );
console.log( skaitmenuKiekisSkaiciuje( -781 ), '->', 3 );
console.log( skaitmenuKiekisSkaiciuje( 5.55 ), '->', 3 );
console.log( skaitmenuKiekisSkaiciuje( -3.14 ), '->', 3 );

console.log('------------');
console.log('dar klaidingai skaiciuoja (extra)');
console.log( skaitmenuKiekisSkaiciuje( 100000000000000000000000000000000000000 ), '->', 3 );
console.log( skaitmenuKiekisSkaiciuje( 1e-34 ), '->', 3 );