
// irasymas ir gavimas atgal, irasome objekta ir atgal

//norint patobulinti Tv i class galime irasyti: constructor()/metodas kuris pasileidzia pas
class Tv {
        constructor (is, coliai, title) { // "is" kintamasis
            this.istrizaine = is;
            this.coliai = coliai;
            this.title = title;
            this.uuid='tv-' + this.rand(1000000,9999999); // unikalus numeris (psiaudo indifikatorius)
        }
        rand(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        //dar viena metodas kuri sukuriame
        save(){
            localStorage.setItem('col', JSON.stringify(col));
        }

};


const tv1 = new Tv (78, ['32 col', '42col', '53col'], 'philips');
const tv2 = new Tv (32, ['28 col', '42col', '53col'], 'sony');


console.log(tv1);
console.log(tv2);
console.log(tv1.istrizaine);
console.log(tv2.istrizaine);


// ____________________________________ cia virsuje class dalykai
//Dabar ne class dalykai


const col = {
    istrizaine: 78,
    coliai: ['32 col', '42col', '53col']
};

const col2 = {
    istrizaine: 32,
    coliai: ['28 col', '42col', '53col']
};

console.log(col);
console.log(col2);

//uzduotis ideti i localStorage (irasom)

localStorage.setItem('col', JSON.stringify(col));
//dabar pasiimam
let out3= localStorage.getItem('col');
out3=JSON.parse(out3);


//pridedam su ++ po viena

out3.istrizaine++;
localStorage.setItem('col', JSON.stringify(out3));
out3= localStorage.getItem('col');
out3=JSON.parse(out3);



//analogiskai kitas objektas

localStorage.setItem('col2', JSON.stringify(col2));
//dabar pasiimam
let out4= localStorage.getItem('col2');
out4=JSON.parse(out4);

//pridedam su ++ po viena

out4.istrizaine++;
localStorage.setItem('col2', JSON.stringify(out4));
out4= localStorage.getItem('col2');
out4=JSON.parse(out4);


console.log(out3);
console.log(out4);


// darbelis
console.log('darbelis');


//susortinti ir atspauszdinti sito arrejo info

const clist = ['LTV', 'TV3', 'Altv', 'Balticum', 'SAT1'];  // arejus 

//clase
class Sorter{
    constructor(ar){
        this.arr = ar;

    }
    sortByAsc(){
        this.arr.sort();
        return this.arr;
    }
    sortByDrsc(){
        this.arr.sort ((a , b) => a > b ? -1 : 1);
        return this.arr.slice();

    }
    //pagal stringo ilgį DESC
    sortByDESC(){
        this.arr.sort ((a,b) => a.length - b.length);
            return this.arr.slice();
        }
    //pagal paskutinį simbolį ASC, paskutine raide
    sortByASCsimbol(){
        this.arr.sort ((a , b) => a [a.length -1] < b [b.length -1] ? -1 : 1);
            return this.arr.slice();
        }

}

const sorter = new Sorter (['LTV', 'TV3', 'SAT1', 'Balticum', 'Altv']); // objektas masyve

console.log (sorter.sortByAsc());
console.log (sorter.sortByDrsc());
console.log (sorter.sortByDESC());
console.log (sorter.sortByASCsimbol());

console.log('------------- 2 uzd--------');

// 2. Sukurti klasę SetSorter, kuri turi tuos pačius rūšiavimo metodus,
// bet jos savybe arr yra Set tipo objektas.


class SetSorter{
    constructor(ar){
        this.set = ar;
        this.arr = [...ar];
    }

    arrayToSet(){
        this.set.clear();
        this.arr.forEach(v => this.set.add(v));
        return this.set;
    }

    sortByAsc(){
        this.arr.sort();
        return this.arrayToSet();
    }
    sortByDrsc(){
        this.arr.sort ((a , b) => a > b ? -1 : 1);
        return this.arrayToSet();

    }
    //pagal stringo ilgį DESC
    sortByDESC(){
        this.arr.sort ((a,b) => a.length - b.length);
        return this.arrayToSet();
        }
    //pagal paskutinį simbolį ASC, paskutine raide
    sortByASCsimbol(){
        this.arr.sort ((a , b) => a [a.length -1] < b [b.length -1] ? -1 : 1);
        return this.arrayToSet();
        }

}


const sorter2 = new SetSorter (new Set(['LTV', 'TV3', 'LNK', 'Polonia', 'SAT1']));


console.log (sorter2.sortByAsc());
console.log (sorter2.sortByDrsc());
console.log (sorter2.sortByDESC());
console.log (sorter2.sortByASCsimbol());





//3. Padaryti kad užrašius sorter.sortByAsc(['bla', 'ku ku', 'bam bam']) 
// būtų išrušiuotas ir grąžintas masyvas, kuris pateikiamas kaip argumentas
console.log('------------- 3 uzd--------');



// objektiniai uzdaviniai
//4 https://docs.google.com/document/d/1ptHMRiS6A_k3t67VV1JbuTyv5hfxoBLu1RucCJjTyl4/edit

console.log('-------ND 1 uzd--------');
// 1 Sukurti klasę Kibiras1. Konstruktoriuje Sukurti savybę akmenuKiekis  kuri lygi 0.
// Parašyti šiai savybei metodus prideti1Akmeni() pridetiDaugAkmenu($kiekis) ir metodą 
// išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). Sukurti kibiro objektą ir 
// pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.

class Kibiras1 {
    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis ++;
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
    }

    kiekPririnktaAkmenu() {
        console.log('Akmenų yra va tiek:', this.akmenuKiekis);
    }
}

const kibiras = new Kibiras1();
const viedras = new Kibiras1();
const kasikas = new Kibiras1();


kibiras.kiekPririnktaAkmenu();
viedras.kiekPririnktaAkmenu();
kasikas.kiekPririnktaAkmenu();
console.log('------------------------------');

viedras.prideti1Akmeni(100);


kibiras.kiekPririnktaAkmenu();
viedras.kiekPririnktaAkmenu();
kasikas.kiekPririnktaAkmenu();
console.log('------------------------------');


kasikas.pridetiDaugAkmenu(22);
viedras.pridetiDaugAkmenu(22);


kibiras.kiekPririnktaAkmenu();
viedras.kiekPririnktaAkmenu();
kasikas.kiekPririnktaAkmenu();
console.log('------------------------------');



// 2. Sukurti klasę Piniginė. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir 
// metaliniaiPinigai. Parašyti metodą ideti($kiekis), kuris prideda pinigus į piniginę. 
// Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- 
// prie popieriniaiPinigai. Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir
//  išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. 
//  Sukurti klasės objektą ir pademonstruoti veikimą. 
//  Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.

console.log('-------ND 2 uzd--------');

class Pinigine {

    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
    }

    ideti(kiekis) {
        if (kiekis <= 2) {
            this.metaliniaiPinigai += kiekis;
        }
        else {
            this.popieriniaiPinigai += kiekis;
        }
    }

    skaiciuoti() {
        console.log('Yra va tiek pinigų', this.metaliniaiPinigai + this.popieriniaiPinigai);
    }
} 

const odinePinigine = new Pinigine();
const plastikinePinigine = new Pinigine();

odinePinigine.skaiciuoti();
plastikinePinigine.skaiciuoti();
console.log('------------------------------');

odinePinigine.ideti(235);
plastikinePinigine.ideti(0.87);
odinePinigine.ideti(100);
plastikinePinigine.ideti(1);
odinePinigine.ideti(100);
plastikinePinigine.ideti(10);

odinePinigine.skaiciuoti();
plastikinePinigine.skaiciuoti();
console.log('------------------------------');



console.log ('4 uzdotis');
// Sukurti klasę PirkiniuKrepšelis. Konstruktoriuje sukurti savybę turinys, kuri yra Map 
// tipo objektas. Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), 
// idetiDuonos(kiekis). Parašyti metodą krepselioTurinys(), kuris į konsolę išvestų 
// produktų sąrašą (turinys kintamąjį). Pridėti tuos pačius produktus galima po kelis 
// kartus, tokiu atveju produktų kiekis turetu sumuotis




class PirkiniuKrepselis {
    constructor () {
        this.turinys = new Map ();
    }

    idetiSureli(kiekis){
        if (this.turinys.has('sureliai')){
            const t = this.turinys.get ('sureliai');
            this.turinys.set ('sureliai', kiekis + t);
        }
        else {
            this.turinys.set('sureliai', kiekis);
        }
    }
        idetiPieno(kiekis) {
            if (this.turinys.has('pienas')){
                const t = this.turinys.get ('pienas');
                this.turinys.set ('pienas', kiekis + t);
            }
            else {
                this.turinys.set('pienas', kiekis);
            }
        }
        idetiDuonos(kiekis){
            if (this.turinys.has('duona')){
                const t = this.turinys.get ('duona');
                this.turinys.set ('duona', kiekis + t);
                }
            else {
                this.turinys.set('duona', kiekis);
                }
            }
   krepselioTurinys(){
     console.log('KR TR', this.turinys);
    }
}

// nesivesta ir nebaigta


console.log ('3 uzdotis');
// Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri
// yra lygi 0. Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). 
// O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių 
// keleivių skaičių.

class Troleibusas{
    constructor(){
        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius;
    }
    
    islipa(keleiviuSkaicius){
        if (keleiviuSkaicius > this.keleiviuSkaicius){
            console.log ('per daug islipa');
            this.keleiviuSkaicius = 0;
        }
        else{
            this.keleiviuSkaicius -= keleiviuSkaicius;
        }

    }

    vaziuoja(){
        console.log ('troleibusu važiuojančių keleivių skaičių', this.keleiviuSkaicius);
    }

}



const trulikas = new Troleibusas;


trulikas.vaziuoja( );
console.log('------------------------------');


trulikas.ilipa(20);
trulikas.ilipa(15);
trulikas.islipa(5);

trulikas.vaziuoja( );
console.log('------------------------------');





console.log ('7 uzdotis');
// 7. Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys turi savybę dydis,
// kuriai konstriktoriuje yra priskiriama reikšmė 500. Grybas turi tris savybes, 
// kurios taip pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris. 
// Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija)
//  priskiriamos taip: valgomas- true arba false, sukirmijes- true arba false ir 
//  svoris- nuo 5 iki 45. Eiti grybauti, t.y. Kurti naujus Grybas objektus, 
//  jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą, kol bus pririnktas pilnas
//  krepšys nesukirmijusių ir valgomų grybų (gali būti truputį daugiau nei dydis).


class Grybas {
    constructor () {

    }






}



class Krepsys {
    constructor(){
        this.dydis = 500;
        this.arr = [];
    }

}



console.log (Krepsys);




console.log ('NAUJA TEMA <static> ');
//(STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), 
// kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose.
// Tam tikslui sukurkite statini metodą bendrasKeleiviuSkaicius(keleiviuSkaicius),
// kuris pridėtų arba atimtų keileivius iš statinės savybės visiKeleiviai, kurioje 
// yra įrašytas bendras keleivių skaičius. Taip pat modifikuokite metodus 
// ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).



class STATICTroleibus{


    
    constructor(){
        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius;
    }
    
    islipa(keleiviuSkaicius){
        if (keleiviuSkaicius > this.keleiviuSkaicius){
            console.log ('per daug islipa');
            this.keleiviuSkaicius = 0;
        }
        else{
            this.keleiviuSkaicius -= keleiviuSkaicius;
        }

    }

    vaziuoja(){
        console.log ('troleibusu važiuojančių keleivių skaičių', this.keleiviuSkaicius);
    }

}



const Statictrulikas = new STATICTroleibus;


Statictrulikas.vaziuoja( );
console.log('------------------------------');


Statictrulikas.ilipa(20);
Statictrulikas.ilipa(15);
Statictrulikas.islipa(5);

Statictrulikas.vaziuoja( );
console.log('------------------------------');
