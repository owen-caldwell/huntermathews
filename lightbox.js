let images = Array.from(document.querySelector('main').querySelectorAll('img'));
let lightboxPrev = document.querySelector('.lightbox-prev');
let lightboxNext = document.querySelector('.lightbox-next');
let lightboxImg = document.querySelector('.lb-image');
let lightbox = document.querySelector('.lightbox');
let lightboxIndex = document.querySelector('.lb-counter');
let lightboxTitle = document.querySelector('.lb-title');
let currentImageIndex;

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentImageIndex = index;
        setTimeout(openLightbox, 250);
    });
});

lightboxPrev.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    setTimeout(openLightbox, 250);
});

lightboxNext.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    setTimeout(openLightbox, 250);
});

function openLightbox() {
    let img = images[currentImageIndex];
    let imgSrc = img.src;
    let imgSrcset = img.srcset;
    let imgAlt = img.alt;

    let lightbox = document.querySelector('.lightbox');
    let lightboxImg = lightbox.querySelector(".lb-image");
    lightboxImg.src = imgSrc;
    lightboxImg.srcset = imgSrcset;
    lightboxImg.alt = imgAlt;
    lightboxIndex.textContent = `${currentImageIndex + 1} / ${images.length}`;
    lightboxTitle.textContent = imgAlt;
    document.body.classList.add('lightbox-open');
    lightbox.style.display = 'flex';
}

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg && e.target !== lightboxPrev && e.target !== lightboxNext) {
        lightbox.style.display = 'none';
        lightboxImg.src = "";
        lightboxImg.srcset = "";
        lightboxImg.alt = "";
        document.body.classList.remove('lightbox-open');
    }
});