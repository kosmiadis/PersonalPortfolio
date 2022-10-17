const portfolioContainer = document.querySelector('.projects-container')
const portfolioBtn = document.querySelector('.portfolio-btn')
const contactContainer = document.querySelector(".contact")
const contactBtn = document.querySelector('.contact-btn')


portfolioBtn.addEventListener('click', e => {
    portfolioContainer.scrollIntoView({behavior: "smooth"});
})

contactBtn.addEventListener('click', e => {
    contactContainer.scrollIntoView({behavior: "smooth"})
})