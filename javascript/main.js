const navbar = document.querySelector('.menu');
const ham = document.querySelector('.ham');


const toggleHamburger = () => {
    navbar.classList.toggle('showNav');
    ham.classList.toggle('showClose');
}

const menuLinks = document.querySelectorAll(".link");

ham.addEventListener('click', toggleHamburger);
menuLinks.forEach((menuLink) => menuLink.addEventListener("click", toggleHamburger));