const modalCards = [...document.querySelectorAll(".modal-card")];
const closeModalBtns = [...document.querySelectorAll(".close-modal-btn")];
// const mobileNavLinks = [...document.querySelectorAll(".mobile-nav-li")];
const mobileNavLinks = [...document.querySelectorAll(".nav-link")];

const hamburgerMenuIcon = document.querySelector(".hamburger-menu-icon");
const privacyModalLink = document.querySelector(".privacy-modal-link");
const privacyAndTermsCard = document.querySelector(".privacy-and-terms-card");
const modalOverlay = document.querySelector(".modal-overlay");
const modalNav = document.querySelector(".modal-nav");

const closeOverlay = (e) => {
  modalOverlay.classList.add("hidden");
  modalCards.forEach((card) => card.classList.add("hidden"));
};

closeModalBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    closeOverlay();
  });
});

hamburgerMenuIcon.addEventListener("click", (e) => {
  modalOverlay.classList.remove("hidden");
  modalNav.classList.remove("hidden");
});

privacyModalLink.addEventListener("click", (e) => {
  modalOverlay.classList.remove("hidden");
  privacyAndTermsCard.classList.remove("hidden");
});

mobileNavLinks.forEach((navLink) => {
  navLink.addEventListener("click", closeOverlay);
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-overlay")) {
    closeOverlay();
  }
});
