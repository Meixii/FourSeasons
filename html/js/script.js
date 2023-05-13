// Main Logo Redirect Delay
const swapWebBtn = document.getElementById('swapWeb');
swapWebBtn.addEventListener('click', () => {
    swapWebBtn.classList.add('main-logo-shrink');

    fadeOutAudio();

    setTimeout(() => {
        window.location.href ='html/home.html';
    }, 1500);
})
