function ToggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function BackTopFunction() {
  document.body.scrollTop = 1; // For Safari
  document.documentElement.scrollTop = 1; // For Chrome, Firefox, IE and Opera
}