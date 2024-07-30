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

  const projectsSection = document.querySelector(".projects-section");

  if (projectsSection) {
    console.log("Projects section found");
    const projects = document.querySelector(".project-carousel");
    const prevButton = document.querySelector(".carousel__prev");
    const nextButton = document.querySelector(".carousel__next");
    const projectCards = document.querySelectorAll(".project-card");

    if (projects) {
      console.log("Projects carousel found");
    } else {
      console.log("Projects carousel not found");
    }

    if (prevButton) {
      console.log("Previous button found");
    } else {
      console.log("Previous button not found");
    }

    if (nextButton) {
      console.log("Next button found");
    } else {
      console.log("Next button not found");
    }

    if (projectCards.length > 0) {
      console.log("Project cards found");
    } else {
      console.log("No project cards found");
    }

    let currentIndex = 0;

    function updateCarousel() {
      if (projectCards.length === 0) return;
      const cardWidth = projectCards[0].offsetWidth + 20; // Include margin
      projects.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      console.log(`Carousel updated: currentIndex = ${currentIndex}`);

      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex >= projectCards.length - 4;
    }

    if (prevButton) {
      prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
        }
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", function () {
        if (currentIndex < projectCards.length - 4) {
          currentIndex++;
          updateCarousel();
        }
      });
    }

    updateCarousel();
  } else {
    console.log("Projects section not found");
  }
});
