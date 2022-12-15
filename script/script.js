var elemento = document.getElementById("test")
var images = ['images/bg1.jpg', 'images/bg2.jpg', 'images/bg3.jpg'];
var i = 0;

function cambiarFondo() {
    elemento.style.backgroundImage = "url(" + images[i] +")";
    i++;
    if (i == images.length) {
        i = 0;
    }
}

setInterval(cambiarFondo, 2000)

function menu() {
    var nav = document.getElementById("menu");
    if (nav.className == "menu") {
        nav.className += " responsive";
    } else {
        nav.className = "menu";
    }
}