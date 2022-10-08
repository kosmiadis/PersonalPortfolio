const projectsContainer = document.querySelector(".projects-container");
const projectsBtn = document.querySelector('.projects-btn')

projectsBtn.addEventListener('click', e => {
    projectsContainer.scrollIntoView({behavior: "smooth"});
})