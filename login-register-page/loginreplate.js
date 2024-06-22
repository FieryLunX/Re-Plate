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

const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');


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


const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
   

    if(usernameValue === ''){
        setError(username, '*Anda belum memasukkan nama');
    }else{
        setSuccess(username);
    }

    if(passwordValue === ''){
        setError(password, '*masukkan password anda');
    }else if(passwordValue.length < 8){
        setError(password, '*masukkan setidaknya 8 karakter');

    }else{
        setSuccess(password);
    }

};




