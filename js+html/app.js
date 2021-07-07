// const words = ["Labas Rytas","Laba Diena","Labas Vakaras"];

// const h1 = document.querySelector('h1');




// document.querySelector('#case-1').addEventListener('change', (select) => {

//     h1.innerText = select.target.value;

// });



// document.querySelector('#case-2').addEventListener('change', (select) => {

//     h1.innerText = words[select.target.value];

// });


// Padaryti trijų pasirinkimų select, spalvų h1 tage keitmui

// document.querySelector('#case-3').addEventListener('change', (select) => {

//     h1.innerText = select.target.value;

// });


//2. Padaryti RESET mygtuką, kuris h1 tage pakeistų tekstą i "Hello"

// document.querySelector('#Reset').addEventListener('change', (select) => {

//        h1.innerText = h1;
// });



// fetch('http://127.0.0.1:5500/js+html/h2.html')
// .then(response => response.text())
// .then(data => console.log(data));


// neskiria tagu ir duota texta

// document.querySelector('button').addEventListener('click', () => {

//     fetch('http://127.0.0.1:5500/js+html/h2.html')
//     .then(response => response.text())
//     .then(data => h1.innerText = data);
// })

// document.querySelector('button').addEventListener('click', () => {

//     fetch('http://127.0.0.1:5500/js+html/h2.html')
//     .then(response => response.text())
//     .then(data => h1.innerHTML = data);
// });


//data guli jau objektas: 

// fetch('http://127.0.0.1:5500/js+html/h2.html')
// .then(response => response.json())
// .then(data => console.log(data));



// https://in3.dev/vinted/api/brands/all

// fetch('https://in3.dev/vinted/api/brands/all')
// .then(response => response.json())
// .then(data => console.log(data));

// const log = 'MAC';
// h1.innerHTML = '<li>'+log+'</li>';



//atvaizdavimas is linko 'title'

let output = '';

fetch('https://in3.dev/vinted/api/brands/all')
.then(response => response.json())
.then(data => {
    data.forEach(element => {
        output += '<li>'+element.title+'</li>';       
    });
    document.querySelector ('ul').innerHTML = output;
});
