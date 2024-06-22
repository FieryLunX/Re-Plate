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

// faq
document.addEventListener('DOMContentLoaded', function () {
    const faqContainers = document.querySelectorAll('.faq-container');

    faqContainers.forEach(container => {
        const question = container.querySelector('.question');
        const answer = container.querySelector('.answer');
        const icon = question.querySelector('i');

        question.addEventListener('click', function () {
            const isOpen = answer.style.display === 'block';

            // Reset all questions
            faqContainers.forEach(c => {
                c.querySelector('.answer').style.display = 'none';
                c.querySelector('.question').style.borderRadius = '10px';
                c.querySelector('.question').style.borderBottom = 'none';
                c.querySelector('i').classList.remove('bx-chevron-up');
                c.querySelector('i').classList.add('bx-chevron-down');
            });

            // Toggle the clicked question
            if (!isOpen) {
                answer.style.display = 'block';
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