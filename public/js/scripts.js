document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");

  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  const prevButton = document.querySelector(".carousel__prev");
  const nextButton = document.querySelector(".carousel__next");
  const carouselContainer = document.querySelector(".carousel__container");
  const slides = document.querySelectorAll(".carousel__slide");
  let currentSlide = 0;

  function updateCarousel() {
    const slideWidth = slides[0].offsetWidth;
    const newTransformValue = -slideWidth * currentSlide;
    carouselContainer.style.transform = `translateX(${newTransformValue}px)`;

    prevButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide === slides.length - 1;
  }

  prevButton.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarousel();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      updateCarousel();
    }
  });

  updateCarousel();
});
