var tog=false;
function openMenu(ths) {
    var menu = document.getElementById("animation");
    if(tog==false)
    {
        ths.style.bottom = "0px";
        ths.style.transform = "rotate(270deg)";
        ths.style.marginLeft = "85%";
        menu.style.height = "90vh";
        tog=!tog;
    }
    else
    {
        ths.style.bottom = "-20%";
        ths.style.transform = "rotate(90deg)";
        ths.style.marginLeft = "96%";
        menu.style.height = "50px";
        tog=!tog;
    }
}
function expand(a) {
    var fuli = document.getElementById('fullImage1');
    fuli.style.display = "block";
    fuli.innerHTML = "<img src='" + a.src + "'>";
}
function abort(b) {
    b.style.display = "none";
}