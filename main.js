

const navigation = document.getElementById('navigation');
const backButton = document.getElementById('backToTopButton');

function onScroll() {
    showNavOnScroll()
    backToTop()
    activeMenuAtCurrentSection(home)
    activeMenuAtCurrentSection(services)
    activeMenuAtCurrentSection(about)
    
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

function activeMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2

    const sectionTop = section.offsetTop

    const sectionHeight = section.offsetHeight

    // O topo da sessão chegou ou passou da linha alvo
    const sectionTopReachOrPassTargetLine = targetLine >= sectionTop
    const sectionEndAt = sectionTop + sectionHeight

    const sectionEndPassedTargetLine = sectionEndAt <= targetLine


    // Limite da sessão 
    const sectionBoundaries = sectionTopReachOrPassTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if(sectionBoundaries) {
        menuElement.classList.add('active')
    } else {
        menuElement.classList.remove('active')
    }
    

    // console.log("O topo da seção chegou ou passou da linha?", sectionTopReachOrPassTargetLine)

    // console.log("O fundo da sessão passou da linha? ", sectionEndPassedTargetLine)

    // console.log("Esta dentro dos limites da sessão? ", sectionBoundaries)
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


