
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