

// const val of ar
//1 sprendimas

const ar= [77, 99, 105, 42];

// val grazina visada stringus, for off skiriasi nuo for in grazinimu, 
// for in grazina indeksus 

console.log ('----for of---');
for (const val of ar){
console.log (val);
}

console.log ('----for in---');
for (const val in ar){
    console.log (val);
}

console.log ('----for in---');
for (const val in ar){
    console.log (val, ar[val]);
}

//didelis skirtumas nuo 'forEach' masyvu sarasams, o 'for in' - veikia ant visko.


const obj = {a:55,z:77,r:98,y:42};

console.log ('----for in---');
for (const val in obj){
    console.log (val, obj [val]);
}


// SEt'as

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
console.log ('mySet1 = new Set');

const mySet1 = new Set

//norint i seta kazka ideti, naudojam add();

mySet1.add(1);
mySet1.add(2);
mySet1.add(2);
mySet1.add(1);

//triname vieneta su metodu .delete():
mySet1.delete(1);

mySet1.add('lai lia')
mySet1.add('lai lia')
mySet1.add({a: 1, b: 2})

const o2 = {a: 1, b: 2}

console.log (mySet1);
console.log(o2);

//tikrinam ar yra vienetas su metodu .has():
console.log('1', mySet1.has(1));

console.log ('----for of---');
for (const val of mySet1){
    console.log (val);
};


// set'e negali buti tu paciu objektu !!!

// sarišis tarp set'o ir stringo
const mySet2 = new Set ('bla bla blu');
console.log (mySet2);  // stringai isiskaido 

//sarišis tarp set'o ir masyvo
const mySet3 = new Set (['bla', 'bla', 'blu', 'Ala']);
console.log (mySet3);


//noreciau sudelioti pagal abecele, taciau set'as JS nera 
//sortinamas ir nera galimybes us set'u to padaryti. 

// Vieninterlis budas issortinti masyva !!!

const mySet4 = new Set (['bla', 'bla', 'blu', 'Ala', 'cia cia']);

const a = [...mySet4]; // objekto kopija, klonavimas, trys ... reiskia objekto isardimas
// isardem set ir jo savybes visos isardomos sudedamosiomis dalimis ir atsiranda kableliai
a.sort() // ir grazinam atgal i masyva
mySet4.clear(mySet4);
a.forEach(v => mySet4.add(v));

console.log (mySet4);
console.log (a)

console.log('json', JSON.stringify(mySet4)); /// setai ne stringifyina

console.log('---SETO PRAKTIKA---')


// 1 Sukurti setą iš 3 skirtingų stringų


const string1 = new Set (['Lia', 'Bra', 'Aia']);

// 2 Iteruoti sukurtą setą su for of
console.log ('----for of---');
for (const val of string1){
console.log ('2', val);
}

// 3 Sukuriam masyvą iš seto

const mas= [...string1]
console.log('3', mas);

//4. į sukurtą masyvą pridedame dar du skirtingus stringus

// mySet1.add ('ok', 'super') //  masyvus tik su pusch
mas.push('Tavo');
mas.push('Super');

console.log('4', mas);


// 5 iš sukurto masyvo, duomenis sukeliam atgal į setą

mas.forEach (v =>string1.add(v));
console.log('5', string1);

// 6. sukuriam naują setą, kuriame būtų seno seto stringų pirmos raidės

const u2 = new Set();
for (const v of string1) {
    u2.add( v[0] );
}
console.log('6', u2);


// 7. naują setą išrūšiuojame pagal abėcėlę

const m2 = [...u2];
m2.sort();
u2.clear();
m2.forEach(v => u2.add(v));

console.log('7', u2);