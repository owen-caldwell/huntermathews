const main = document.querySelector('main');
const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

if (viewportWidth > 1024) {
    main.addEventListener('wheel', function(e) {
        e.preventDefault();
        main.scrollLeft += e.deltaY;
    });
}