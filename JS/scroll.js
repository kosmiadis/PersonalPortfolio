const portfolioTitle = document.querySelector(".portfolio-title");
const portfolioBtn = document.querySelector('.portfolio-btn')
const contactTitle = document.querySelector(".contact-title")
const contactBtn = document.querySelector('.contact-btn')


portfolioBtn.addEventListener('click', e => {
    portfolioTitle.scrollIntoView({behavior: "smooth"});
})

contactBtn.addEventListener('click', e => {
    contactTitle.scrollIntoView({behavior: "smooth"})
})