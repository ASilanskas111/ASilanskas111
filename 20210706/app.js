
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




//A. Reikia sukurti masyvą, kurio reikšmės yra atsitiktinės nuo 10 iki 20;
const sk = [];
for (let i=1 ; i <=25; i++) {
    sk.push (rand (10, 20));
}
console.log ("A", sk);


//Masyvo ilgis 25 elementai.



//B. Reikia sukurti masyvą, kurio reikšmės yra atsitiktinės nuo 10 iki 20;

const skB = [];
let counter13 = 0;
    do{
        const r = rand (10, 20);

        if (r === 13) {
            skB.push(r+'');
            counter13++;
        }
        else{
            skB.push(r);
        }
} while (counter13 < 3);

//Masyvo ilgis nustatomas pagal masyvo reikšmes. Generuoti masyva tol, kol jame atsiras 3 reikšmės lygios 13;


console.log ('B', skB);


// C. Reikia sukurti Set objektą, kurio reikšmės yra atsitiktinės nuo 10 iki 20;
//Set'o dydis yra VISOS reikšmės nuo 10 iki 20;

const a3 = new Set();
do {
    a3.add(rand(10, 20));
} while (a3.size < 11);

console.log('a3', a3);



//D. Reikia sukurti Map objektą, kurio reikšmės yra atsitiktinės nuo 10 iki 20, o 
//raktai (indeksai) yra igi atsitiktinės reikšmės nuo 10 iki 20;
//Map'ą generuoti tol, kol jame bus 3 reikšmės lygios 13.


const a4 = new Map();
let counter14;
do {
    const r = rand(10, 20);
    if (r === 13) {
        a4.set(rand(10, 20), r+'');
    }
    else {
        a4.set(rand(10, 20), r);
    }
    counter14 = 0;
    a4.forEach(v => v == 13 ? counter14++ : counter14);

} while (counter14 < 3 );

console.log('D', a4);



//E. Sukurt Set tipo objektą pagal C sąlygą, tik jo ilgis turi būti 10.
// Surasti, kokio skaitmens trūksta Set'e, palyginus su generuojama atsitiktinių reikšmių aibe.

const a5 = new Set();
do {
    a5.add(rand(10, 20));
} while (a5.size < 10);

// kurio skaiciaus dabar tuksta?

for (let i = 10; i < 21; i++) {
   
    if (!a5.has(i)){
        console.log('ats E', i);
        break;
    }
 }

console.log('E', a5);



//F. Taip, kaip D sąlygoje tik 3 vienodos reikšmės gali būti bet kokie skaičiai.


const a6 = new Map();
let counter16 =20 ;  // skaiciuoja 20 iteraciju
let mapToArray = [];
do {
         a6.set(rand(10, 20), rand(10, 20));

        //  const tmpArray = [...a6]
        //  mapToArray = tmpArray.map(v => v[1]);



    // counter16 = 0;
    a6.forEach(v => v == '***' ? counter16++ : counter16);

} while (--counter16 < 3 );

console.log('F', a6);
console.log('F arr', mapToArray);