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

// jenis hadiah
document.addEventListener('DOMContentLoaded', function () {
    const faqContainers = document.querySelectorAll('.jenis-hadiah-container');

    faqContainers.forEach(container => {
        const question = container.querySelector('.tipe-hadiah');
        const answer = container.querySelector('.hadiah-info');
        const icon = question.querySelector('i');

        question.addEventListener('click', function () {
            const isOpen = answer.style.display === 'flex';

            // Reset all questions
            faqContainers.forEach(c => {
                c.querySelector('.hadiah-info').style.display = 'none';
                c.querySelector('.tipe-hadiah').style.borderRadius = '10px';
                c.querySelector('.tipe-hadiah').style.borderBottom = 'none';
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

// Transaction
document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll(".sampah-checkbox");
    const generateCodeButton = document.getElementById("generate-code");

    const anyCheckboxChecked = () => {
        return Array.from(checkboxes).some(checkbox => checkbox.checked);
    };

    const updateGenerateCodeButton = () => {
        generateCodeButton.disabled = !anyCheckboxChecked();
    };

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            updateGenerateCodeButton();
        });
    });

    generateCodeButton.addEventListener("click", () => {
        if (!anyCheckboxChecked()) {
            alert("Pilih setidaknya satu item terlebih dahulu!");
        } else {
            window.location.href = '../barcode-page/scanbarcode.html';
        }
    });

    const updateCounter = (target, delta) => {
        const countElement = document.getElementById(`count${target.charAt(0).toUpperCase() + target.slice(1)}`);
        let count = parseInt(countElement.value);
        count += delta;
        if (count < 0) count = 0;
        countElement.value = count;
    };

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            const target = checkbox.dataset.target;
            const countElement = document.getElementById(`count${target.charAt(0).toUpperCase() + target.slice(1)}`);
            if (checkbox.checked) {
                countElement.value = "1";
            } else {
                countElement.value = "0";
            }
        });
    });

    document.querySelectorAll(".plus").forEach(button => {
        button.addEventListener("click", () => {
            const target = button.dataset.target;
            const checkbox = document.querySelector(`#sampah${target.charAt(0).toUpperCase() + target.slice(1)}`);
            if (!checkbox.checked) checkbox.checked = true;
            updateCounter(target, 1);
        });
    });

    document.querySelectorAll(".minus").forEach(button => {
        button.addEventListener("click", () => {
            const target = button.dataset.target;
            updateCounter(target, -1);
            const countElement = document.getElementById(`count${target.charAt(0).toUpperCase() + target.slice(1)}`);
            if (parseInt(countElement.value) === 0) {
                const checkbox = document.querySelector(`#sampah${target.charAt(0).toUpperCase() + target.slice(1)}`);
                checkbox.checked = false;
            }
        });
    });

    document.querySelectorAll("input[type='number']").forEach(input => {
        input.addEventListener("input", () => {

            if (input.value.startsWith('0') && input.value.length > 1) {
                input.value = input.value.replace(/^0+/, '');
            }

            const target = input.id.replace('count', '').toLowerCase();
            const checkbox = document.querySelector(`#sampah${target.charAt(0).toUpperCase() + target.slice(1)}`);
            if (parseInt(input.value) > 0) {
                if (!checkbox.checked) checkbox.checked = true;
            } else {
                if (checkbox.checked) checkbox.checked = false;
                input.value = 0;
            }
        });
    });
});
// end