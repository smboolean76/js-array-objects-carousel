'use strict';

/*-------------
    DATA
--------------*/
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

/*-------------
    FUNCTIONS
--------------*/
function setCurrentImage() {
    currentImageContainer.querySelector('img').src = images[currentImageIndex].image;
    currentImageContainer.querySelector('img').alt = images[currentImageIndex].title;
    currentImageContainer.querySelector('.current-image-text h3').innerHTML = images[currentImageIndex].title;
    currentImageContainer.querySelector('.current-image-text p').innerHTML = images[currentImageIndex].text;
}
function changeSlide(direction) {
    // Rimuovo la classe active dalla thumb attiva
    thumbs[currentImageIndex].classList.remove('active');
    // Incremento il currentImageIndex
    if( direction === 'next' ) {
        if( currentImageIndex < images.length - 1 ) {
            currentImageIndex++;
        } else {
            currentImageIndex = 0;
        }
    } else if( direction === 'prev' ) {
        if( currentImageIndex > 0 ) {
            currentImageIndex--;
        } else {
            currentImageIndex = images.length - 1;
        }
    }
    // aggiungo la classe active alla thumb successiva
    thumbs[currentImageIndex].classList.add('active');
    // modifico l'immagine e il testo della current image (quella grande a sinistra)
    setCurrentImage();
}
/*-------------
    CONF
--------------*/
let currentImageIndex = 0;
const currentImageContainer = document.querySelector('.current-image');
const thumbsContainer = document.querySelector('.thumbs');
/*-------------
    MAIN
--------------*/
// Inizializzo la currentImage
setCurrentImage();

// Creo le Thumbs
images.forEach((elm, index) => {
    // Clono il template delle thumb
    const templateThumb = document.getElementById('thumb').content.cloneNode(true);
    // Compilo l'html del template appena clonato
    // SE l'elemento su cui sto ciclando ha l'indice === currentImageIndex gli applica la classe active
    if( index === currentImageIndex ) {
        templateThumb.querySelector('.thumb').classList.add('active');
    }
    templateThumb.querySelector('img').src = elm.image;
    templateThumb.querySelector('img').alt = elm.title;
    // Appendo il template nel thumbs container
    thumbsContainer.append(templateThumb);
});

// Seleziono tutte le thumbs
const thumbs = document.querySelectorAll('.thumb');
// Next Slide
const btnNextSlide = document.querySelector('.next-slide');
btnNextSlide.addEventListener('click', function() {
    changeSlide('next');
});
// Prev Slide
const btnPrevSlide = document.querySelector('.prev-slide');
btnPrevSlide.addEventListener('click', function() {
    changeSlide('prev');
});

// autoplay
// let autoplay = setInterval(function() {
//     changeSlide('prev');
// }, 2000);