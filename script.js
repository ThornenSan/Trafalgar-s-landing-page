function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
};

// //slider

// const track = document.querySelector('.slider-container');
// const slides = Array.from(track.children);
// const nextBtn = document.querySelector('.carousel__button--right');
// const prevBtn = document.querySelector('.carousel__button--left');
// const currentSlide = document.querySelector('.current-slide');


// const slideSize = slides[0].getBoundingClientRect().width;
// console.log(slideSize);
// console.log(slides);


// // slide bullet

// const dotsNav = document.querySelector('.slider-bullet-container');
// const dots = Array.from(dotsNav.children);


// dotsNav.addEventListener('click', e => {
//     const targetDot = e.target.closest('li');

//     if (!targetDot) return;

//     const currentDot = dotsNav.querySelector('.current-slide');
//     // const targetIndex = dots.findIndex(dot => dot === targetDot);

//     currentDot.classList.remove('current-slide');
//     targetDot.classList.add('current-slide');

// })



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider-card");
    var dots = document.getElementsByClassName("bullet");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

