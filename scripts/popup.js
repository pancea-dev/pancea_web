const popup = () => {
    const getStarted = document.querySelector('.js-button')
    const popup = document.querySelector('.popup')
    const darken = document.querySelector('.darken')
    const dismiss = document.querySelector('.nav .dismiss');
    const dismissMin = document.querySelector('.nav-min .dismiss');
    const back = document.querySelector('.back')

    const nav = document.querySelector('.nav');
    const navMin = document.querySelector('.nav-min');

    const userSelection = document.querySelector('.user-selection');
    const employerChoice = document.querySelector('.employer-choice');
    const individualChoice = document.querySelector('.individual-choice');
    const employerUser = document.querySelector('.employer-user');
    const individualUser = document.querySelector('.individual-user');

    const employerSubmit = document.querySelector('.employer-submit');
    const individualSubmit = document.querySelector('.individual-submit');
    const employerConfirmation = document.querySelector('.employer-confirmation');
    const individualConfirmation = document.querySelector('.individual-confirmation');
    
    getStarted.addEventListener('click', () => {
        popup.style.transform = 'translateY(0)';
        darken.style.display = 'block';
    });

    darken.addEventListener('click', () => {
        popup.style.transform = 'translateY(120vh)';
        darken.style.display = 'none';
    });

    dismiss.addEventListener('click', () => {
        popup.style.transform = 'translateY(120vh)';
        darken.style.display = 'none';
    });

    dismissMin.addEventListener('click', () => {
        popup.style.transform = 'translateY(120vh)';
        darken.style.display = 'none';
    });

    back.addEventListener('click', () => {
        employerUser.style.display = 'none';
        individualUser.style.display = 'none';
        userSelection.style.display = 'block';
        nav.style.display = 'none';
        navMin.style.display = 'flex';
    });

    employerChoice.addEventListener('click', () => {
        nav.style.display = 'flex';
        navMin.style.display = 'none';
        userSelection.style.display = 'none';
        employerUser.style.display = 'block';
    });

    individualChoice.addEventListener('click', () => {
        nav.style.display = 'flex';
        navMin.style.display = 'none';
        userSelection.style.display = 'none';
        individualUser.style.display = 'block';
    });

    employerSubmit.addEventListener('click', () => {
        nav.style.display = 'none';
        navMin.style.display = 'flex';
        employerUser.style.display = 'none';
        employerConfirmation.style.display = 'block'
    });

    individualSubmit.addEventListener('click', () => {
        nav.style.display = 'none';
        navMin.style.display = 'flex';
        individualUser.style.display = 'none';
        individualConfirmation.style.display = 'block'
    });


}

popup();