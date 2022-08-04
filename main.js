

const navigation = document.getElementById('navigation');
const backButton = document.getElementById('backToTopButton');

function onScroll() {
    showNavOnScroll()
    backToTop()
}

function backToTop() {
    if(scrollY > 700) {
        backButton.classList.add('show')
    } else {
        backButton.classList.remove('show')

    }
}

function showNavOnScroll() {
    if(scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')

    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}




ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,

}).reveal(`#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content, 
#contact,
#contact header,
#contact ul,
#contact li`);

ScrollReveal({origin: 'left', distance: '30px', duration:700}).reveal(`
footer .logo,
footer p,
footer .social-links
`
);
