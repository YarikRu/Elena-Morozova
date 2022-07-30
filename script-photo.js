let menu = document.querySelector(".menu");

menu.onclick = function() {
    menuPhone = document.querySelector(".menu-phone")
    menuPhone.classList.toggle("active")
}


let photo = document.querySelectorAll(".photo img");
let bigPhoto = document.querySelector('.big-photo');
let closeImg = document.querySelector('#btn-close');
let exchangeImg = document.querySelector('.border img');
let head = document.querySelector('.header');
let left = document.querySelector('#btn-left');
let right = document.querySelector('#btn-right');


closeImg.onclick = function() {
    bigPhoto.style.display = "none";
    head.style.display = "block";
}

photo.forEach(somePhoto => somePhoto.addEventListener('click', function() {
    head.style.display = 'none';
    let currentSlide = document.querySelector('.active');
    bigPhoto.style.display = 'block';
    exchangeImg.src = somePhoto.src;
    currentSlide.classList.remove('active');
    console.log(somePhoto);
    somePhoto.classList.add('active')
    })
)

function rightlide() {
    let currentSlide = document.querySelector('.active');
    currentSlide.classList.remove('active');

    let nextSlide = currentSlide.nextElementSibling;

    if(nextSlide) {
        nextSlide.classList.add('active');
    }
    else {
        nextSlide = document.querySelector('.photo img');
        nextSlide.classList.add('active');
    }
    exchangeImg.src = nextSlide.src;
}

function leftSlide() {
    let currentSlide = document.querySelector('.active');
    currentSlide.classList.remove('active');

    let lastSlide = currentSlide.previousElementSibling;

    if(lastSlide) {
        lastSlide.classList.add('active');
    }
    else {
        lastSlide = document.querySelector('.photo img:last-child');
        lastSlide.classList.add('active');
    }
    exchangeImg.src = lastSlide.src;
}

right.onclick = function() {
rightlide();
}

left.onclick = function() {
    leftSlide();
}

// swipe for mobile!
bigPhoto.addEventListener('touchstart', handleTouchStart, false);
bigPhoto.addEventListener('touchmove', handleTouchMove, false);

let x = null;

function handleTouchStart(event) {
    let firstTouch = event.touches[0];
    x = firstTouch.clientX;
}

function handleTouchMove(event) {
    if(!x) {
        return false;
    }
    let x1 = event.touches[0].clientX;
    let xDiff = x1 - x;

    if(xDiff > 0) { leftSlide() }
    else { rightlide() }

    x = null;
}
