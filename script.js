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