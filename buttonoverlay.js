document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('image-wrapper');
    const leftButton = document.querySelector('left-button');
    const rightButton = document.querySelector('right-button');
    const halfWidth = carousel.clientWidth / 2;

    leftButton.addEventListener('click', function() {
        carousel.scrollBy({
            left: -halfWidth,
            behavior: 'smooth'
        });
    });

    rightButton.addEventListener('click', function() {
        carousel.scrollBy({
            left: halfWidth,
            behavior: 'smooth'
        });
    });
});