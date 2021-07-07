// const masyvas1 = [55, 77, 99, 100]; // => {a1: 55, a2: 77, a3: 99, a4: 100}
// const masyvas2 = [55, 77, 99, 100, 777]; // => {a1: 55, a2: 77, a3: 99, a4: 100, a5: 777}

// masyva paversti i objekta

const masyvas1 = [55, 77, 99, 100];// => {a1: 55, a2: 77, a3: 99, a4: 100}
const masyvas2 = [55, 77, 99, 100, 777]; // => {a1: 55, a2: 77, a3: 99, a4: 100, a5: 777}

// const json = '[{"id":1, "title":"Go/

// 1.

const obj = {};
// masyvas1.forEach ((e, i) => obj['a' + (i+1)] = e);

//su for tas pats, bet kitas sprendimas

for (let i = 0; i < masyvas1.length; i++) {
    obj [ 'a' + (i + 1) ] = masyvas1[i];
    
}

console.log ('-1-', obj);

// is objekto reikai padaryti masyva  -- objektas {} , --masyvas [],

const mas =[];

for (const prop in obj) {
   mas.push(obj[prop]);
}
console.log('-2-', mas);



//3

// [19:22] Arvydas Kijakauskas (Dėstytojas)
// Iš JSON padaryti sąrašą su li elementais, kuriuose yra knygų kategorijos const json = 
// '[{"id":1,"title":"Gro\u017ein\u0117 literat\u016bra"},{"id":2,"title":"Populiarioji psichologija"},
// {"id":3,"title":"Literat\u016bra vaikams ir jaunimui"},{"id":4,"title":"Pom\u0117giai"},
// {"id":5,"title":"\u0160eima, sveikata"},{"id":6,"title":"Literat\u016bra u\u017esienio kalbomis"},
// {"id":7,"title":"Dalykin\u0117 literat\u016bra"},{"id":8,"title":"Vadov\u0117liai, pratybos ir knygos mokslams"}]';


const json = '[{"id":1,"title":"Gro\u017ein\u0117 literat\u016bra"},{"id":2,"title":"Populiarioji psichologija"},{"id":3,"title":"Literat\u016bra vaikams ir jaunimui"},{"id":4,"title":"Pom\u0117giai"},{"id":5,"title":"\u0160eima, sveikata"},{"id":6,"title":"Literat\u016bra u\u017esienio kalbomis"},{"id":7,"title":"Dalykin\u0117 literat\u016bra"},{"id":8,"title":"Vadov\u0117liai, pratybos ir knygos mokslams"}]';

const type = JSON.parse(json);

//4 uzduoties intarpas

    type.sort((a, b) => {
        if ( a.title > b.title) {
            return 1;
        }
        if ( a.title < b.title) {
            return - 1;
        }
        return 0;
    });

//4 uzduoties intarpas , sąrašas būtų išrūšiuotas pagal title abėcelės tvarka

console.log (type);

const body = document.querySelector('body');
const ul = document.createElement('ul');
body.appendChild(ul);

type.forEach( element => {
    const t=document.createTextNode(element.title);
    const li = document.createElement ('li');
    li.appendChild (t);
    ul.appendChild (li);
    
});

    console.log ('-3-', ul);


// [19:24] Arvydas Kijakauskas (Dėstytojas)
// ir padaryti, kad sąrašas būtų išrūšiuotas pagal title abėcelės tvarka


//--------------5 uzduotis--------
// Sukurti dar du masyvus pagal masyvą, kur pirmas masyvas yra duoto masyvo reikšmių daugyba 
// iš 2 o antras masyvas yra duoto masyvo reikšmių kvadratas const arr = [5, 8, 9, 22];

const arr = [5, 8, 9, 22];

const x=[]
const xfor=[]


// su forEach'u
arr.forEach (e => x.push (e * 2 ));

//su foru
for (let i=0; i < arr.length; i++){
    xfor.push (arr [i] * 2);
}

//su map'u
const xmap = arr.map (e=>e*2);



console.log ('-5-', x);
console.log ('-5 su for-', xfor);
console.log ('-5 su map-', xfor);





