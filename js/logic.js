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

console.log('===================');
console.log('===================');
console.log('===================');

const book1 = 150;
const book2 = 3000;

if ( book1 > book2 ) {
    console.log( 'Book1 didesne' );
} else {
    console.log( 'Book2 didesne' );
}

const biggerBook = book1 > book2 ? 'Book1' : 'Book2';

console.log( `Didesne knyga yra ${biggerBook}.` );


const t1 = 'Viengubos "yra" kabutes';
const t2 = "Dvygubos 'yra' kabutes";
const combo = `asda "ldsfkla" \`jdflkjaslkd\` 'fas' dkf`;

const div = '<div>\
                <img src="#" alt="' + biggerBook + '">\
            </div>';

const div2 = `<div>
                <img src="#" alt="${biggerBook}">
            </div>`;

console.log(t1);
console.log(t2);
console.log(combo);