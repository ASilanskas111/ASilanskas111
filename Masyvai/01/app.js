function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}








var komoda = ['obuolus', '36','dovana', 'geles', 'maikes', 'nosines'];

console.log (komoda);

// isvedam su kuriuo dirbam
komoda[3]++;

// /keiciam i ...
komoda[1] ='bananas'; 

//pridedam i gala tokiu budu(pusch komanda)
komoda.push('kumele')

//prideda i masyvao pradzia
komoda.unshift('ratas');

//ishima viena komanda is pirmo masyvo
komoda.shift();
console.log(komoda.shift());

//truskta dar vieno metodo nespejau
// pop




console.log (komoda[2]);
console.log('ilgis', komoda.length);

// cia paskutinio rezulato kodo isvedimas
console.log( 'rezultatas', komoda[komoda.length -1]);

//cia teisigiai nurododmas kuris
console.log( 'rezultatas', komoda[1]);

for (var index=0; index <komoda.length;index++){

    console.log ('nr.' +index, komoda[index]);

}






console.log ('___2021 06 02____');

console.log('________1 uzdavinys____________');

// tuscias masyvas

let masyvas = [ ];

for (let a=0; a<30; a++){
    console.log(a);
    masyvas.push(rand(5,25));
}
console.log (masyvas.slice());
console.log('____a_____');


let didesneuz10 = 0;
for (let a=0; a < masyvas.length; a++){
    console.log(masyvas[a]);

    if (masyvas [a] > 10) {
        didesneuz10++;
    }
}
console.log('didesne uz 10 /',didesneuz10 );


console.log('____b_____');


let didesne = 5;
let didesneIndex = [ ];

for (let a = 0; a < masyvas.length; a++) {
    if (masyvas[a]>didesne){
    didesne=masyvas[a];
    didesneIndex = []; //masyvo valymas
    }
    if (masyvas[a]=== didesne){
    didesneIndex.push(a);
    }
}
console.log ( didesne, didesneIndex);


console.log('____c_____');

let index_suma = 0;

for (let a = 0; a < masyvas.length; a++) {
    if (a % 2 === 0) {
    index_suma += masyvas[a] // poriniai
    }
else {
 index_suma += masyvas [a]; // neporiniai
}
    
}
console.log ( index_suma );

console.log('____d_____');

let Dmasyvas = [];
for (let a = 0; a < masyvas.length; a++){
    Dmasyvas.push ( masyvas[a] - a);
}
console.log ( Dmasyvas.slice() );

console.log('____e_____');

for (let a = 0; a <10; a++){
    Dmasyvas.push ( rand(5,25));
}
console.log ( Dmasyvas.slice() );

console.log('____f_____');

let poros = [];
let neporos = [];

for (let a = 0; a < masyvas.length; a++) {
    if (a % 2 === 0) {
        poros.push ( masyvas[a]);// poriniai
    }
else {
    neporos.push ( masyvas[a]); // neporiniai
}
    
}
console.log ('poriniai', poros );
console.log ('neporiniai', neporos );


console.log('____f_____');

for (let a = 0; a < masyvas.length; a+= 2) {
    if (masyvas[a] > 15) {
        masyvas[a] = 0;
    }
}

console.log ('a', masyvas.slice() );


console.log('____g_____');

for (let a = 0; a < masyvas.length; a+= 2) {
    if (masyvas[a] > 15) {
        masyvas[a] = 0;
    }
}

console.log ('g', masyvas.slice() );


console.log('____h_____');

for (let a = 0; a < masyvas.length; a++) {
    if (masyvas[a]>10);
}
console.log ( masyvas);

let indexh= -1;
let hh=0;

do {
if(masyvas[hh]>10){
    indexh=hh;
    }
    hh++;
}while(indexh === -1 && hh<masyvas.length);

console.log('H atsakymas', indexh);


console.log('____i_____');

for (let a = 0; a < masyvas.length; a++) {
     masyvas.splice(a,1);
}

console.log ('i', masyvas.slice());


console.log('________3 uzdavinys____________');

const abcd = ['A', 'B', 'C', 'D']
const masyvas3 = [];

for (let a= 0; a<200; a++){
    masyvas3.push(abcd[rand(0,3)]);
}

console.log ('masyvas3', masyvas3.slice());

const counter = [0, 0, 0, 0];

for(let a=0; a<masyvas3.length; a++){

counter [ abcd.indexOf(masyvas3[a])  ]++;
}

console.log (counter);
