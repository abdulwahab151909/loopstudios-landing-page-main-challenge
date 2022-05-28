const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const introBackground = document.querySelector(".intro-bg");

hamburger.addEventListener("click", () => {
  if (introBackground.style.backgroundImage !== "none") {
    introBackground.style.backgroundImage = "none";
    introBackground.style.backgroundColor = "black";
  } else {
    introBackground.style.backgroundImage =
      "url(./images/mobile/image-hero.jpg)";
  }

  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-links").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    introBackground.style.backgroundImage =
      "url(./images/mobile/image-hero.jpg)";
  })
);
