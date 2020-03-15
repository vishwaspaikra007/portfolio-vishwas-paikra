setInterval(() => {
    call();
}, 16.66);
function call() {
var randomBoxes = document.querySelectorAll('.animationContainerForContent');
let containerHeight = document.documentElement.clientHeight;
for(let i = 0; i < randomBoxes.length; i++) {
    if(randomBoxes[i].getBoundingClientRect().y < containerHeight - randomBoxes[i].clientHeight/4) {
        randomBoxes[i].style.opacity = '1';
        randomBoxes[i].style.marginLeft = '0';
    } 
    if(randomBoxes[i].getBoundingClientRect().y > containerHeight) {
        randomBoxes[i].style.opacity = '0';
        randomBoxes[i].style.marginLeft = '50px';
    } 
    
}
}