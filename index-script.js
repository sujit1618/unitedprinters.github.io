var observer = new IntersectionObserver(function (entries) {
    // no intersection with screen
    if (entries[0].intersectionRatio === 0){
        document.getElementById('hidden-logo').style.opacity='100';
        document.getElementById('hidden-button').style.opacity='100';
    }
        
    // fully intersects with screen
    else if (entries[0].intersectionRatio === 1){
        document.getElementById('hidden-logo').style.opacity='0';
        document.getElementById('hidden-button').style.opacity='0';
    }
        
}, {
    threshold: [0, 1]
});

observer.observe(document.querySelector("#nav-container-top"));