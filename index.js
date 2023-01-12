const modalCards = [...document.querySelectorAll(".modal-card")];
const closeModalBtns = [...document.querySelectorAll(".close-modal-btn")];
const mobileNavLinks = [...document.querySelectorAll(".nav-link")];
const mobileXNav = document.querySelector(".mobile-x-nav");
const navModalBookingBtn = document.querySelector(".nav-modal-booking-btn");
const hamburgerMenuIcon = document.querySelector(".hamburger-btn");
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

const openMobileNav = (e) => {
  modalOverlay.classList.remove("hidden");
  modalNav.classList.remove("hidden");
  mobileXNav.focus();
};

hamburgerMenuIcon.addEventListener("click", (e) => {
  openMobileNav();
});

hamburgerMenuIcon.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    openMobileNav();
  }
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

navModalBookingBtn.addEventListener("click", closeOverlay);
navModalBookingBtn.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    closeOverlay();
  }
});

// NEED TO OPTIMIZE ACCESSIBILITY. ESCAPE ALL NECESSARY CHARS. FINISH THE SERVICES SECTION.
