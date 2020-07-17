"use strict";
// if, switch, ternary operator

const eyes = 'asdfds';

// if () {}
// if () {} else {}
// if () {} else if () {} ... else if () {}
// if () {} else if () {} ... else if () {} else {}

// if ( eyes === 'melyna' ) {
//     console.log( 'Akys kaip jura 😍' );
// } else if ( eyes === 'zalia' ) {
//     console.log( 'Zaliaakiai melagiai... 😑' );
// } else if ( eyes === 'ruda' ) {
//     console.log( 'Uch kokie tie rudaakiai... 😉' );
// } else {
//     console.log( 'Ar tokia spalva tikrai egzistuoja??? 🤔' );
// }

if ( eyes === 'melyna' ) {
    console.log( 'Akys kaip jura 😍' );
} else {
    if ( eyes === 'zalia' ) {
        console.log( 'Zaliaakiai melagiai... 😑' );
    } else {
        if ( eyes === 'ruda' ) {
            console.log( 'Uch kokie tie rudaakiai... 😉' );
        } else {
            console.log( 'Ar tokia spalva tikrai egzistuoja??? 🤔' );
        }
    }
}


const income = 500;
let moneyAfterTaxes = 0;

if ( income > 300 ) {
    if ( income > 1000 ) {
        moneyAfterTaxes = income * 0.75;
    } else {
        moneyAfterTaxes = income * 0.85;
    }
} else {
    moneyAfterTaxes = income;
}

console.log( moneyAfterTaxes );



const stop = 'Vilnius';

switch ( stop ) {
    case 'Vilnius':
        console.log('Vilnius');

    case 'Kaunas':
        console.log('Kaunas');

    case 'Klaipeda':
        console.log('Klaipeda');
        break;

    case 'Siauliai':
        console.log('Siauliai');

    case 'Panevezys':
        console.log('Panevezys');
    
    case 'Vilnius':
        console.log('Vilnius');
        break;

    default:
        console.log('Toks miestas nerastas');
        break;
}


const day = 'Treciadienis';

switch ( day ) {
    case 'Pirmadienis':
    case 'Antradienis':
    case 'Treciadienis':
    case 'Ketvirtadienis':
    case 'Penktadienis':
        console.log( day + ' yra darbo diena!!!' );
        break;

    case 'Sestadienis':
    case 'Sekmadienis':
        console.log( day + ' yra savaitgalis!!!' );
        break;

    default:
        console.log('Tokia diena neegzistuoja :(');
        break;
}

console.log('===================');
console.log('===================');
console.log('===================');

// IF palyginimo operatoriai:
// rekomenduotina naudoti: >, <, >=, <=, ===, !==
// nerekomenduotina: ==, !=

if ( '1999' === 1999 ) {
    console.log('tiesa');
} else {
    console.log('melas');
}


