const popup = () => {
    const learnMore = document.querySelectorAll('.js-button');
    const popup = document.querySelector('.popup');
    const darken = document.querySelector('.darken');
    const dismiss = document.querySelector('.nav .dismiss');
    const dismissMin = document.querySelector('.nav-min .dismiss');
    const back = document.querySelector('.back');

    const nav = document.querySelector('.nav');
    const navMin = document.querySelector('.nav-min');

    const userSelection = document.querySelector('.user-selection');
    const employerChoice = document.querySelector('.employer-choice');
    const individualChoice = document.querySelector('.individual-choice');
    const employerUser = document.querySelector('.employer-user');
    const individualUser = document.querySelector('.individual-user');

    const individualScriptURL = 'https://script.google.com/macros/s/AKfycbwyAU3qpj03nVOeKk1kzbi5Gt3g-c11pYINc6EHiIrdyWig3GZ8/exec';
    const individualForm = document.forms['individual-form-wrapper'];
    const employerScriptURL = 'https://script.google.com/macros/s/AKfycbwZcfrh6RGBIX7Ct3D_GP3_bwY68PVtJ-my9xltjYkIGdLIN8Q/exec';
    const employerForm = document.forms['employer-form-wrapper'];

    const employerSubmit = document.querySelector('.employer-submit');
    const individualSubmit = document.querySelector('.individual-submit');
    const employerConfirmation = document.querySelector('.employer-confirmation');
    const individualConfirmation = document.querySelector('.individual-confirmation');

    learnMore.forEach(function(el){
        el.addEventListener('click', function () {
            popup.style.transform = 'translateY(-50%)';
            darken.style.display = 'block';
            userSelection.style.display = 'block';
            individualUser.style.display = 'none';
            individualConfirmation.style.display = 'none';
            employerUser.style.display = 'none';
            employerConfirmation.style.display = 'none';
            navMin.style.display = 'flex';
            nav.style.display = 'none';

            
        });
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

     employerSubmit.addEventListener('click', e => {
        e.preventDefault();
        employerSubmit.disabled = true;
        $.ajax({
            url: employerScriptURL,
            data: $(employerForm).serialize(),
            type: 'POST',
            dataType: "json",
            statusCode: { //the status code from the POST request
                0: function(data) { //0 is when Google gives a CORS error, don't worry it went through
                //success
                    nav.style.display = 'none';
                    navMin.style.display = 'flex';
                    employerUser.style.display = 'none';
                    employerConfirmation.style.display = 'block';
                    employerSubmit.disabled = true;
                },
                200: function(data) {//200 is a success code. it went through!
                //success
                    nav.style.display = 'none';
                    navMin.style.display = 'flex';
                    employerUser.style.display = 'none';
                    employerConfirmation.style.display = 'block';
                    employerSubmit.disabled = true;
                },
                403: function(data) {//403 is when something went wrong and the submission didn't go through
                //error
                    alert('Unable to submit, please reload page and try again');
                    employerSubmit.disabled = true;
                }
            }
        })

    });

   individualSubmit.addEventListener('click', e => {
        e.preventDefault();
        individualSubmit.disabled = true;
        $.ajax({
            url: individualScriptURL,
            data: $(individualForm).serialize(),
            type: 'POST',
            dataType: "json",
            statusCode: { //the status code from the POST request
                0: function(data) { //0 is when Google gives a CORS error, don't worry it went through
                //success
                        nav.style.display = 'none';
                        navMin.style.display = 'flex';
                        individualUser.style.display = 'none';
                        individualConfirmation.style.display = 'block';
                        individualSubmit.disabled = false;
                },
                200: function(data) {//200 is a success code. it went through!
                //success
                        nav.style.display = 'none';
                        navMin.style.display = 'flex';
                        individualUser.style.display = 'none';
                        individualConfirmation.style.display = 'block';
                        individualSubmit.disabled = false;
                },
                403: function(data) {//403 is when something went wrong and the submission didn't go through
                //error
                    alert('Unable to submit, please reload page and try again');
                    individualSubmit.disabled = false;
                }
            }
        })
    });
}

popup();