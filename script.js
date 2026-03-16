
// animação suave ao rolar

const links = document.querySelectorAll('nav a');

links.forEach(link => {

link.addEventListener('click', e => {

e.preventDefault();

const id = link.getAttribute('href');

const section = document.querySelector(id);

section.scrollIntoView({
behavior:"smooth"
});

});

});

// Hamburguer
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
menu.classList.toggle("active");
});
