const swiper = document.querySelector('.swiper')
const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')

const swiperImgs = swiper.querySelectorAll('img')
let index = 0


const Swiper = (() => {
    
    const addToIndex = () => {
        if (index == 1) {
            index--
        }
        index ++
    }

    const abstractIndex = () => {
        if (index == 0) {
            index ++
        }
        index--
    }

    const updateSwiper = () => {
        swiperImgs.forEach(img => img.style.display = 'none')
        swiperImgs[index].style.display = 'block'
    
    }
    
    
    return {addToIndex, abstractIndex, updateSwiper}
})()


window.addEventListener('load', e => {
    Swiper.updateSwiper()
})
rightArrow.addEventListener('click', e => {
    Swiper.addToIndex()
    Swiper.updateSwiper()
    e.target.style.color = 'grey'
    leftArrow.style.color = 'white'

})

leftArrow.addEventListener('click', e => {
    Swiper.abstractIndex()
    Swiper.updateSwiper()
    e.target.style.color = 'grey'
    rightArrow.style.color = 'white'
})