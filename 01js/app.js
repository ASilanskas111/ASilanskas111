// // alert('laba diena is failo');



// console.log('draugas numeris 1', 9+11);

// console.log(15*2);
// console.log(15+3);



// var nn;
// var n=7;
// var n2=7;


// console.log ('n', n+n2);

// var q=true

// console.log (typeof 'q')


// console.log('1=="05"', 1 == '05');

// var nothing = null;
// console.log(typeof nothing)

// console.log('Labas');

// if (2 > 3){
//     console.log('tai tiesa');
//     console.log('thrhtht hht ht');

// }
// else{    
//     console.log('ne tiesa');
//     console.log('neteisingai');

// }

// console.log('Labanakt');


// var one=8;
// var two=6;


// if (one>two){
// console.log ('didesnis one');
// }

// else if (one<two) {
//     console.log (' didesnis buss two');
// }

// else if (one === two) {

//     console.log('lygu', one == two,)
 
//  }

// else {
//     console.log ('pabaiga');
// }

// Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus 
// (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus 
// paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų 
// tokį sakinį :

// "Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

// var vardas = "Andrius";
// var pavarde = "Šilanskas.";
// var gim = "1981";
// var metai= "2020";

// if (gim>metai){
//     document.write ('Gerbiamas,' , vardas,'Jūs dar negimęs :)');
//     console.log('Gerbiamas,', vardas,'Jūs dar negimęs :)');
// }
// else if (gim === metai){
//     document.write ('Jums negali būti 0 metų' );
//     console.log ('Jums negali būti 0 metų' );
// }

// else if (metai-gim<5){
//     document.write (metai-gim,'-Esate dar jaunas(a) !!!');
//     console.log (metai-gim,'-Esate dar jaunas(a) !!!');
// }



// else {
//     alert ('"Aš esu', vardas, pavarde,'Man yra', metai - gim, 'metai(ų)".');
//     console.log('"Aš esu', vardas, pavarde,'Man yra', metai - gim, 'metai(ų)".');
// }


// let s
// s = prompt ('Įveskite savo vardą , Jonas');
// document.write(s) 
// console.log (s)


// var parents = ["Jani", "Tove"]; 
// var brothers = ["Stale", "Kai Jim", "Borge"]; 
// var children = ["Cecilie", "Lone"]; 
// var family = parents.concat(brothers, children);

// console.log (family);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
//    fruits.reverse();
// console.log (fruits);

// var fruits = ["Banana", "Orange", "Apple", "Mango"]; 
// document.write(fruits.join() + " ");
// document.write(fruits.join("+") + ""); 
// document.write(fruits.join(" and "));

// console.log(fruits)


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();

console.log(fruits)


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");
// fruits.push("Lemon","Pineapple");
// console.log(fruits)



// let firstname = "John"; 
// let lastname="Doe"; 
// let age=30; 
// let eyecolor="blue";
// console.log(firstname, lastname, age, eyecolor); 


// personObj = {firstname:"John",lastname:"Doe", age:50, eyecolor:"blue"}
// console.log (personObj.firstname + " is " + personObj.age + " yearsold."); 

const myFather = new Person ("John" ,"Doe", 50, "blue");

function Person (firstname, lastname, age, eyecolor){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.eyecolor = eyecolor;
}

document.write  (myFather.firstname + " is " + myFather.age + " yearsold."); 
console.log (myFather.firstname + " is " + myFather.age + " yearsold.");






// __________________________________


// Naudokite funkcija rand(). Sukurkite du kintamuosius ir naudodamiesi funkcija rand() 
// jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. 
// Didesnę reikšmę padalinkite iš mažesnės.
//  Atspausdinkite rezultatą naudodami console.log()

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// var an = rand (0, 4);
// var al = rand (0, 4 );
// var sum= s;

// console.log (al, an, sum);



// Naudokite funkcija rand(). Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() 
// jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. 
// Raskite ir su console.log() atspausdinkite kintąmąjį turintį vidurinę reikšmę.


var a= rand (0, 25);
var b= rand (0, 25);
var c= rand (0, 25);

console.log (a, b, c);

