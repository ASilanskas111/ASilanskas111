let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("foto");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

console.log (showSlides);



console.log('_______________kitassss________')


const labas=document.querySelector ('[name=labas]');

labas.addEventListener ('input', () => {
    console.log(labas.value);

});



// const pimg = document.querySelectorAll('[name=p]');

// p.addEventListener('input', (s) => {
//     console.log(p.value);
//     img.setAttribute ('src', img.dateset [s.target.value])

    
// });


console.log('_______selektas iš 3 pasirinkimų, kiekvienas iš jų įrašo pasveikinimą į h1 tagą');


const h1Do = h1;

const html = '<h2>Labas Vakaras</h2>';

h1Do.addEventListener('click', () => {

    const valueText = h1Input.value;

    h1.innerText = valueText;

})