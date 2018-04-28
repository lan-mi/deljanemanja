/* Slider */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("wrapper");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


/* */


var open = false

function change() {
    if (open) {
        document.getElementById("ver-2").style.display = "none";
        open = false;
    } else {
        document.getElementById("ver-2").style.display = "block";
        open = true;
    }
}

/* */

var navi = true

function changeX() {
    if (navi) {
        document.getElementById("ver-3").style.display = "block";
        navi = false;
    } else {
        document.getElementById("ver-3").style.display = "none";
        navi = true;
    }
}
