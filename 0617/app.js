
console.log ('pirma uzduotis')


const ab = ['a', 'b','a','b', 'c', 'c', 'c', 'c','b','b', 'c', 'c'];
console.log (ab);

// 1 audojamas cikslas for, atskirti console.log masyvo reiksme

console.log ('______________1 ______________');

for (let a=0; a < ab.length; a++) {
    
    console.log(ab[a]);
};


console.log ('______________2 ______________');
//2 kiekvienam masyvo indeksui

for (let a=0; a < ab.length; a++) {
    console.log (a);
};

//3 naudojamas cikslas for. Atskirai padaryti consolo.log kiekvienai 
// a masyvo reiksmei ale kiek yra a raidziu sarase.
console.log ('______________3 ______________');

for (let a = 0; a < ab.length; a++) {
    if (ab[a] === "a" ){
        console.log (ab[a]);
    }
}

console.log ('______________4 ______________');

// 4 naudojamas cisklas for atskirai padaryti console.log keikvienam masyvo indeksui
// kurio reiksme "b"


for (let a = 0; a < ab.length; a++) {
    if (ab[a] === "b" ){
        console.log (a);
    }
}

console.log ('______________5______________');

// 5.6.7.8 analogiskai su forEach ciklsui ir "aero fankshen" => funkcija

ab.forEach (arrayvalue => console.log (arrayvalue));

console.log ('______________6______________');
//kaip 2 tik su forEach'u kiekvienam masyvo indeksui

ab.forEach ((value, index) => console.log (index));


console.log ('______________7______________');
//kaip 3 tik su forEach'u naudojamas cikslas for. Atskirai padaryti 
// consolo.log kiekvienai 
// a masyvo reiksmei ale kiek yra a raidziu sarase.

ab.forEach (ab => {
    if(ab === 'a'){
        console.log(ab);
    }
});


console.log ('______________8______________');
//  kaip 4 tik su forEach'u  naudojamas cisklas for atskirai 
// padaryti console.log keikvienam masyvo indeksui
// kurio reiksme "b"

ab.forEach ((ab, index) => {
    if(ab === 'b'){
        console.log(index);
    }
});

// ab.forEach ((value, index) => {
//     if(value === 'b'){
//         console.log(index);
//     }
// });

/// NAMu DARBAI !!!!


// NodeList

console.log ('node_lis 1 uzduoti')


// const ul = document.querySelector ('ul');
// const li = ul.document.querySelectorAll ('li');

// for( let i=0; i < li.length; i++ )   {
//     console.log (li[i].dataset.value);
// };


// console.log ('node_lis 2 uzduoti');


// //3 
// const lis3 = document.querySelectorAll('li');
// for (let i=0; i<lis3.length; i++){
//     if(lis3[i].dataset.value === 'a'){
//         console.log('ttt', lis3[i].dataset.value);
//     }
// }



// //4.

// lis4.forEach ((item, idex) => {
//     if (item.dataset.value === 'b'){
//         console.log (index);
//     };
// });

//6 
// ab. forEach

//7
// ab.forEach (arrayValue) => {
//     if (arrayValue === 'a'){
//         console.log (arrayValue);
//     }
// });

//8
// ab.forEach ((value, index) => {
//     if (value === 'b'){
//         console.log (index);
//     }
// });






console.log (' reikia kad atspausindu tris kartus, kievienai masyvo reiskme + kelintas kartas prasisuka______________');
const cde = ['c','d','e'];


for (let a=0; a < ab.length; a++) {
     console.log(ab[a], 3);  
};


console.log (' ______________________MOKYTOJO kodas____________');



// 1. naudojamas ciklas for. Atskirai padaryti console.log
// kiekvienai masyvo reikšmei + kelintas kartas
for (let i = 0; i < ab.length; i++) {
    // console.log(ab[i]);
}
// 2. naudojamas ciklas for. Atskirai padaryti console.log
// kiekvienam masyvo indeksui
for (let i = 0; i < ab.length; i++) {
    // console.log(i);
}
// 3. naudojamas ciklas for. Atskirai padaryti console.log
// kiekvienai "a" masyvo reikšmei
// 4. naudojamas ciklas for. Atskirai padaryti console.log
// kiekvienam masyvo indeksui, kurio reikšmė yra "b"

function f1(array, index) {
    return array[index] === 'b'
}

const an1 = function(array, index) {
    return array[index] === 'b'
}

const an2 = (array, index) => array[index] === 'b';



for (let i = 0; i < ab.length; i++) {
    if (ab[i] === 'b') {
        // console.log(i);
        console.log(i);
    }
}
console.log("----------------Vardine------------------");

for (let i = 0; i < ab.length; i++) {
    if ( f1(ab, i) ) {
        console.log(i);
    }
}

console.log("----------------Anonimine fn------------------");

for (let i = 0; i < ab.length; i++) {
    if ( an1(ab, i) ) {
        console.log(i);
    }
}

console.log("----------------Anonimine =>------------------");

for (let i = 0; i < ab.length; i++) {
    if ( an2(ab, i) ) {
        console.log(i);
    }
}



// const cde = ['c','d','e'];

// 5, 6, 7, 8 analogiškai bet su forEach ciklu ir => func

// 5.
ab.forEach(arrayValue => console.log(arrayValue));
// ab.forEach(arrayValue => console.log(arrayValue));

//6.
ab.forEach((value, index) => console.log(index));
// ab.forEach((value, index) => console.log(index));

//7.
ab.forEach(arrayValue => {
    if (arrayValue === 'a') {
        console.log(arrayValue);
        // console.log(arrayValue);
    }
});


//8.
ab.forEach((value, index) => {
    if (value === 'b') {
        console.log(index);
        // console.log(index);
    }
}); 
















console.log("_____________________DOM_____________");


// 1. Sukurti text tipo input elementą ir mygtuką. Paspaudus mygtuką input elemente esantį tekstą išvesti į console.log 

console.log("_DOM__1_");


// 2. Sukurti select tipo elementą su trim reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus reikšmėm select elemente, naują reikšmę išvesti į console.log



// 3. Sukurti tris radio tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus reikšmėm radio elemente, naują reikšmę išvesti į console.log





// 4. Sukurti vieną checkbox tipo elementą. Pažyminėjus elementą išvesti i console.log pranešimą “pažymėta”, o nuėmus pažymėjimą- “nepažymėta”
// 5. Sukurti tris checkbox tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus reikšmėm checkbox elemente, kiekvieno pažymėto checkbox elemento reikšmę išvesti į console.log
