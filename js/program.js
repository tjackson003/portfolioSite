// CAROUSEL LOGIC

var carousel = document.querySelector('#workCaro');
var figure = carousel.querySelector('figure');
var leftNav = carousel.querySelector('.leftArrow');
var rightNav = carousel.querySelector('.rightArrow');
var numImages = figure.childElementCount;
var theta = 2 * Math.PI / numImages;
var currImage = 0;

leftNav.addEventListener('click', onClick, true);
rightNav.addEventListener('click', onClick, true);

function onClick(e) {
    e.stopPropagation();

    var t = e.target;
    if (t.tagName.toUpperCase() != 'IMG') {
        return;
    }
    
    if (t.classList.contains('next')) {
        currImage++;
    }
    else {
        currImage--;
    }

    figure.style.transform = `rotateY(${currImage * -theta}rad)`;
}

// PROJECT MODAL LOGIC