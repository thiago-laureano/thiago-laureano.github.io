
/*=============== Toggle icone-navbar ===============*/
let menuIcon = document.querySelector('#icone-menu');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*=============== Scroll Sections Active Link ===============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*=============== Sticky navbar ===============*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);


/*=============== Remove Toggle icone-navbar quando clicar ===============*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};


/*=============== Scroll Reveal ===============*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .servicos-conteudo, .projetos-box, .falecomigo form, .sobre-img', { origin: 'bottom' });