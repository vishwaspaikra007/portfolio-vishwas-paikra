var scrollpixel;
var height;
var scrollpercentage;
var cnt = 0;
var fCnt = 8;
var allow = false;
var resPos=0;
var loop=1;

var html = document.querySelector('html');
var animationContainerForContent = document.querySelectorAll('.animationContainerForContent');
var resistance = document.querySelector('.resistance');
var viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var column = document.querySelector('#column');
window.onscroll = function() {scroll()};

// window.onload = function() {
// var animationContainerForContent = document.querySelectorAll('.animationContainerForContent');

//    for(let i=0;i<8;i++) {
//     var style = animationContainerForContent[i].currentStyle 
//                     || window.getComputedStyle(animationContainerForContent[i]);
//     console.log(i + "\n");
//     console.log(style.marginTop);
//    }
// }

function scroll() {
var animationContainerForContent = document.querySelectorAll('.animationContainerForContent');
var resistance = document.querySelector('.resistance');
var column = document.querySelector('#column');
if(resPos < resistance.getBoundingClientRect().top)
    resPos = resistance.getBoundingClientRect().top;
scrollpixel = document.documentElement.scrollTop;
height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
scrollpercentage = (scrollpixel/height)*100;
console.log(" a "+scrollpixel+" b "+viewPortHeight+" c "+resPos + " d "+
                resistance.clientHeight +" e "+ (animationContainerForContent[0].clientHeight*cnt) 
                +" f "+ animationContainerForContent[0].clientHeight/2);
var offSetHeight = animationContainerForContent[0].clientHeight;
if(cnt<fCnt) {
    if(html.clientWidth >= 1080)
        loop=2;
    else
        loop=1;
    if((scrollpixel + viewPortHeight) > 
            resPos + resistance.clientHeight + (offSetHeight*cnt/loop) + offSetHeight/2) {
    while(loop--) {
        animationContainerForContent[cnt].style.marginTop = "0px";
        cnt++;
    }
    }
} else {
    if((scrollpixel + viewPortHeight) < 
    resPos + resistance.clientHeight + offSetHeight/2) {
        cnt=0;
        for(let i=0;i<fCnt;i++) {
            animationContainerForContent[i].style.marginTop = "100vh";
        }
    }
}
}