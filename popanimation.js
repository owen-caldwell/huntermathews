const images = document.querySelectorAll('main img');

images.forEach((img) => {
    img.addEventListener('mousedown', function() {
        if (window.matchMedia('(min-width: 1024px)').matches) {
            this.classList.add('pop');
            this.classList.remove('drop');
        }
    });

    img.addEventListener('mouseup', function() {
        if (window.matchMedia('(min-width: 1024px)').matches) {
            this.classList.add('drop');
            this.classList.remove('pop');
        }
    });

    img.addEventListener('mouseleave', function() {
        if (window.matchMedia('(min-width: 1024px)').matches) {
            this.classList.add('drop');
            this.classList.remove('pop');
        }
    });
});