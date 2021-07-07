

const json = '[{"id":1,"title":"MAC"},{"id":2,"title":"Nike"},{"id":3,"title":"Victoria\u2019s Secret"},{"id":4,"title":"Zara"},{"id":5,"title":"Zizzi"},{"id":6,"title":"Witteveen"},{"id":7,"title":"H&M"},{"id":8,"title":"RIMOWA"},{"id":9,"title":"Adidas"},{"id":10,"title":"Paw Patrol"},{"id":11,"title":"Mattel"},{"id":12,"title":"Kenzo"},{"id":13,"title":"Asos"}]';
console.log('-A-', json);

//A. Pagaminti Map tipo objektą, kuriame raktas yra id iš json'o stringo 
// ir išvesti į konsolę

const mape = JSON.parse(json);

console.log('-A-', mape, 'negerai');


//padarom map

const map = new Map();
const objektas = JSON.parse(json);

// masyva galime foreachinti 
objektas.forEach(objektas => {
        map.set (objektas.id, objektas.title)
});

// console.log(objektas);
console.log(map);


// kitas budas
const map1 = new Map (JSON.parse(json).map (v => [v.id, v.title]));
console.log (map1, 'kitas budas');


//B. Pagaminti mygtuką HTML'e, kurį paspaudus iš json'o stringo pasidarytų
// Set tipo objektas su
// reikšmėmis (kompanijų vardais) išrūšiuotais pagal abėcėlę ir išvesti 
// setą į konsolę. 

// const map2 = JSON.parse(json);

// document.querySelector ('#sp'). addEventListener ('click', () =>{
//     map2.sort((a, b) => {
//         if ( a.title > b.title) {
//             return 1;
//         }
//         if ( a.title < b.title) {
//             return - 1;
//         }
//         return 0;
//     });
//     console.log('-B-', map2, 'negerai');
// });
// _____________________________________________________________




console.log (new Set( objektas.map(v=> v.title).sort( (a , b) => a < b ? -1:1)));

const SETAS = new Set ();
objektas.forEach(objektas =>{
    SETAS.add (objektas.title);
});

const tmpArr=[...SETAS];
tmpArr.sort();
SETAS.clear();
tmpArr.forEach(v => SETAS.add(v));

console.log('-B-', tmpArr);

// document.querySelector ('#sp'). addEventListener ('click', () =>{
//     map2.sort((a, b) => {
//         if ( a.title > b.title) {
//             return 1;
//         }
//         if ( a.title < b.title) {
//             return - 1;
//         }
//         return 0;
//     });
//     console.log('-B-', map2, 'negerai');
// });
