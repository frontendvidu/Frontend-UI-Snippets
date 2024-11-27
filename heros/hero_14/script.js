let slide = document.getElementsByClassName("slide"); //HTML collection list
let slideIndex = 0;
let hero = document.getElementById("hero");

function nextSlide() {
    slideIndex += 1;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex -= 1;
    showSlide(slideIndex);
}

function showSlide() {
    for(let i = 0;i<slide.length;i++) {
        slide[i].style.display = "none"
    }
    hero.className = "";

    if(slideIndex > slide.length-1) {
        slideIndex = 0;
        slide[slideIndex].style.display = "flex";
        hero.classList.add(`hero${slideIndex}`);
    } else if(slideIndex<0) {
        slideIndex = slide.length-1;
        slide[slideIndex].style.display = "flex";
        hero.classList.add(`hero${slideIndex}`);
    } else {
        slide[slideIndex].style.display = "flex";
        hero.classList.add(`hero${slideIndex}`);
    }
}

showSlide(slideIndex);
