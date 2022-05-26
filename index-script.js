var observer = new IntersectionObserver(function (entries) {

    console.log(entries[0].intersectionRatio);
    // no intersection with screen
    if (entries[0].intersectionRatio === 0) {
        document.getElementById('hidden-logo').style.opacity = '100';
        document.getElementById('hidden-button').style.opacity = '100';
        document.getElementById('sticky-navcontainer').style.display = 'flex';
        document.getElementById('banner-spacer').style.display = 'none';
    }

    // fully intersects with screen
    else if (entries[0].intersectionRatio === 1) {
        document.getElementById('hidden-logo').style.opacity = '0';
        document.getElementById('hidden-button').style.opacity = '0';
        if (window.innerWidth < 1236) {
            document.getElementById('sticky-navcontainer').style.display = 'none';
        }

        document.getElementById('banner-spacer').style.display = 'block';
    }

}, {
    threshold: [0, 1]
});

observer.observe(document.getElementById('banner-button'));




let exampleImg = 1;



function exampleRightPress() {
    exampleImg++;
    if (exampleImg == 9) {
        exampleImg = 1;
    }

    for (let i = 1; i <= 8; i++) {
        document.getElementById('example-img-' + i).style.display = 'none';
        document.getElementById('example-indi-' + i).className = 'indicator-deselected';
    }

    let jobName = document.getElementById('job-name');
    let pages = document.getElementById('pages');
    let innerPaper = document.getElementById('inner-paper');
    let coverPaper = document.getElementById('cover-paper');
    let binding = document.getElementById('binding');
    let finish = document.getElementById('finish');

    document.getElementById('example-img-' + exampleImg).style.display = 'block';
    document.getElementById('example-indi-' + exampleImg).className = 'indicator-selected';
    jobName.innerHTML = document.getElementById('example-img-' + exampleImg).getAttribute('bookname');
    pages.innerHTML = document.getElementById('example-img-' + exampleImg).getAttribute('details');
    innerPaper.innerHTML = 'Inner pages: ' + document.getElementById('example-img-' + exampleImg).getAttribute('inner-paper');
    coverPaper.innerHTML ='Cover: ' +  document.getElementById('example-img-' + exampleImg).getAttribute('cover');
    binding.innerHTML ='Binding: ' +  document.getElementById('example-img-' + exampleImg).getAttribute('binding');
    finish.innerHTML ='Finish: ' +  document.getElementById('example-img-' + exampleImg).getAttribute('finish');

}

function exampleLeftPress() {
    exampleImg--;
    if (exampleImg == 0) {
        exampleImg = 8;
    }
    for (let i = 1; i <= 8; i++) {
        document.getElementById('example-img-' + i).style.display = 'none';
        document.getElementById('example-indi-' + i).className = 'indicator-deselected';
    }
    document.getElementById('example-img-' + exampleImg).style.display = 'block';
    document.getElementById('example-indi-' + exampleImg).className = 'indicator-selected';

    let jobName = document.getElementById('job-name');
    let pages = document.getElementById('pages');
    let innerPaper = document.getElementById('inner-paper');
    let coverPaper = document.getElementById('cover-paper');
    let binding = document.getElementById('binding');
    let finish = document.getElementById('finish');

    document.getElementById('example-img-' + exampleImg).style.display = 'block';
    document.getElementById('example-indi-' + exampleImg).className = 'indicator-selected';
    jobName.innerHTML = document.getElementById('example-img-' + exampleImg).getAttribute('bookname');
    pages.innerHTML = document.getElementById('example-img-' + exampleImg).getAttribute('pages');
    innerPaper.innerHTML = 'Inner pages: ' + document.getElementById('example-img-' + exampleImg).getAttribute('inner-paper');
    coverPaper.innerHTML ='Cover: ' +  document.getElementById('example-img-' + exampleImg).getAttribute('cover');
    binding.innerHTML ='Binding: ' +  document.getElementById('example-img-' + exampleImg).getAttribute('binding');
    finish.innerHTML ='Finish: ' +  document.getElementById('example-img-' + exampleImg).getAttribute('finish');

}





let recogImg = 1;


function recogRightPress() {
    recogImg++;
    if (recogImg == 4) {
        recogImg = 1;
    }

    for (let i = 1; i <= 3; i++) {
        document.getElementById('recog-img-' + i).style.display = 'none';
        document.getElementById('recog-indi-' + i).className = 'indicator-deselected';
    }
    document.getElementById('recog-img-' + recogImg).style.display = 'block';
    document.getElementById('recog-indi-' + recogImg).className = 'indicator-selected';


}

function recogLeftPress() {
    recogImg--;
    if (recogImg == 0) {
        recogImg = 3;
    }

    for (let i = 1; i <= 3; i++) {
        document.getElementById('recog-img-' + i).style.display = 'none';
        document.getElementById('recog-indi-' + i).className = 'indicator-deselected';
    }
    document.getElementById('recog-img-' + recogImg).style.display = 'block';
    document.getElementById('recog-indi-' + recogImg).className = 'indicator-selected';

}

let quoteText = 1;
let quoteButtonPressed;

function quoteRightPress() {
    quoteText++;
    if (quoteText >= 8) {
        quoteText = 1;
    }
    for (let i = 1; i <= 7; i++) {
        document.getElementById('quote-' + i).style.display = 'none';
        document.getElementById('quote-indi-' + i).className = 'indicator-deselected';
    }
    document.getElementById('quote-' + quoteText).style.display = 'block';
    document.getElementById('quote-indi-' + quoteText).className = 'indicator-selected';
}

function quoteLeftPress() {
    quoteText--;
    if (quoteText <= 0) {
        quoteText = 7;
    }
    for (let i = 1; i <= 7; i++) {
        document.getElementById('quote-' + i).style.display = 'none';
        document.getElementById('quote-indi-' + i).className = 'indicator-deselected';
    }
    document.getElementById('quote-' + quoteText).style.display = 'block';
    document.getElementById('quote-indi-' + quoteText).className = 'indicator-selected';
}

function mailUnited() {
    window.location.href = 'mailto:unitedprinters@rediffmail.com';
}