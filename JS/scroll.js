const projectsContainer = document.querySelector(".projects-container");
const projectsBtn = document.querySelector('.projects-btn')
const contactBtn = document.querySelector('.contact-btn')


projectsBtn.addEventListener('click', e => {
    projectsContainer.scrollIntoView({behavior: "smooth"});
})

contactBtn.addEventListener('click', e => {

})