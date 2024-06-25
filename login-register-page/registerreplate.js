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
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

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
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        setError(username, '*Anda belum memasukkan nama');
    }else{
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email, '*Anda belum memasukkan alamat email');
    }else if (!isValidEmail(emailValue)){
        setError(email, '*masukkan email yang valid');
    }else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, '*masukkan password anda');
    }else if(passwordValue.length < 8){
        setError(password, '*masukkan setidaknya 8 karakter');

    }else{
        setSuccess(password);
    }

    if(password2Value === ''){
        setError(password2, '*Anda belum menkonfirmasi password');
    }else if(password2Value !== passwordValue){
        setError(password2, '*sandi yang dimasukkan tidak sama');
    }else{
        setSuccess(password2);
    }

    if (isFormValid()) {
        window.location.href = '../profile-page/profile.html';
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