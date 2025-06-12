const roles = ["Frontend Developer", "Software Engineer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100;
const pause = 1500;
const typeTarget = document.getElementById("typewriter");

function typeEffect() {
  const current = roles[index];
  if (isDeleting) {
    typeTarget.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index = (index + 1) % roles.length;
      setTimeout(typeEffect, 500);
    } else {
      setTimeout(typeEffect, speed / 2);
    }
  } else {
    typeTarget.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      isDeleting = true;
      setTimeout(typeEffect, pause);
    } else {
      setTimeout(typeEffect, speed);
    }
  }
}

const menuBtn = document.getElementById("mobile-menu-button");
const menu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

typeEffect();
