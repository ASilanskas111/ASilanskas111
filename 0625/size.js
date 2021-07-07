console.log ('____2021 06 26 _NAUJA PAMOKA___')

//eventai: 
// 1 eventas (js resize event)
// https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event


const mobSize = 700;
let currentSize;

window.addEventListener('risize', reportWindowSize);

//finkcija dar nepaleista, dedam lisneri, laukia kol uzsikrauna dom'as ir paleidzia eventa

window.addEventListener('DOMContentLoaded' , () => {

    heightOutput = document.querySelector('#height');
    widthOutput = document.querySelector('#width');
    reportWindowSize();
});


let heightOutput, widthOutput;

function reportWindowSize() {
    console.log ('go');
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
}


function changeSize(){
    let change = currentSize;
    if (!currentSize){
        currentSize = window.innerWidth;

        if (window.innerHeight > mobSize){
        currentSize = 'desktop';
         }
         else{
        currentSize = 'mobile';
        }
    }
}


// 2-as eventas (js scroll event)
// https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event


let scrollOutput, menu;
const fromTop = 30;



window.addEventListener('scroll', () => {
    reportWindowScroll();
});

window.addEventListener('DOMContentLoaded', () => {
    scrollOutput = document.querySelector('#scroll');
    menu = document.querySelector('#menu');
    changeSize();
    reportWindowScroll();
});


function reportWindowScroll() {
    console.log('go');
    scrollOutput.textContent = window.scrollY;
    changeSize();
}

function changeSize() {
    let change = currentSize;
    if (window.scrollY > fromTop) {
        currentSize = 'small';
    }
    else {
        currentSize = 'full';
    }
    if (change !== currentSize) {
        if(currentSize === 'small') {
            menu.style.height = '20px';
        }
        else {
            menu.style.height = '30px';
        }
        console.log('Change menu to '+ currentSize);
    }
}


