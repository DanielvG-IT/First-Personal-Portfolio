// Toggle menu

function ToggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/// Function to calculate age based on birthdate
function calculateAge(birthDate) {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDifference = today.getMonth() - birthDateObj.getMonth();
  const dayDifference = today.getDate() - birthDateObj.getDate();

  // Adjust age if birthday hasn't occurred yet this year
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  return age;
}

// Your birthdate
const birthDate = "2006-04-20";

// Calculate age and update the HTML element when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("current-age").textContent = calculateAge(birthDate);
});

// Dark / light mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}

/// Function for cookie handling
function setCookie(cName, cValue, expDays) {
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + ";" + expires + "; path=/";
}

function getCookie(cName) {
  const name = cName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split("; ");

  for (let cookie of cookieArray) {
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length);
    }
  }

  return null;
}

document.querySelector("#cookies-accept-btn").addEventListener("click", () => {
  const cookiesBanner = document.querySelector("#cookies");
  cookiesBanner.classList.add("fade-out");
  setTimeout(() => {
    cookiesBanner.style.display = "none";
  }, 1000); // Match the duration of the animation
  setCookie("cookie", true, 15);
});

cookieMessage = () => {
  if (!getCookie("cookie"))
    document.querySelector("#cookies").style.display = "block";
};

window.addEventListener("load", cookieMessage);

/// HTML file extension removed from URL

document.addEventListener("DOMContentLoaded", () => {
  const currentUrl = window.location.pathname;
  if (currentUrl.endsWith("/information")) {
    window.location.replace(currentUrl + ".html");
  }
});

function openInNewTab(url) {
  window.open(url, "_blank").focus();
}
