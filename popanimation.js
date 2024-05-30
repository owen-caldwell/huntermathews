let galleryImages = document.querySelectorAll('.gallery-image');

galleryImages.forEach((img) => {
    img.addEventListener('mouseover', function() {
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