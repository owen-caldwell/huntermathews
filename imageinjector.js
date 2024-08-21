document.addEventListener("DOMContentLoaded", function() {
    let imageParent = document.querySelector("grid-container");
    if (!imageParent) {
        let imageParent = document.querySelector("image-wrapper");
    }
    const baseName = imageParent.getAttribute("data-imgname");
    const imageCount = imageParent.getAttribute("data-imgcount"); // Number of images

    for (let i = 1; i <= imageCount; i++) {
        const imgSlide = document.createElement("img-slide");
        const img = document.createElement("img");

        img.setAttribute("srcset", `
            dump/${baseName}_${i}_1500.webp 1500w,
            dump/${baseName}_${i}_1080.webp 1080w,
            dump/${baseName}_${i}_700.webp 700w
        `);
        img.setAttribute("src", `dump/${baseName}_${i}_1500.webp`);
        img.setAttribute("alt", "");

        imgSlide.appendChild(img);
        imageParent.appendChild(imgSlide);
    }
});