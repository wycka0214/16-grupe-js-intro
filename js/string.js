"use strict";

function isrinktiRaides( text, step ) {
    // input validation
    if ( typeof text !== 'string' ) {
      return console.error('Pirmasis kintamasis yra netinkamo tipo.');
    }
    if ( step === 0 ) {
      return console.error('Antrasis kintamasis turi būti didesnis už nulį.');
    }
    if ( text.length < step ) {
      return console.error('Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.');
    }

    let result = '';
    const size = text.length;

    if ( step > 0 ) {
      for ( let i=step-1; i<size; i=i+step ) {
        result += text[i];
      }
    } else {
      for ( let i=size+step; i>=0; i=i+step ) {
        result += text[i];
      }
    }

    // for ( let i=0; i<size; i++ ) {
    //     if ( i % step === step - 1 ) {
    //         result += text[i];
    //     }
    // }

    return result;
}

console.log( isrinktiRaides( 1561, 2 ) );
console.log( isrinktiRaides( 'abc', 0 ) );
console.log( isrinktiRaides( 'abc', 4 ) );

console.log( isrinktiRaides( 'abcdefg', 1 ), '->', 'abcdefg' );
console.log( isrinktiRaides( 'abcdefg', 2 ), '->', 'bdf' );
console.log( isrinktiRaides( 'abcdefghijkl', 3 ), '->', 'cfil' );
console.log( isrinktiRaides( 'abcdefghijkl', -3 ), '->', 'jgda' );
console.log( isrinktiRaides( 'abcdefg', -2 ), '->', 'fdb' );



/*
_______
abcdefg         1       abcdefg

 _ _ _
abcdefg         2       bdf

  _  _
abcdefg         3       cf

   _   
abcdefg         4       d

isrinkti: 2
1 "b" +         i % step = 1
3 "d" +         i % step = 1
5 "f" +         i % step = 1

isrinkti: 3
2 "c" +         i % step = 2
5 "f" +         i % step = 2
8 "i" +         i % step = 2
11 "l"  +       i % step = 2

i % step = step - 1

*/