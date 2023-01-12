const carousel = document.querySelector(".carousel");
const pages = [...document.querySelectorAll(".carousel__page")];
const track = document.querySelector(".carousel__track");

const btns = [...document.querySelectorAll(".carousel__btn")];
const nextPageBtn = document.querySelector(".carousel__btn-right");
const prevCardBtn = document.querySelector(".carousel__btn-left");

const originalStartingCard = document.querySelector(".track__start-original");
const originalEndCard = document.querySelector(".track__end-original");

let autoMode = true;

let currentPage = document.querySelector(".carousel__page-current");
let nextPage = autoMode ? currentPage.nextElementSibling : null;
let pageWidth = carousel.getBoundingClientRect().width;

const layoutTrack = () => {
  track.style.transition = pages.map((page, index) => {
    page.style.left = `${pageWidth * index}px`;
  });
};

const setNextPageOnClickRight = () => {
  nextPage = currentPage.nextElementSibling;
};
const setNextPageOnClickLeft = () => {
  nextPage = currentPage.previousElementSibling;
};

const removeBtnEventListeners = (e) => {
  nextPageBtn.removeEventListener("click", moveTrack);
  prevCardBtn.removeEventListener("click", moveTrack);
  nextPageBtn.removeEventListener("click", setNextPageOnClickRight);
  prevCardBtn.removeEventListener("click", setNextPageOnClickLeft);
};

const addBtnEventListeners = (e) => {
  nextPageBtn.addEventListener("click", setNextPageOnClickRight);
  prevCardBtn.addEventListener("click", setNextPageOnClickLeft);
  nextPageBtn.addEventListener("click", moveTrack);
  prevCardBtn.addEventListener("click", moveTrack);
};

const transitionsOn = (e) => {
  track.style.transitionDuration = "1.5s";
  track.style.transitionTimingFunction = "ease-in";
  return true;
};

const transitionsOff = (e) => {
  track.style.transitionDuration = "0s";
  track.style.transitionTimingFunction = "none";
  return false;
};

const updateCurrentPage = (updatedCurrentPage) => {
  if (!updatedCurrentPage) return;
  currentPage.classList.remove("carousel__page-current");
  updatedCurrentPage.classList.add("carousel__page-current");
  currentPage = updatedCurrentPage;
};

const moveTrack = () => {
  // PREVENTS ERRORS FROM RAPID CLICKING
  removeBtnEventListeners();
  if (!nextPage) nextPage = currentPage;

  transitionsOn();
  updateCurrentPage(nextPage);
  track.style.transform = `translateX(-${nextPage.style.left})`;
};

const sneakyCloneSlide = (e) => {
  transitionsOff();
  if (currentPage.classList.contains("track__start-clone")) {
    track.style.transform = `translateX(-${originalStartingCard.style.left})`;
    updateCurrentPage(originalStartingCard);
  } else if (currentPage.classList.contains("track__end-clone")) {
    track.style.transform = `translateX(-${originalEndCard.style.left})`;
    updateCurrentPage(originalEndCard);
  }
};

const resetPageSize = () => {
  if (pageWidth !== carousel.getBoundingClientRect().width) {
    pageWidth = carousel.getBoundingClientRect().width;
    layoutTrack();
    transitionsOff();

    if (nextPage.classList.contains("clone")) {
      nextPage = originalStartingCard;
    }
    track.style.transform = `translateX(-${nextPage.style.left})`;
    addBtnEventListeners();
  }
};

const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "Mobile"
    : "Desktop";

const setAutoMode = () => {
  const deviceType = detectDeviceType();
  if (deviceType === "Mobile") autoMode = false;
};

const init = () => {
  // setAutoMode();
  layoutTrack();
  // SETS CAROUSEL TO START ON THE FIRST ORIGINAL CARD
  track.style.transform = `translateX(-${pageWidth}px)`;
  // PREVENTS nextPage from being null in the case they resize page before pushing buttons if autoMode = false
  if (!autoMode) {
    if (!nextPage) nextPage = currentPage;
  }
};

//EVENT LISTENERS
window.addEventListener("resize", resetPageSize);

nextPageBtn.addEventListener("click", setNextPageOnClickRight);
prevCardBtn.addEventListener("click", setNextPageOnClickLeft);
// nextPageBtn.addEventListener("click", () => {
//   nextPage = currentPage.nextElementSibling;
//   console.log("right");
// });
// prevCardBtn.addEventListener("click", () => {
//   nextPage = currentPage.previousElementSibling;
//   console.log("left");
// });

btns.forEach((btn) => btn.addEventListener("click", moveTrack));
btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (autoMode) autoMode = false;
  })
);

track.addEventListener("transitionend", (e) => {
  if (currentPage.classList.contains("clone")) {
    sneakyCloneSlide();
  }
  addBtnEventListeners();
});

// CAROUSEL AUTO ROTATE
// const deviceType = detectDeviceType();
// if (deviceType === "Mobile") autoMode = false;
// setAutoMode();
if (autoMode) {
  const intervalID = setInterval(() => {
    if (currentPage.nextElementSibling) {
      nextPage = currentPage.nextElementSibling;
    } else {
      nextPage = originalStartingCard;
    }

    moveTrack();
  }, 10000);

  btns.forEach((btn) =>
    btn.addEventListener("click", (e) => clearInterval(intervalID))
  );
}

init();
