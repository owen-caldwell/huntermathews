document.querySelector('#hamburger').addEventListener('click', function() {
    const menu = document.querySelector('.hamburger-menu');
    const hamburger = document.querySelector('#hamburger');

    if (menu.style.height === '0px' || menu.style.height === '') {
        menu.style.height = '100vh';
        hamburger.src = 'close.svg';
    } else {
        menu.style.height = '0px';
        hamburger.src = 'hamburger.svg';
    }
});