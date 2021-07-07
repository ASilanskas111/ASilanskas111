
const mas1 = ['cat', 'bird', 'tiger', 'dog'];
console.log (mas1);


console.log ('1 isrūšiuot i abi puses');
// 1 isrūšiuot i abi puses 

mas1.sort((a, b) => {
        if (a === b) {
            return 0;
        }
        return a < b ? -1 : 1;
    });
    console.log('1a',mas1);

    
mas1.sort((a, b) => {
    if (a === b) {
        return 0;
    }
    return a > b ? -1 : 1;
})
console.log('1b',mas1);


console.log (' 2 padaryti dvi funkcijas, kurios argumentu priimtų masyvą.');
// 2 padaryti dvi funkcijas, kurios argumentu priimtų masyvą.

const entries = Object.entries(mas1);

for(i=0;i<entries.length;i++)
{
  console.log(entries[i]);
}


// 3 sukurti klasę Sorter ir parašytas funkcijas įdėti kaip statinius metodus
// class Sorter{
    
//     static sortASC(data){
//         data.sort((a,b) => {
//             if (a === b){
//             return 0;
//             }
//             return a < b ? -1, 1;
//         }   
//     }
// }



console.log (' 4 Metodus papildyti galimybe rūšiuoti Setus');
// 4 Metodus papildyti galimybe rūšiuoti Set'us 31pvz
class Sorter {

    static sortAsc(data) {
        if (data instanceof Array) {
            return this.sortArrAsc(data)
        }
        if (data instanceof Set) {
            return this.sortSetAsc(data)
        }

    }
    static sortDesc(data) {
        if (data instanceof Array) {
            return this.sortArrDesc(data)
        }
        if (data instanceof Set) {
            return this.sortSetDesc(data)
        }
    }

    static sortSetAsc(set) {
        const arr = this.sortArrAsc([...set]);
        set.clear();
        arr.forEach(v => set.add(v));
        return set;
    }

    static sortSetDesc(set) {
        const arr = this.sortArrDesc([...set]);
        set.clear();
        arr.forEach(v => set.add(v));
        return set;
    }

    static sortArrAsc(arr) {
        arr.sort((a, b) => {
            if (a === b) {
                return 0;
            }
            return a < b ? -1 : 1;
        });
        return arr;
    }
    static sortArrDesc(arr) {
        arr.sort((a, b) => {
            if (a === b) {
                return 0;
            }
            return a > b ? -1 : 1;
        });
        return arr;
    }
}


console.log(Sorter.sortAsc(mas1));
console.log(Sorter.sortDesc(mas1));

console.log (' 5 Metodus papildyti galimybe rūšiuoti Map pagal reikšmę');

// 5 Metodus papildyti galimybe rūšiuoti Map'us (pagal reikšmę)

const set1 = new Set (['cat', 'bird', 'tiger', 'dog']);
const map1 = new Map ([['medium','cat'], ['small','bird'], ['big','tiger'], ['unknown','dog']]);






// static sortArrAscM ( map, byValue = true) {
//     const key = byValue ? 1: 0;
//     const arr = [...map];

//     arr.sort((a, b) => {
//         if (a [key] === b[key]) {
//             return 0;
//         }
//         return a [key] < b [key] ? -1 :1;
//     });
//     map.clear(); //pravalom mapa 
//     arr.forEach (v => map.set (v[0], v[1]));
//     return map;
// }


// static sortArrDescM ( map, byValue = true ) {
//     // const key = byValue ? 1: 0;
//     const arr = [...map];
//     arr.sort((a, b) => {
//         if (a [key] === b [key]) {
//             return 0;
//         }
//         return a [key] > b [key] ? -1 : 1;
//     });

//     map.clear();
//       arr.forEach (v => map.set (v[0], v[1]));
//     return map;
// }


// console.log (Sorter.sortArrAscM , true);



// 6 Metodus papildyti galimybe rūšiuoti Map'us pagal raktus, 
// į funkciją paduodant atrą argumentą lygų TRUE
