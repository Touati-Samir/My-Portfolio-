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

  const projectsContainer = document.querySelector(".project-carousel"); // Mise à jour ici

  if (projectsContainer) {
    console.log("Projects container found");
    const prevButton = document.querySelector(".carousel__prev");
    const nextButton = document.querySelector(".carousel__next");
    const projectCards = document.querySelectorAll(".project-card");

    if (projectsContainer && projectCards.length > 0) {
      console.log("Carousel container and controls found");

      let currentIndex = 0;
      const cardWidth = projectCards[0].offsetWidth + 20; // Include margin

      function updateCarousel() {
        const maxIndex = Math.max(projectCards.length - 1, 0);
        const translateX = Math.min(currentIndex, maxIndex) * cardWidth;
        projectsContainer.style.transform = `translateX(-${translateX}px)`;
        console.log(`Carousel updated: currentIndex = ${currentIndex}`);
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= maxIndex;
      }

      prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
        }
      });

      nextButton.addEventListener("click", function () {
        if (currentIndex < projectCards.length - 1) {
          currentIndex++;
          updateCarousel();
        }
      });

      updateCarousel(); // Initial update
    } else {
      console.log("Carousel container or project cards not found");
    }
  } else {
    console.log("Projects container not found");
  }
});
