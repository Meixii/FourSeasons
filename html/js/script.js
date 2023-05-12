// Main Logo Redirect Delay
const swapWebBtn = document.getElementById('swapWeb');
swapWebBtn.addEventListener('click', () => {
    swapWebBtn.classList.add('main-logo-shrink')
    setTimeout(() => {
        window.location.href ='html/home.html';
    }, 1500);
})

// Switch Window
function show(shown, hidden){
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}