const btnEl = document.querySelector('.btn');

const toggleOptions = () => {
    const wrapperEl = document.querySelector('.wrapper');
    const iconEl = btnEl.querySelector('i');

    wrapperEl.classList.toggle('active');

    if (iconEl.classList.contains('bi bi-share')) {
        iconEl.classList.replace('bi bi-share', 'bi bi-x');
    } else {
        iconEl.classList.replace('bi bi-x', 'bi bi-share');
    }
};

btnEl.addEventListener('click', toggleOptions);