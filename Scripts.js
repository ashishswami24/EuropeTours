let slideIndex = 1;
showSlides(slideIndex, "europe-carousel"); // Initialize carousel 1
showSlides(slideIndex, "dubai-carousel"); // Initialize carousel 2

function changeSlide(n, carouselId) {
  showSlides((slideIndex += n), carouselId);
}

function currentSlide(n, carouselId) {
  showSlides((slideIndex = n), carouselId);
}

function showSlides(n, carouselId) {
  let i;
  let carousel = document.getElementById(carouselId);
  let slides = carousel.getElementsByClassName("package");
  let dots = carousel.getElementsByClassName("dot");
  let totalSlides = Math.ceil(slides.length / 3);

  // Adjust for mobile view
  // if (window.innerWidth <= 768) {
  //     totalSlides = slides.length;
  //     for (i = 0; i < slides.length; i++) {
  //         slides[i].style.flex = "0 0 auto"; // Set flexible width for single package
  //     }
  // } else {
  //     for (i = 0; i < slides.length; i++) {
  //         slides[i].style.flex = "0 0 33.333%"; // Ensure consistent width for larger screens
  //     }
  // }

  if (n > totalSlides) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = totalSlides;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  let start = (slideIndex - 1) * 3;
  if (window.innerWidth <= 768) {
    start = slideIndex - 1;
  }
  let end = start + (window.innerWidth <= 768 ? 1 : 3);

  for (i = start; i < end; i++) {
    if (slides[i]) {
      slides[i].style.display = "block";
    }
  }
  dots[slideIndex - 1].className += " active";
}

window.onresize = function () {
  showSlides(slideIndex, "europe-carousel");
  showSlides(slideIndex, "dubai-carousel");
};
