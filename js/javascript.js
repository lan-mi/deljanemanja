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


/* Collapsive menu plus div - show-hide */

var open = false;

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

var navi = true;

function changeX() {
    if (navi) {
        document.getElementById("ver-3").style.display = "block";
        navi = false;
    } else {
        document.getElementById("ver-3").style.display = "none";
        navi = true;
    }
}

/* Index page collapsive menu plus div - show-hide */

var openIndex = false;

function changeIndex() {
    if (openIndex) {
        document.getElementById("ver-a").style.display = "block";
        openIndex = false;
    } else {
        document.getElementById("ver-a").style.display = "none";
        openIndex = true;
    }
}

/* */

var naviIndex = true;

function changeXIndex() {
    if (naviIndex) {
        document.getElementById("ver-b").style.display = "block";
        naviIndex = false;
    } else {
        document.getElementById("ver-b").style.display = "none";
        naviIndex = true;
    }
}

/* Collapsive menu submenu plus div - show-hide */

var openInner = false;

function changeInner() {
    if (openInner) {
        document.getElementById("ver-c").style.display = "block";
        openInner = false;
    } else {
        document.getElementById("ver-c").style.display = "none";
        openInner = true;
    }
}

/* */

var naviInner = true;

function changeXInner() {
    if (naviInner) {
        document.getElementById("ver-d").style.display = "none";
        naviInner = false;
    } else {
        document.getElementById("ver-d").style.display = "block";
        naviInner = true;
    }
}

/* Blur image on menu hover */

var blur = false

function blurImage() {
    if (blur) {
        document.getElementsByTagName("img")[0].className = "open";
        blur = false;
    } else {
        document.getElementsByTagName("img")[0].className = "closed";
        blur = true;
    }
}
