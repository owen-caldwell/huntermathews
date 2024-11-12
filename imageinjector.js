document.addEventListener("DOMContentLoaded", function() {
    // Get the image parent element
    let imageParent = document.querySelector("grid-container");
    // Some of my pages have the image parent element as image-wrapper, so I have to include this conditional, but it is not necessary.
    if (!imageParent) {
        imageParent = document.querySelector("image-wrapper");
    }
    const baseName = imageParent.getAttribute("data-imgname");
    const imageCount = imageParent.getAttribute("data-imgcount"); // Number of images

    for (let i = 1; i <= imageCount; i++) {
        const imgSlide = document.createElement("img-slide");
        const img = document.createElement("img");
        // Setting the srcset attribute for responsive images
        img.setAttribute("srcset", `
            dump/${baseName}_${i}_1500.webp 1500w,
            dump/${baseName}_${i}_1080.webp 1080w,
            dump/${baseName}_${i}_700.webp 700w
        `);
        // Setting the src attribute for fallback
        img.setAttribute("src", `dump/${baseName}_${i}_1500.webp`);
        img.setAttribute("alt", "");

        imgSlide.appendChild(img);
        imageParent.appendChild(imgSlide);
    }
});