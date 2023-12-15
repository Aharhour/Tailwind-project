document.addEventListener('DOMContentLoaded', function () {
    const heroText = document.querySelector('.myheader h1');
    heroText.style.opacity = 0;

    const fadeIn = () => {
        let opacity = 0;
        const interval = setInterval(() => {
            if (opacity < 1) {
                opacity += 0.1;
                heroText.style.opacity = opacity;
            } else {
                clearInterval(interval);
            }
        }, 100);
    };

    fadeIn();
});

function showAlert() {
    alert('Button clicked!');
}