var observer = new IntersectionObserver(function (entries) {
    // no intersection with screen
    if (entries[0].intersectionRatio === 0) {
        document.getElementById('hidden-logo').style.opacity = '100';
        document.getElementById('hidden-button').style.opacity = '100';
    }

    // fully intersects with screen
    else if (entries[0].intersectionRatio === 1) {
        document.getElementById('hidden-logo').style.opacity = '0';
        document.getElementById('hidden-button').style.opacity = '0';
    }

}, {
    threshold: [0, 1]
});

observer.observe(document.querySelector("#nav-container-top"));


let recogImg = 2;


function recogRightPress() {
    

    for (let i = 1; i <= 3; i++) {
        document.getElementById('recog-img-' + i).style.display = 'none';
        document.getElementById('recog-indi-' + i).className = 'indicator-deselected';
    }
    document.getElementById('recog-img-' + recogImg).style.display = 'block';
    document.getElementById('recog-indi-' + recogImg).className = 'indicator-selected';
    recogImg++;
    if (recogImg == 4) {
        recogImg = 1;
    }

}

function recogLeftPress() {
    for (let i = 1; i <= 3; i++) {
        document.getElementById('recog-img-' + i).style.display = 'none';
        document.getElementById('recog-indi-' + i).className = 'indicator-deselected';
    }
    document.getElementById('recog-img-' + recogImg).style.display = 'block';
    document.getElementById('recog-indi-' + recogImg).className = 'indicator-selected';
    recogImg--;
    if (recogImg == 0) {
        recogImg = 3;
    }
}

let quoteText = 2;

function quoteRightPress() {

    for (let i = 1; i <= 7; i++) {
        document.getElementById('quote-' + i).style.display = 'none';
        document.getElementById('quote-indi-' + i).className = 'indicator-deselected';
    }
    document.getElementById('quote-' + quoteText).style.display = 'block';
    document.getElementById('quote-indi-' + quoteText).className = 'indicator-selected';
    quoteText++;
    if (quoteText >= 7) {
        quoteText = 1;
    }

}

function quoteLeftPress() {

    for (let i = 1; i <= 7; i++) {
        document.getElementById('quote-' + i).style.display = 'none';
        document.getElementById('quote-indi-' + i).className = 'indicator-deselected';
    }
    document.getElementById('quote-' + quoteText).style.display = 'block';
    document.getElementById('quote-indi-' + quoteText).className = 'indicator-selected';
    quoteText--;
    if (quoteText <= 0) {
        quoteText = 7;
    }

}