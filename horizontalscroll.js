document.addEventListener('DOMContentLoaded', function() {
    // Select the container element (direct parent of the images)
    const container = document.querySelector('image-wrapper');
    
    container.addEventListener('wheel', function(event) {

        // Translate vertical scroll into horizontal scroll
        container.scrollLeft += event.deltaY;
    });
});