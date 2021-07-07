
console.log ('map 2021 06 28');


const setas = new Set ();

setas.add('grybas');
setas.add('agurkas');
setas.add('pupele (ansktine)');

console.log (setas);

//surusiuoti seta

const rusiavimas = [...setas]; // galima ir cia deti per taska /sort ();
setas.clear();
rusiavimas.sort();
rusiavimas.forEach(v => setas.add(v));
console.log('1 uzduotis', setas);


// setą įrašyti į localstorage, tada 
let tmp2 = [...setas];
tmp2 = JSON.stringify (tmp2);
localStorage.setItem ('manoSetas', tmp2);


// nuskaityti į setasCopy kintamąjį

let tmp3 = localStorage.getItem('manoSetas');
tmp3 = JSON.parse(tmp3);

const setasBack = new Set (tmp3);
console.log ('setasback:', setasBack);


console.log ('3 uzduotis');

// reikai kad masyvas hard butu surusiuoti, taip kad setas 
// kuris daugiausiai skaicius butu pirmas

const hard = [

    new Set([2,8,7]),

    new Set([2,0,7,8,7]),

    new Set([2,8,0,7,1,9]),

    new Set([2,8,7,0])

];

hard.sort((a,b) => b.size - a.size);
console.log('ats:3uzd', hard);


console.log ('4 uzduotis');

// padaryti kad, masyvai eina pirmi, tada eina setai

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

console.log (hard instanceof Array);

console.log (setas instanceof Set);

const easy = [

    [1,8],

    new Set([7, 9]),

    new Set(),

    [1,8,7],

    new Set([7, 9, 11]),

    [],

    new Set([7, 9, 71, 11, 45]),

];

easy.sort (( a, b) => a instanceof Array ? -1 : 0); // trumpas variantas
console.log('trumpas ats 4', easy);
// kitas ilgas variantas

easy.sort (( a, b) => {
    if (b instanceof Array === a instanceof Array ||
        b instanceof Set === a instanceof Set){
                return 0;
    }
    else if (b instanceof Array){
        return 1;
    }
    else if (b instanceof Set){
        return -1;
    }
});


console.log('ats:4uzd', easy);


console.log ('5 uzduotis');
// 5. masyve easy palikti tik setus

const filterEasy = easy.filter ( v => v instanceof Set ? 1: 0);
console.log ('5 uzduotis', filterEasy);


console.log (' --- MAP duomenu struktura, rinkinys');
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map


// // const map = new Map ();

// map.set ('stalcius', 'kas guli stalciuje');
// map.set ('litas stalciu', 'kas guli  kitame stalciuje');
// map.set ('mano stalcius', 'kas guli mano stalciuje');

//  paieska gali buti vykdoma tik pagal pirma 'xxxxx', 

// console.log (map, map.has ('mano stalcius'), map.get ('mano stalcius'));

// pirmas elemntas const val
// for (const val of map){
//     console.log ('valas', val[0]);
// }


const map = new Map();
map.set('Petras', 'kas guli Petro stalčiuje');
map.set('Šarikas', 'kas guli Šariko būdoje');
map.set('Janotas', 'ką šiukšlių dėžėjė rado Janotas');

for (const val of map) {
    console.log (val [0])
};


// isrusiuoti MAP
const rusiavimas3 = [...map].sort ((a, b) => a[0] < b[0] ? -1 : 0);
map.clear();
rusiavimas3.forEach (v => map.set(v[0], v[1]));
console.log('rusiaviomas', map);


// surusiuoti pagal trecia raide 

const rusiavimas4 = [...map].sort ((a, b) => a[0][4] < b[0][4] ? -1 : 0);
map.clear();
rusiavimas4.forEach (v => map.set(v[0], v[1]));
console.log('rusiavimas 3raide', map);


// MAP įrašyti į localstorage, tada atgal
let loc = [...map];
loc = JSON.stringify (loc);
localStorage.setItem ('MAPAS', loc);


let loc2 = localStorage.getItem('MAPAS');
loc2 = JSON.parse(loc2);

const atgal = new Set (loc2);
console.log ('atgal MAPAS:', loc2);



//sudėlioti tokia tvarka masyvai, mapai, setai

const notSoEasy = [
    [1,8],
    new Set([7, 9]),
    new Set(),
    new Map([['a',2], ['b',2], ['c',2]]),
    [1,8,7],
    new Set([7, 9, 11]),
    [],
    new Set([7, 9, 71, 11, 45]),
    new Map([['a',2], ['c',2]]),
];


notSoEasy.sort (( a, b) => {
    if (a.constructor.name === b.constructor.name){
                return 0;
        }

    if( a instanceof Array){
        return -1;
        }
    if( a instanceof Map){
        if (b instanceof Array){
            return 1;
        }
        if (b instanceof Set){
            return -1;
        }
    }
    if (a instanceof Set){
        return 1;
        }
    
});

console.log (notSoEasy);


//isrusiuoti dveim budais < 1 nr. sort>

const m1 = ['z', 's', 'a', 'd'];

const r = m1.slice();
r.sort();
console.log ('1 nr.', r);

// https://stackoverflow.com/questions/3978492/fastest-way-to-duplicate-an-array-in-javascript-slice-vs-for-loop



//isrusiuoti < 2 nr. sort + callback>
const rur = m1.slice();
rur.sort ((a , b) => a < b ? -1 : 0);
console.log ('2 nr.', rur )

//isrusiuoti < 3 nr. sort + callback + desc(atvirksciai)>

const rur2 = m1.slice();
rur2.sort ((a , b) => a > b ? -1 : 0);
console.log ('3 nr.', rur2 );


// 4 nr. Padaryti kad 2 rūšiavimas įvyktų paspaudus mygtuką.
        document.querySelector ('#c'). addEventListener ('click', () =>{
        const rur3 = m1.slice();
        rur3.sort ((a , b) => a < b ? -1 : 0);
        console.log ('4 nr.', rur3);
});

console.log ('4 nr. su knopke ASC padarytas');

// 5 nr. Padaryti kad 3 rūšiavimas įvyktų paspaudus mygtuką.

document.querySelector ('#c'). addEventListener ('click', () =>{
    const rur4 = m1.slice();
    rur4.sort ((a , b) => a > b ? -1 : 0);
    console.log ('5 nr.', rur4);
});
console.log ('5 nr. su knopke ASC padarytas ');


const m2 = [

    ['zru', 'six'],

    ['rot', 'dzi'],

    ['uxm', 'ycw'],

    ['otr', 'sth']

];
console.log ('M2', m2);
// 6. pagal masyvo antrą elementą ASC (didejimo)



console.log ('6 nr.');



// 7 pagal masyvo pirmą elementą DESC (mazejimo)



console.log ('7 nr.');


// 8 pagal masyvo antro elemento antrą simbolį ASC
const rur8 = m2.slice();
rur8.sort((a, b) => a[1] [1] < b [1] [1] ? -1 : 1);

console.log ('8 nr.',rur8);




// 9 pagal masyvo pirmo elemento trčią simbolį DESC



console.log ('9 nr.');


const m3 = [

    new Map([['dog', 5], ['cat', 7], ['snake', 58]]),

    new Map([['snake', 33], ['dog', 14], ['cat', 8]]),

    new Map([['dog', 51], ['cat', 77], ['snake', 23]]),

    new Map([['cat', 10], ['dog', 23], ['snake', 17]])

];

// 10. pagal katę DESC

const rur10 = m3.slice();
rur10.sort ((a , b) => a.get ('cat')> b.get ('cat') ? -1 : 0);

console.log ('10 nr.', rur10);


// 11 pagal šunį ASC

const rur11 = m3.slice();
rur11.sort ((a , b) => a.get ('dog') < b.get ('dog') ? -1 : 0);

console.log ('11 nr.', rur11);



// 12 pagal gyvatės iš šuns sumą DESC

const rur12 = m3.slice();
rur12.sort ((a , b) => a.get ('snake') + a.get ('dog') > b.get ('snake') + b.get ('dog') ? -1 : 0);

console.log ('12 nr.', rur11);



const m4 = [

    [2,5,8,9,7,4,5,2,1,5,8,9,3],

    [3,6,9,8,5,4],

    [2,5,4,7,9,5,4,1,2,3,6,9,8,4,7],

    [5,2,1,4,7,8,5,3,1]

];

// 12.a pagal masyvų ilgį
m4.sort((a,b) => a.length - b.length);
console.log ('12.a nr.', m4);



// 13 pagal masyvų elementų sumą


const rur13 = m4.slice();
rur13.sort((a, b) => {

let aSum = 0;
a.forEach(v => aSum += v);
let bSum = 0;
b.forEach(v => bSum += v);
return aSum - bSum;

})

console.log ('13 nr.', rur13);


const m5 = [4,5,6,9,45,4,7,8,5,2,4,8,2,1,3,32,41,85,6,8,5,6,78,11,6,8,];
console.log ('14 nr.', m5);

// 14 su filter ištrinti skaičius didesnius nei 7

const rur14= m5.filter (v => v <= 7)


console.log ('14 nr.', rur14);

// 15 su filter iš m3 masyvo su mapais ištrinti tuos mapus,
// kuriuose šuo mažiau nei 10

const rur15= m3.filter (v => v.get ('dog') > 10)


console.log ('15 nr.',  rur15);
