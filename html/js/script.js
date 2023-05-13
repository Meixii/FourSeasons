// Mute button
var audio = document.getElementById("audio");
var muteButton = document.getElementById("mute-button");

muteButton.addEventListener("click", function() {
    if (audio.muted) {
        audio.muted = false;
        muteButton.src = "html/Assets/sound.png";
    } else {
        audio.muted = true;
        muteButton.src = "html/Assets/no-sound.png";
    }
});

// Fade out when switching webpage
function fadeOutAudio() {
let volume = 1;
const interval = setInterval(() => {
volume -= 0.1;
audio.volume = volume;
if (volume <= 0) {
clearInterval(interval);
audio.pause();
}
}, 100);
}

// Main Logo Redirect Delay
const swapWebBtn = document.getElementById('swapWeb');
swapWebBtn.addEventListener('click', () => {
    swapWebBtn.classList.add('main-logo-shrink');

    fadeOutAudio();

    setTimeout(() => {
        window.location.href ='html/home.html';
    }, 1500);
})
