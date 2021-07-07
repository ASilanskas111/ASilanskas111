


console.log("__DOM 2021 06 19__");


// 1. Sukurti text tipo input elementą ir mygtuką. Paspaudus mygtuką input elemente esantį tekstą išvesti į console.log 
console.log("_DOM__1 UZD_");


document.querySelector('#button1').addEventListener('click', () =>
console.log (document.querySelector ('#_1').value));


// 2. Sukurti select tipo elementą su trim reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus reikšmėm select elemente, naują reikšmę išvesti į console.log
console.log("_DOM__2 UZD_");


document.querySelector('#_2').addEventListener ('change', event =>
console.log(event.target.value));



// 3. Sukurti tris radio tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus reikšmėm radio elemente, naują reikšmę išvesti į console.log
console.log("_DOM__3 UZD_");

document.querySelectorAll('[name=_3]').forEach (radio =>{
    radio.addEventListener('change', event => console.log(event.target.value));

});



// 4. Sukurti vieną checkbox tipo elementą. Pažyminėjus elementą išvesti i console.log pranešimą “pažymėta”, o nuėmus pažymėjimą- “nepažymėta”
console.log("_DOM__4 UZD_");



document.querySelector('#_4').addEventListener ('change', event => {
    if (event.target.checked){
    console.log('Pažymėta');
    }
    else {
    console.log ('Nepažymėta');
    }
});




// 5. Sukurti tris checkbox tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus reikšmėm checkbox elemente, kiekvieno pažymėto checkbox elemento reikšmę išvesti į console.log
console.log("_DOM__5 UZD_");

// document.querySelector('#_5k').addEventListener ('change', event =>
// console.log(event.target.name));


// document.querySelectorAll('[name=_5]').forEach (chEl => {
//     chEl.addEventListener ('change', () => {
//         console.log ('___________________________________________');
//         document.querySelectorAll('[name=_5]').forEach (ch => {
//             if (ch.checked) {
//             console.log (ch.value);
//             }
//         });
//     });
// });

// 6. Sukurti elementą h1. Pakartoti 1-5 uždavinius rezultato tekstą įkeliant į 
//tą sukurtą elementą.

// const h1 = document.querySelector ('h1');

// document.querySelectorAll('[name=_6]').forEach (chEl => {
//     chEl.addEventListener ('change', () => {
//         console.log ('=======================================');
//         let out='';
//         document.querySelectorAll('[name=_6]').forEach (ch => {
//             if (ch.checked) {
//             out +=ch.value +' ';
//             }
//         });
//         h1.innerText= out;
//     });
// });

// 7. Pakartoti 1-5 uždavinius rezultatus atvaizduojant DOM’e dinamiškai
//sukurtuose elementuose h3


// 8. Pakartoti 1-5 uždavinius. Kiekvienam uždaviniui sukurti naują tuščią masyvą 
//(arba vieną objektą su 5 masyvais viduje). Kiekvieną pasikeitimo reikšmę įrašyti į 
//masyvą kaip naują elementą ir į console.log išvesti tą masyvą.

console.log("_DOM__8_1 UZD_");

let f = [];
console.log (f);

document.querySelector('#button1').addEventListener('click', () => {
    console.log (document.querySelector ('#_1').value);
    f.push(document.querySelector ('#_1').value); //reikia tik pusch priskirtam masyvui 
    console.log(f);
});

console.log("_DOM__8_2 UZD_");

let z = [];
console.log (z);

document.querySelector('#_2').addEventListener ('change', event => {
console.log (event.target.value);
z.push(event.target.value );
console.log(z);
});

console.log("_DOM__8_3 UZD_");

let p = [];
console.log (p);

document.querySelectorAll('[name=_3]').forEach (radio => {
    radio.addEventListener('change', event => {
        console.log (event.target.value);
         p.push(event.target.value);    
         console.log(p);
    });
});


console.log("_DOM__8_4 UZD_");

let w = [];
console.log (w);

document.querySelector('#_4').addEventListener ('change', event => {
    if (event.target.checked) {
         w.push('Pažymėta');
         console.log (w);
    }
    else {
         w.push ('Nepažymėta');
         console.log (w);
    }


});


console.log("_DOM__8_5 UZD_");

let q = [];
console.log (q);


document.querySelectorAll('[name=_5]').forEach (chEl => {
    chEl.addEventListener ('change', () => {
        const arr = []; // sukuriamas atskiras masyviukas kiekvienam rezultatui atskirai
        document.querySelectorAll('[name=_5]').forEach (ch => {
            if (ch.checked) {
               arr.push(ch.value);
               console.log (arr);
            }
        });
        q.push(arr);
        console.log (q);
    });
});

console.log("_DOM__8_6 UZD_");

let s = [];
console.log (s);


const h1 = document.querySelector ('h1');

document.querySelectorAll('[name=_6]').forEach (chEl => {
    chEl.addEventListener ('change', () => {
        let out='';
        document.querySelectorAll('[name=_6]').forEach (ch => {
            if (ch.checked) {
            out +=ch.value +' ';
            }
        });
        s.push(h1.innerText= out);
        console.log (s);
    });
});

// 9. Padaryti mygtuką “GO”, kurį paspaudus, naudojant masyvus, 
//gautus 8 uždavinyje, dinamiškai, iš tų masyvų duomenų, būtų sukurta daug h3 tagų 
//kaip tai buvo padaryta 7 uždavinyje (vienas įrašas masyve, atinka vieną naują h3 tagą).


document.querySelector('#go').addEventListener('click', () => {
    f.forEach((val) => {
        console.log(val);
    });
    z.forEach((val) => {
        console.log(val);
    });
    p.forEach((val) => {
        console.log(val);
    });
    w.forEach((val) => {
        console.log(val);
    });
    q.forEach((val) => {
        console.log(val);
    });
    s.forEach((val) => {
        console.log(val);
    });
});


// 10. Padaryti mygtuką “Reset”, kuris ištrintų duomenis iš visų masyvų.



document.querySelector('#reset').addEventListener('click', () => {
   
   
    f= [];
    z= [];
    p= [];
    w= [];
    q= [];
    s= [];

});



// 11. Padaryti mygtuką “Clear”, kuris ištrintų visus h3 tagus iš DOM’o.


document.querySelector('#clear').addEventListener('click', () => {

document.querySelectorAll ('h3').forEach (h3 => h3.remove());
});




// 12. Padaryti mygtuką “GO JSON”, kurį paspaudus, 9 uždavinio masyvus būtų sudėti
// į sukurtą naują objektą. Tą objektą paversti JSON stringu ir užsaugoti susikurtam 
//kintamąjame. Kintamąjį išvesti i console.log Nuskaityti JSON stringą 
//iš kintamojo, paversti jį objektu ir iš jo informacijos suformuoti h3 
// tagus kaip 9 uždavinyje.


document.querySelector('#gojson').addEventListener('click', () => {

    const obj = { 
        arr1: arr1,
        arr2: arr2, 
        arr3: arr3, 
        arr4: arr4, 
        arr5: arr5,
    }

    let jsonString = JSON.stringify(obj);
    console.log(jsonString);
    const obj2 = JSON.stringify (jsonString);
    console.log (obj2);

    for(prop in obj2){
        console.log (obj2[prop]);
        obj2[prop].forEach(bbz); // cia bbz ir arr is 5 uzduoties 
    }



});










// 2021 06 22 Kvizas
// [18:05] Arvydas Kijakauskas (Dėstytojas)
// Reikia inputo type text

// [18:06] Arvydas Kijakauskas (Dėstytojas)
// Reikia mygtuko "GO"

// [18:07] Arvydas Kijakauskas (Dėstytojas)
// Reikia antro inputo type text

// [18:07] Arvydas Kijakauskas (Dėstytojas)
// Paspaudus mygtuką, tekstas kuris yra inpute nr 1 būtų atvaizduotas konsolėjė

// [18:08] Arvydas Kijakauskas (Dėstytojas)
// o tekstas iš inputo nr 2 būtų atvaizduotas dinamiškai sukurtame tage h1


// document.querySelector('#bbb').addEventListener('click', () =>
// console.log (document.querySelector ('#KV').value));

// const h4 = document.querySelector ('h4');

// document.querySelectorAll('[name=KK]').forEach (chEl => {
//     chEl.addEventListener ('change', () => {
//         console.log ('=======================================');
//         let out='';
//         document.querySelectorAll('[name=KK]').forEach (ch => {
//             if (ch.checked) {
//             out +=ch.value +' ';
//             }
//         });
//         h4.innerText= out;
//     });
// });




// 100 spanų užduotis

const body = document.querySelector('body');

   for (let p=1; p <= 100; p++);
    const sp = document.createTextNode(p);
    const span=document.createElement ('span');
    span.appendChild(sp);
    body.appendChild(span);

   console.log(span);



   console.log('_localStorage ________nauja tema______________');

//application / local Storage
//    localStorage.setItem('cat', 'miau miau');
//    localStorage.setItem('dog', 'Au au');

   //kaip pasiimama is local Storage 'getItem'?

//    console.log (localStorage.getItem('cat'));
//    console.log (localStorage.getItem('dog'));

   //istrinti is (sun) removeitem
//    localStorage.removeItem('dog');

   // kai generaline tvarka ir isvalom viska su (clear())
//    localStorage.clear();


// porasyti 100 dog i local....

// localStorage.setItem ('dog', 'Au au');
// for (let i = 0; i <= 100; i++){
//     localStorage.setItem ('dog' + i, 'Au au');
// };

// ar galime saugoti masyvus? 
// norime issaugoti Array - ar
// arejus pavirto i 

// localStorage.setItem( 'arr', ['a','b']);

// i localStorage dedamas tik stringas, bet su JSON galime ideti masyva

// localStorage.setItem ( 'arr', JSON.stringify(['a','b']));
   localStorage.clear();

// 100 katinu

//     localStorage.setItem ('cats');

// const cats =[];

// localStorage.setItem ('cats', JSON.stringifyv(['cats','cats']));
// for (let i = 0; i <= 100; i++){
//     localStorage.setItem ('cats' + i, 'auuuu');
// };