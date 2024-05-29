const main = document.querySelector('main');
let isDown = false;
let startX;
let scrollLeft;

window.addEventListener('wheel', function(e) {
    if (window.matchMedia('(min-width: 1024px)').matches) {
        e.preventDefault();
        const scrollSpeed = 2; // Increase this to make scrolling faster
        main.scrollLeft -= e.deltaY * scrollSpeed;
    }
}, { passive: false });

main.addEventListener('mousedown', (e) => {
    if (window.matchMedia('(min-width: 1024px)').matches) {
        isDown = true;
        startX = e.pageX;
        scrollLeft = main.scrollLeft;
    }
});

main.addEventListener('mouseleave', () => {
    if (window.matchMedia('(min-width: 1024px)').matches) {
        isDown = false;
    }
});

main.addEventListener('mouseup', () => {
    if (window.matchMedia('(min-width: 1024px)').matches) {
        isDown = false;
    }
});

main.addEventListener('mousemove', (e) => {
    if (window.matchMedia('(min-width: 1024px)').matches) {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = (x - startX);
        main.scrollLeft = scrollLeft - walk;
    }
});