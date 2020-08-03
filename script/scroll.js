let can = 1
window.onscroll = () => {
    if(can)
        call()
}
function call() {
    can = 0
    var randomBoxes = document.querySelectorAll('.animationContainerForContent');
    let containerHeight = document.documentElement.clientHeight;
    for(let i = 0; i < randomBoxes.length; i++) {
        if(randomBoxes[i].getBoundingClientRect().y < containerHeight - randomBoxes[i].clientHeight/4) {
            randomBoxes[i].style.opacity = '1';
            randomBoxes[i].style.transform = 'translate(0,0)';
        } 
        if(randomBoxes[i].getBoundingClientRect().y > containerHeight) {
            randomBoxes[i].style.opacity = '0';
            randomBoxes[i].style.transform = 'translate(50px,0)';
        } 
    }
    setTimeout(() => {
        can = 1
    }, 300);
}