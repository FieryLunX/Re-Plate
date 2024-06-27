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

// jenis sampah
document.addEventListener('DOMContentLoaded', function () {
    const faqContainers = document.querySelectorAll('.jenis-container');

    faqContainers.forEach(container => {
        const question = container.querySelector('.jenis');
        const answer = container.querySelector('.sampah-info');
        const icon = question.querySelector('i');

        question.addEventListener('click', function () {
            const isOpen = answer.style.display === 'flex';

            // Reset all questions
            faqContainers.forEach(c => {
                c.querySelector('.sampah-info').style.display = 'none';
                c.querySelector('.jenis').style.borderRadius = '10px';
                c.querySelector('.jenis').style.borderBottom = 'none';
                c.querySelector('i').classList.remove('bx-chevron-up');
                c.querySelector('i').classList.add('bx-chevron-down');
            });

            // Toggle the clicked question
            if (!isOpen) {
                answer.style.display = 'flex';
                icon.classList.remove('bx-chevron-down');
                icon.classList.add('bx-chevron-up');
            } else {
                answer.style.display = 'none';
                icon.classList.remove('bx-chevron-up');
                icon.classList.add('bx-chevron-down');
            }
        });
    });
});
// end

// Dropdown navbar
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.getElementById('dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-content');
    const chevronIcon = document.getElementById('chevron-icon');

    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault();
        const isDropdownVisible = dropdownMenu.style.display === 'block';
        dropdownMenu.style.display = isDropdownVisible ? 'none' : 'block';
        chevronIcon.classList.toggle('chevron-up', !isDropdownVisible);
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('#dropdown-toggle') && !event.target.matches('#dropdown-toggle *')) {
            if (dropdownMenu.style.display === 'block') {
                dropdownMenu.style.display = 'none';
                chevronIcon.classList.remove('chevron-up');
            }
        }
    });
});
// end