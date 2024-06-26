function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

document.addEventListener('scroll', function() {
    const header = document.querySelector('nav');

    if (window.scrollY > 0){
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

// Form Start
const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText =  '';
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
};

const isValidEmail = email =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () =>{
    const emailValue = email.value.trim();

    if(emailValue === ''){
        setError(email, '*Anda belum memasukkan alamat email');
    }else if (!isValidEmail(emailValue)){
        setError(email, '*masukkan email yang valid');
    }else{
        setSuccess(email);
    }

    if (isFormValid()) {
        window.location.href = '../login-register-page/replatelogin.html';
    }
};

const checkFormValidity = () => {
    const inputControls = form.querySelectorAll('.input-control');
    let allValid = true;

    inputControls.forEach(inputControl => {
        if(inputControl.classList.contains('error') || !inputControl.classList.contains('success')) {
            allValid = false;
        }
    });

    submitButton.disabled = !allValid;
};

const isFormValid = () => {
    const inputControls = form.querySelectorAll('.input-control');
    return Array.from(inputControls).every(inputControl => inputControl.classList.contains('success'));
};

checkFormValidity();
// end