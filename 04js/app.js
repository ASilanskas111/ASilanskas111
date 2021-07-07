function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// console.log ('pries');
// var cycle = 1;

// while (cycle <= 5){
//     console.log ('ciklas', cycle); cycle++;
// }

// console.log ('po');


//A.
// sugeneruoti 21 atsitiktini skaiciu nuo 10 iki 99 ir sulipinti i viena stringa.
// Skaicius atskirti kableliais. po paskutinio kablelio nera.

//B. tobulinam, generuojam tol kol ju suma bus ne didesne uz 250.
//C. patobulinimasL skaiciai mazesni nei 30, surasyti turi buti i atskiras eilutes




//A
//generuojame ciklu for, nes zinoma kiek kartu '21'

var i=1, betkas='';

for (i ; i <=21; i++) {

if (i !== 1) {
    betkas += ', ';
}
    // betkas += rand (10, 99);
    betkas = betkas + rand(10, 99);

}

console.log (betkas);

//B

var sum = 0, answer='', firstTime = true, digit;
do{
    if (!firstTime) {
        answer += ', ';
    }
    firstTime = false;
    digit = rand (10, 99);
    answer += digit;
    sum += digit;


} while (sum < 250);

console.log (answer);
console.log (sum-digit);

// 10
// Kazys ir Petras žaidžiai bingo. 
// Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20, 
// Kazys - surenka taškų kiekį nuo 5 iki 25. 
// Console.log išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: 
// ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​.
//  Žaidimą laimi tas, kas greičiau surenka 222 taškus. 
//  Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222 arba daugiau taškų.

var petras=0, kazys=0;
do {
petras += rand(10, 20);
kazys += rand(5,25);

}
while (petras < 222 && kazys < 222);
// while (petras >= 222 II kazys >= 222);


// if (pertas>=222 II kazys >=222){
//     break; // isderina, tai stabis avarine situacija //
// }
// while(true)-amzinas ciklas, sukasi visada


if(petras>=222&&kazys>=222){
    console.log ('petras', petras, 'kazys', kazys);
}

else if(petras>kazys){
    console.log ('Laimi Petras', petras, kazys);
}

else{
    console.log ('Laimi Kazys', petras, kazys);
}





// 07 PAMOKA

// darysim penkias iteracijas
for (var i=0; i<5; i++){

if(i === 4){
    break;
}
// ciklo nutraukims prie 4 ir the end'as
// penksi kartus prasukam cikla
console.log(i);
}


console.log('Pabaiga');



// for (var i=0; i<5; i++){

//     if(i !== 4){
//         continue;
//     }
//     console.log(i);
// }


// 8 b reikai su break ir continue

// var a,b;
// do {
// a += rand(10,25);
// b += rand(10,25);

// }
// while(true);
// if ( a<12) {
 

// }
// console.log(a);

// NEVEIKIA


var A=8;
if( A===6)
{
    console.log('A=6');
}

else if( A===8)
{
    console.log('A=8');
}

else if( A===10)
{
    console.log('A=10');
}

else {
    console.log ('nei 6, nei 8, nei 10');
}

switch(A){
// susirasom keisus
case 6: console.log ('A=6');
if(rand(0,1)){
    break;
}
// break;
case 8: console.log ('A=8');
break;
case 10: console.log ('A=10');
break;
default:console.log('nei 6, 8, 10' );

};


// _______________3ND__________________

console.log('');
var a =rand( 1, 10);
var b =rand( 1 ,10);
var c =rand( 1, 10);

console.log(a,b,c);

if(a+b>c && b+c>a && a+c>b){
    console.log ('Galima');
}

else{
console.log('Negalima');

}

// _______________4___________________

var a1= rand (0, 2);
var a2= rand (0, 2);
var a3= rand (0, 2);
var a4= rand (0, 2);

var nuliai = 0, vienetai = 0, dvejetai = 0;

console.log ('___skaicius____');
console.log (a1,a2,a3,a4);

if(a1===2){
    dvejetai++;
}
if(a2===2){
    dvejetai++;
}
if(a3===2){
    dvejetai++;
}
if(a4===2){
    dvejetai++;
}

console.log ('___dvejetai_______');
console.log (dvejetai)
console.log ('___vnt_______');
console.log (vienetai = a1+a2+a3+a4 - (dvejetai*2));
console.log ('______nuliai_________');

console.log (nuliai = 4 - vienetai - dvejetai);
