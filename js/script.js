// SHOW & HIDDEN HEADER MENU [MOBILE VERSION]
const showMenu = (menuId, toggleId) => {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
};
showMenu("nav-menu", "nav-toggle");

// REMOVE HEADER MENU WHEN CLICK THE NAV-LINK
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  // Active Link
  navLink.forEach((e) => e.classList.remove("active"));
  this.classList.add("active");

  navMenu.classList.remove("show-menu");
}
navLink.forEach((e) => e.addEventListener("click", linkAction));

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: "2000",
  reset: true,
});

// SCROLL ANIMATION HOME
sr.reveal(".home__title");
sr.reveal(".home__button", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });

// SCROLL ANIMATION ABOUT
sr.reveal(".about__img");
sr.reveal(".about__subtitle", { delay: 200 });
sr.reveal(".about__text", { delay: 400 });

// SCROLL ANIMATION SKILLS
sr.reveal(".skills__subtitle");
sr.reveal(".skills__text", { delay: 200 });
sr.reveal(".skills__data", { delay: 400 });
sr.reveal(".skills__img", { delay: 600 });

// SCROLL ANIMATION WORK
sr.reveal(".work__img", { interval: 200 });

// SCROLL ANIMATION CONTACT
sr.reveal(".contact__input", { interval: 200 });
