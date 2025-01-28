document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileNavigationClose = document.getElementById(
    "mobile-navigation-close"
  );
  const mobileNavigation = document.getElementById("responsive-navigation");

  hamburger.addEventListener("click", () => {
    mobileNavigation.classList.add("active");
  });
  mobileNavigationClose.addEventListener("click", () => {
    mobileNavigation.classList.remove("active");
  });
});
