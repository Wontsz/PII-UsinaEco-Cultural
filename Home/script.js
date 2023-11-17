const carousel = document.querySelector(".carousel-container");
const slide = document.querySelector(".carousel-slide");

function handleCarouselMove(positive = true) {
  const slideWidth = slide.clientWidth;
  carousel.scrollLeft = positive ? carousel.scrollLeft + slideWidth : carousel.scrollLeft - slideWidth;
}