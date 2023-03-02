'use strict'

const aboutSmooth = document.querySelector('.about-smooth');
const contactSmooth = document.querySelector('.contact-smooth');

aboutSmooth.addEventListener('click', () => {
    document.querySelector('.about-me').scrollIntoView({
        behavior: "smooth", 
        block: "center", 
        inline: "nearest"
    })
});

contactSmooth.addEventListener('click', () => {
    document.querySelector('.contact-me').scrollIntoView({
        behavior: "smooth", 
        block: "center", 
        inline: "nearest"
    })
});