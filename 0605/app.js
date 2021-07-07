function zebras(long, fill, kis)
{
    const masyvas = [];
    for(let i = 0; i < long; i++){
        masyvas.push(fill);
        masyvas.push(kis);
    }
    return masyvas;
}


let A = 5;
let B = 6;
let C = 7;


let AA = zebras(5, 'Trius', 'kiskis');
console.log(AA);
let BB = zebras(B, 'Zebrs');
console.log(BB);
let CC = zebras(C, 'Bebrs');
console.log(CC);


//__________________ funkcijos_______________________


console.log('_____1 uzduotis__________');
//Parašyti dvi funkcijas be parametrų red() ir green(). 
//Funkcijos turi grąžinti atitinkamus stringus “red” ir “green”. 
//Pademostruoti veikimą;

function red() {
    let spalva='red';
    return spalva;

}
console.log (red());

function green() {
    let spalva='green';
    return spalva;

}
console.log (green());


console.log('_____2 uzduotis__________');
// Parašyti funkciją color(what). 
// Funkcija turi grąžinti splvą, priklausomai nuo argumento: 
// jeigu what == 1 - stringą “white”, jeigu what == 2 - stringą “black”,  
// kitais atvejais - “no color”. Pademostruoti veikimą;

function color(what){
    if (what == 1){
        return 'white';
    }
    else if (what == 2) {
        return 'black';
    }
    else {
        return 'no color;'
    }
    return color;
}

console.log (color(1));

console.log('_____3 uzduotis__________');
// Parašykite dvi funkcijas sum(a, b) ir diff(a, b). 
// Pirma finkcija turi suskaičiuoti sumą (a+b), o kita 
// skirtumą (a-b) su argumentais a, b ir grąžinti rezultatą. 
// Pademostruoti veikimą;


let a = 20;
let b = 8;


function sum (a, b){
    return (a + b);

}
let ats = sum (a, b)
console.log ('ats pirmas:', ats, sum (a, b));


let c = 12;
let k = 8;


function diff (a, b){
    return (c - k);
}
let ats2 = diff(a, b);

console.log ('ats antras',ats2, diff (a, b));



console.log('_____4 uzduotis_______');
//Papildyti prieš tai buvusį uždavinį, kad a ir b parametrai turėtų
//default argumentus lygius 0. Pademostruoti veikimą;



// function sum (a===0, b===0){

//     return (a + b );
    
// }

// console.log ('4 uzd ats pirmas', ats);

// function sum (a, b){

//     return (a - b );
    
// }

// console.log ('4 uzd  ats antras', ats);





console.log('_____5 uzduotis_______');
// Sukurkite masyvą ab [‘A’, ‘B’], masyvą cd [‘C’, ‘D’] ir 
// masyvą fe [‘F’, ‘E’] . Masyvai nėra funkcijos viduje.
// Parašykite funkciją changeArray(array), 
//kur sukeistų vietomis perduodamo masyvo reikšmes. 
//Pademostruoti veikimą;

let ab = ['A', 'B'];
let cd = ['C', 'D'];
let fe = ['F', 'E'];
console.log (ab, cd, fe);

function keiciam (ab,cd,fe) {
  
    return ( ab, cd, fe);
}


let ats3 = keiciam (ab,cd,fe);

console.log (ats3);





console.log('_____6 uzduotis_______');
// Sukurti objektą car1 {make: ’volvo’} ir car2 {make: ’mb’}. 
// Objektai nėra funkcijos viduje. Sukurti funkciją changeMake(car, make),
// kuri keistų perduodamo objekto car savybę į perduodamo make argumento
// reikšmę. Pvz iškvietus funkciją su argumentais changeMake(car1,’ZaZ’)
// car1 objekte savybė pasikeistų į ‘ZaZ’.  Pademostruoti veikimą;


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



console.log(document)

let li = document.querySelectorAll ('ul'); //ieskojimas
console.log (li[0].style.fontSize = rand (10, 30) + 'px');




// const obj = new Object();
// console.log (typeof obj);

class Naujas {
    constructor()
    {
        // console.log('naujas pojektas')
        this.age = rand(8, 20);

    }
    voice = () => console.log ('miau');
}

const n1 = new Naujas();
const n2 = new Naujas();

// console.log (typeof n1);
// console.log (typeof n2);
// console.log (typeof obj);


n2.voice();
