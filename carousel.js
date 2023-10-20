let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");

    if (n >= slides.length) {
        slideIndex = 0; // Wrap to the first slide
    }
    if (n < 0) {
        slideIndex = slides.length - 1; // Wrap to the last slide
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex].style.display = "block";
}