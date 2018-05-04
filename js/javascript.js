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



/* Blur image on menu hover */

var blur = false;

function blurImage() {
    if (blur) {
        document.getElementsByTagName("img")[0].className = "open";
        blur = false;
    } else {
        document.getElementsByTagName("img")[0].className = "closed";
        blur = true;
    }
}

/* Collapsive menu plus show-hide */

var hello = false;

function menuCollapse() {
    if (hello) {
        document.getElementById("link1").className = "menu-collapse";
        hello = false;
    } else {
        document.getElementById("link1").className = "plus-collapse";
        hello = true;
    }
}

/* */

var open = false;

function change() {
    if (open) {
        document.getElementById("link").className = "plus-collapse";
        open = false;
    } else {
        document.getElementById("link").className = "menu-collapse";
        open = true;
    }
}

/* */

var openIndex = false;

function changeIndex() {
    if (openIndex) {
        document.getElementById("link2").className = "menu-black";
        openIndex = false;
    } else {
        document.getElementById("link2").className = "plus-black";
        openIndex = true;
    }
}

/* */

var naviInner = true;

function changeXInner() {
    if (naviInner) {
        document.getElementById("link3").className = "plus-black";
        naviInner = false;
    } else {
        document.getElementById("link3").className = "menu-black";
        naviInner = true;
    }
}
