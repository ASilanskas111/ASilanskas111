function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



console.log (document);

// const h1 = document.querySelector('h1');
// console.log(typeof (h1));


// console.log (h1.style);

// h1.style.color = 'green';

// setTimeout( () => h1.style.color = 'red', 5000);


// const h1 = document.querySelectorAll('h1');

// console.log(h1);
// console.log(h1[0]);
// console.log(h1[1]);
// h1[1].style.color = 'green';
// h1[0].style.color = 'red';


// const li = document.querySelectorAll ('ul'); 
// console.log (li);

// console.log (li[0].style.fontSize = rand (10, 30) + 'px'); // keiciasi dydis viso li
// // console.log (li[0].style.fontSize = 20 + 'px');
// li[0].style.color ='red';
// console.log (li);

// const ul = document.querySelector('ul');
// const li = ul.querySelectorAll ('li'); 
// console.log (li.style.fontSize = rand(10, 30) + 'px');
// li.forEach(e => e.style.fontSize = rand (10,30) + 'px'); //skirtingus li 
// console.log (li);

// console.log (li[0].style.fontSize = rand (10, 30) + 'px');
// // console.log (li[0].style.fontSize = 20 + 'px');
// li[0].style.color ='red';

//_____________________________________________________

// const li = document.querySelectorAll ('li'); //ul visi li, pasirinkus li tik ant pirmo ul'o

// li[0].style.color = 'green';
// li[0].style.fontSize = rand(10, 30) + 'px';
// li[1].style.color = 'yellow';
// li[1].style.fontSize = rand(10, 30) + 'px';
// li[2].style.color = 'blue';
// li[2].style.fontSize = rand(10, 30) + 'px';

// console.log (li);

// kitas variantas

// const ul = document.querySelectorAll('ul');
// const spalva = ['yellow','green', 'blue', 'red'];
// const klase = ['one', 'two', 'three', 'four'] // priskirtos clase'es



// for (let r = 0; r < ul.length; r++) {
//    const li = ul[r].querySelectorAll('li');

//    for (let k = 0; k < li.length; k++) {
//         li[k].style.color = spalva[r]; // r reiksme [ iki triju  ]
//     //  li[r].style.fontSize = rand(10, 30) + 'px';
//     li[k].style.fontSize = 20 + 'px'; // pastovus raidziu dydis
//     li[k].style.color = spalva[r % 4]; // tolimesnis pasikartojimas   
//     li[k].classList.add(klase[r % 4]); // priskirtos clase'es
    
// }
// }

// ___________KITAS_______________________________

// const m = document.querySelector ('.pagrindas');
// console.log (m);
// const div = m.querySelectorAll('div');
// console.log (div);

// m.style.backgroundColor = 'green';

// 20210611




const a = document.querySelector('a');
const h1 = document.querySelector('h1');

a.style.color = 'green';
h1.style.color = 'red';


const makeh1Blue = function(eventas){
    eventas.preventDefault();
    h1.style.color = 'blue';
};
a.addEventListener ('click', makeh1Blue);


// - Su JS padaryti taip, kad paspaudus ant Link, 
// Labas pakeistu splva i melyna -->


// !-- C -->

// <!-- Su JS padaryti kad paspaudus ant bet kokio divo
// jis pranyktu (display: none)-->

const divs=document.querySelectorAll ('div');
const hideDiv= function (e) {
    e.target.style.display = 'none';
    
}
for ( let i=0; i< divs.length; i++){
divs[i].addEventListener ('click', hideDiv);
}

// <!-- D -->

// <!-- Su JS padaryti kad paspaudus ant bet kokio
// divo jis butu istrintas (google js element remove)-->

// <!-- E -->

//     <!-- Su JS padaryti kad paspaudus ant 
//     Dukros jis butu istrinti (google js element remove)
//      ir Tevas ir Dukra-->


const Dukra = document.querySelector('i span');

const killFamily = function (e){
    // console.log(e.target);
    // console.log(e.target.closest('.i'));
    e.target.closest ('i').remove();

}
// Dukra.addEventListener ('click', killFamily);


// ______________________________________________________

const newDukra = document.createElement('span');
const nameOfDukra = document.createTextNode('Dukra 2');
newDukra.appendChild(nameOfDukra);
const oldDukra = document.querySelector('span');
const tevas = document.querySelector('i');
// tevas.insertBefore(newDukra, oldDukra);




//i keiviena h2 tage prideti span us tekstu sugalvoti

const h2html = document.querySelectorAll('h2');

for (let i=0; i < h2html.length; i++)
{
    
    const sp = document.createElement('span');
    const tekstas = document.createTextNode(i+1);
    sp.appendChild(tekstas);
    h2html[i].appendChild(sp);

}
console.log(h2html);


//<!-- G -->

const h5Tag = document.querySelectorAll('h5');
const h3Tag = document.querySelectorAll ('h3');
console.log (h5Tag);
console.log (h3Tag);

for (let i=0; i <h5Tag.length; i++)
{
    
    const sp = document.createElement('span');
    const tekstas = document.createTextNode(i+1);
    h5Tag[i].appendChild(sp);
    sp.appendChild(tekstas);
    h5Tag[i].appendChild(sp);

}
for (let i=0; i <h3Tag.length; i++){
    const sp = document.createElement('span');
    const tekstas = document.createTextNode(i+1);
    sp.appendChild(tekstas);
    h3Tag[i].appendChild(sp);
}
