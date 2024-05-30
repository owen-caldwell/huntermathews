document.querySelectorAll('img').forEach(img => {
    img.oncontextmenu = function(e) {
        e.preventDefault();
    };
});