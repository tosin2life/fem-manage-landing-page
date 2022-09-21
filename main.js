const primaryHeader = document.querySelector(".primary-header");
const navButton = document.querySelector(".mobile-nav-toggle");
const primaryNavigation = document.querySelector(".primary-navigation");
navButton.addEventListener("click", () => {
  primaryNavigation.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
  if (primaryNavigation.hasAttribute("data-visible")) {
    navButton.setAttribute("aria-expanded", true);
  } else {
    navButton.setAttribute("aria-expanded", false);
  }
});

const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: true,
  dots: true,
  arrows: false,
  responsive: {
    480: {
      dots: false // dots enabled 480px and down
    },
  },
});
