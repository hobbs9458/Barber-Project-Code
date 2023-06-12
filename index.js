const modalCards = [...document.querySelectorAll('.modal-card')];
const closeModalBtns = [...document.querySelectorAll('.close-modal-btn')];
const mobileNavLinks = [...document.querySelectorAll('.nav-link')];
const mobileXNav = document.querySelector('.mobile-x-nav');
const navModalBookingBtn = document.querySelector('.nav-modal-booking-btn');
const hamburgerMenuIcon = document.querySelector('.hamburger-btn');
// const privacyModalLink = document.querySelector('.privacy-modal-link');
const privacyAndTermsCard = document.querySelector('.privacy-and-terms-card');
const modalOverlay = document.querySelector('.modal-overlay');
const modalNav = document.querySelector('.modal-nav');

const closeOverlay = (e) => {
  modalOverlay.classList.add('hidden');
  modalCards.forEach((card) => card.classList.add('hidden'));
};

closeModalBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    closeOverlay();
  });
});

const openMobileNav = (e) => {
  modalOverlay.classList.remove('hidden');
  modalNav.classList.remove('hidden');
  mobileXNav.focus();
};

hamburgerMenuIcon.addEventListener('click', (e) => {
  openMobileNav();
});

hamburgerMenuIcon.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    openMobileNav();
  }
});

// privacyModalLink.addEventListener('click', (e) => {
//   modalOverlay.classList.remove('hidden');
//   privacyAndTermsCard.classList.remove('hidden');
// });

mobileNavLinks.forEach((navLink) => {
  navLink.addEventListener('click', closeOverlay);
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    closeOverlay();
  }
});

navModalBookingBtn.addEventListener('click', closeOverlay);
navModalBookingBtn.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    closeOverlay();
  }
});

if (window.innerWidth <= 768) {
  const reviewBtn = document.querySelector('.review-btn');
  if (reviewBtn) {
    reviewBtn.href =
      'https://www.google.com/search?q=philip%27s+cuts+russellville+reviews&rlz=1C1CHBF_enUS866US866&oq=p&aqs=chrome.0.35i39i355i650j46i39i175i199i650j69i64j69i57j69i61j69i60l3.1174j0j7&sourceid=chrome&ie=UTF-8&si=AMnBZoGMSY18MlXAbRQyM-ge6thxxQrGIwpRV0KjbUVtMR89YXR6PBBJFGRETjLxWJaiu2r4ZHZWyG5SPEEjd5HEfz9vEQD5b9TsmqD6KcjrJo6U_7mUJkS9FAFk49Wunc8yrLz4-bykne_Som8QG1Jgcl3hPqg49eAZbXsoSfl-73AkZMeZqMU%3D&ictx=1&ved=2ahUKEwi5-eOoivD-AhXvl2oFHTNfBPsQyNoBKAF6BAgREAg#lrd=0x87cc536e80ee0837:0xa58274a4214dd9e5,3,,,,';
  }
}
