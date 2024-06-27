// navbar
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

const navList = document.getElementById("nav-list");
const content = document.getElementById("content");

openMenu.addEventListener("click", () => {
  navList.classList.toggle("hidden");
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
});

closeMenu.addEventListener("click", () => {
  navList.classList.toggle("hidden");
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
});

content.addEventListener("click", () => {
  navList.classList.add("hidden");
  openMenu.classList.remove("hidden");
  closeMenu.classList.add("hidden");
});

// Parallax
const dubaiText = document.getElementById("dubai-text");
const burjKhalifa = document.getElementById("burj-khalifa");
const stars = document.getElementById("stars");

window.addEventListener("scroll", () => {
  const value = window.scrollY;

  dubaiText.style.translate = `${value * -0.7}px`;
  burjKhalifa.style.translate = `0 ${value < 800 ? value / 1.3 : 800}px`;
  stars.style.translate = `0 ${value < 800 ? value / 1.3 : 800}px`;
});
