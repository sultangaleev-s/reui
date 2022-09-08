import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp()

const header = document.querySelector('.header');

document.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header__active')
    } else if (window.scrollY < 50) {
        header.classList.remove('header__active')
    }
})