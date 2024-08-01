console.log("JavaScript file loaded");

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  const menuIcon = document.getElementById("menu-icon");
  const menu = document.querySelector(".menu");

  if (menuIcon) {
    console.log("Menu icon found");
    menuIcon.addEventListener("click", function () {
      menu.classList.toggle("show");
      console.log("Menu toggled");
    });
  } else {
    console.log("Menu icon not found");
  }

  // Redirection du bouton "En savoir plus"
  const learnMoreButton = document.querySelector(".btn");
  if (learnMoreButton) {
    console.log("Learn more button found");
    learnMoreButton.addEventListener("click", function () {
      window.location.href = "about.html";
    });
  } else {
    console.log("Learn more button not found");
  }

  const carouselContainer = document.querySelector(".carousel-container");
  const projects = document.querySelector(".project-carousel");
  const prevButton = document.querySelector(".carousel__prev");
  const nextButton = document.querySelector(".carousel__next");
  const projectCards = document.querySelectorAll(".project-card");

  if (carouselContainer) {
    console.log("Carousel container found");

    let currentIndex = 0;

    function updateCarousel() {
      if (projectCards.length === 0) return;
      const cardWidth = projectCards[0].offsetWidth + 20; // Include margin
      projects.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      console.log(`Carousel updated: currentIndex = ${currentIndex}`);

      prevButton.disabled = currentIndex === 0;
      nextButton.disabled =
        currentIndex >=
        projectCards.length -
          Math.ceil(carouselContainer.offsetWidth / cardWidth);
    }

    // Define `cardWidth` inside the event listeners
    prevButton.addEventListener("click", function () {
      const cardWidth = projectCards[0].offsetWidth + 20; // Include margin
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });

    nextButton.addEventListener("click", function () {
      const cardWidth = projectCards[0].offsetWidth + 20; // Include margin
      if (
        currentIndex <
        projectCards.length -
          Math.ceil(carouselContainer.offsetWidth / cardWidth)
      ) {
        currentIndex++;
        updateCarousel();
      }
    });

    updateCarousel();
    window.addEventListener("resize", updateCarousel); // Update on resize
  } else {
    console.log("Carousel container not found");
  }
});
