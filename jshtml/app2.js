function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Atskiri elementai
// a. Tamsiai žaliai nuspalvinti h1 tagą;

const h1Tag = document.querySelector('h1');
h1Tag.style.color = 'green';

// b. Tagui i pridėti klasę small;

const iTag = document.querySelector('i');
console.log(iTag);
iTag.classList.add('small');


// c. Iš tago h1 pašalinti klasę main;

const h1class = document.querySelector ('h1');
console.log (h1class);
h1class.removeAttribute('class');


// d.Tik tam h2 tagui, kuris iškart eina po h1 tagui pridėti 
// klasę first ir pašalinti klasę main;

const h2class = document.querySelector('h2');
console.log(h2class);
h2class.removeAttribute('class');
h2class.classList.add('first');


// e. Span tagui, kuris yra h2 viduje sumažinti fonto dydį 
// iki 10px ir nudažyti pilkai

const h2span = document.querySelector ('h2 span');
 h2span.style.fontSize = '10px';
 h2span.style.color = 'gray';



// 2. Elemetų grupės (nodeList) skaičiavimus išvest į consolę
// a. Suskaičiuoti kiek yra h2 tagų;
console.log ('2. Elemetų grupės');

const h2 = document.querySelectorAll ('h2');
console.log ('h2 vnt', h2.length);


console.log ('2. / Kitas budas');
// Kitas budas

let counter = 0;
document.querySelectorAll('h2').forEach( () => counter++ );
document.querySelectorAll('h2').forEach( () => {
    counter++

});

console.log ('h2 vnt', h2.length);

// b. Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first


// const h2first = 0;
// for (let i = 0; i < h2.length ; i++){
//     if (h2first[i].classList.contains('first')){
//         h2first++;
//     }
// }
console.log (' nepadarytas', h2.length, ['first']);


const h2first = document.querySelectorAll ('h2');
for (let i = 0; i < h2.length ; i++)
    {
        if (h2first[i].classList.contains('first'));
    }
    console.log (h2first);


// c. Visus h2 tagus nuspalvinti šviesiai mėlynai
console.log ('c. Visus h2 tagus nuspalvinti šviesiai mėlynai');

document.querySelectorAll ('h2').forEach(element => {
    element.style.color = 'lightblue'
   });

   console.log('C ok');



console.log('d. Tagams kurie yra div su klase prices viduje pridėti klasę price-tag');

const divPrice  = document.querySelector ('.prices');
const h2Price = divPrice.querySelectorAll ('h2');
console.log(divPrice);
console.log(h2Price.length);

for(let i=0; i<h2Price.length; i++){
   h2Price[i].classList.add ('price-tag');
}


console.log ('e. Pabraukti visus tagus su klase new');

const tagnew = document.querySelectorAll ('.new');
console.log (tagnew.length, tagnew);

for (let i=0; i<tagnew.length; i++){
    tagnew[i].style.textDecoration = 'underline';
}


console.log ('f. Suskaičiuoti kiek yra gyvūnų kategorijų (jos yra ul tagai)');

const vntAnimal = document.querySelector('.animals');
const vntgiv = vntAnimal.querySelectorAll ('ul');
console.log (vntgiv.length);

// g. Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje
//  ir apačioje ir 50px paddingą kairėje ir dešinėje;

const ulai = document.querySelectorAll('ul');
console.log (ulai);
for (let i=0; i<ulai.length; i++){
    ulai[i].style.padding= '15px 50px 15px 50px';
};




console.log ('h. Suskaičiuoti kiek yra naujų gyvūnų (su klase new)');

const gyvunainew = document.querySelectorAll ('.new');
console.log (gyvunainew.length, gyvunainew);


// i. Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;
console.log ('i. Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;');

const cc2={}; // tuscias objektas

for (let index=0; index < h.length; index++){  // einam per ul
    let c1 = 0;
    const BB =h[index].querySelectorAll('li');

    for(let j = 0; j < BB.length; j++){
        if (BB[j].classList.contains('new')){
            c1++;
        };
    };
    cc2[h[index].id] = c1;
};

console.log('i:,cc2')








// const naujigyvunai= {};

// document.querySelectorAll('ul').forEach( ul => {
//     let count = 0;
//     ul.querySelectorAll ('li').forEach( li => {
//     if (li.classList.contains ('new')) {
//         count++;
//     }
//     });
//     naujigyvunai[ul.id]= count;
// });

console.log (naujigyvunai);


// 3 Elementų events
// a. Padaryti tai ką liepia mygtukai Header1 sekcijoje;
// b. Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
// c. Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
// d. Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color;
// e. Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;
// f. Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element
// g. Padaryti tai ką liepia mygtukai Header2 sekcijoje;

// 4 Elementų grupių events
// a. Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event

// const dbAnimal=function(e){
//     e.target.style.color = 'red';
// }

// const newAnimals = document.querySelectorAll ('.new');

// for (let i=0; i < newAnimals.length; i++);{
//     newAnimals[i].addEventListener ('dblclick', dbAnimal);
// }
// document.querySelectorAll('.new').forEach(anima => {
//     animal.addEventListener ('dblclick', e=> {
//         e.target.style.color = 'red';
//     })

// })


// b. Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.
// c. Padaryti, kad paspaudus ant “PATINKA”, atitinkamai sekcijai būtų priskirta klasė like;

// 5 Dinaminis elementų kurimas
