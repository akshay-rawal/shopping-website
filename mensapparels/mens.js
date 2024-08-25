const slides = document.querySelector('.slides');
let index = 0;

function showNextSlide() {
    index++;
    if (index >= slides.children.length) {
        index = 0;
    }
    slides.style.transform = `translateX(${-index * 100}%)`;
}


 