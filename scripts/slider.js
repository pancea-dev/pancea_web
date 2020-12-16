const slider = () => {
    const contentOne = document.querySelector('.slider-content-one');
    const contentTwo = document.querySelector('.slider-content-two');
    const contentThree = document.querySelector('.slider-content-three');
    const contentFour = document.querySelector('.slider-content-four');
    
    const leftArrowOne = document.querySelector('.left-arrow-one');
    const rightArrowOne = document.querySelector('.right-arrow-one');
    
    const leftArrowTwo = document.querySelector('.left-arrow-two');
    const rightArrowTwo = document.querySelector('.right-arrow-two');
    
    const leftArrowThree = document.querySelector('.left-arrow-three');
    const rightArrowThree = document.querySelector('.right-arrow-three');
    
    const leftArrowFour = document.querySelector('.left-arrow-four');
    const rightArrowFour = document.querySelector('.right-arrow-four');
    
    
    leftArrowOne.addEventListener('click', () => {
        contentOne.classList.add('slider-content-inactive');
        contentOne.classList.remove('slider-content-active');
        contentThree.classList.add('slider-content-active');
    });
    
    rightArrowOne.addEventListener('click', () => {
        contentOne.classList.remove('slider-content-active');
        contentOne.classList.add('slider-content-inactive');
        contentTwo.classList.add('slider-content-active');
    });
    
    
    leftArrowTwo.addEventListener('click', () => {
        contentTwo.classList.remove('slider-content-active');
        contentOne.classList.add('slider-content-active');
    });
    
    rightArrowTwo.addEventListener('click', () => {
        contentTwo.classList.remove('slider-content-active');
        contentThree.classList.add('slider-content-active');
    });
    
    
    leftArrowThree.addEventListener('click', () => {
        contentThree.classList.remove('slider-content-active');
        contentTwo.classList.add('slider-content-active');
    });
    
    rightArrowThree.addEventListener('click', () => {
        contentThree.classList.remove('slider-content-active');
        contentOne.classList.add('slider-content-active');
    });

}

slider();