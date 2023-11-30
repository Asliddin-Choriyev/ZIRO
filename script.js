document.addEventListener("mousedown", function (event) {
  if (
    event.target.nodeName === "TEXTAREA" ||
    event.target.nodeName === "INPUT" ||
    event.target.contentEditable === "true"
  ) {
    return;
  }
  event.preventDefault();
});

// Find Jobs Accardion
const list = document.getElementsByClassName("list");
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", () => {
    list[i].classList.toggle("active");
  });
}

// Jobs sliderCard
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const sliderCard = document.querySelector(".jobs-slider");
const sliderBox = document.querySelector(".sliderBox");

function slider() {
  let sliderCardNum = 0;

  nextBtn.addEventListener("click", (e) => {
    sliderCardNum++;
    sliderCard.style.left = "-" + sliderCardNum * 42 + "rem";

    if (sliderCardNum >= 5) {
      sliderCardNum = 0;
    }
  });
  prevBtn.addEventListener("click", (e) => {
    sliderCardNum--;
    sliderCard.style.left = "-" + sliderCardNum * 42 + "rem";
    if (sliderCardNum === -1) {
      sliderCardNum = 7;
    }
    console.log(sliderCardNum);
  });
}
function MoreViewer() {
  prevBtn.classList.add("hidden");
  nextBtn.classList.add("hidden");
  const viewMore = document.querySelector(".view-more");
  viewMore.addEventListener("click", () => {
    prevBtn.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
    viewMore.style.display = "none";
    prevBtn.style.marginTop = "-50rem";
    nextBtn.style.marginTop = "-50rem";
    nextBtn.style.marginLeft = "115rem";
    sliderBox.style.left = "-19rem";
  });
}

// Comments-Slider

function sliderComments() {
  const backBtn = document.querySelector(".back");
  const goBtn = document.querySelector(".go");
  const commentsBox = document.querySelector(".comments-carusel");
  backBtn.style.display = "none";

  goBtn.style.width = "10rem";
  if (window.innerWidth <= 600) {
    goBtn.style.marginLeft = "-15rem";
    goBtn.style.marginTop = "1rem";
  }
  if (window.innerWidth <= 425) {
    goBtn.style.marginLeft = "-15rem";
    goBtn.style.marginTop = "3rem";
  }
  goBtn.style.border = "0.1rem solid red";
  let CommentsNum = 0;
  goBtn.addEventListener("click", () => {
    backBtn.style.display = "block";
    goBtn.style.width = "5rem";
    goBtn.style.border = "none";
    CommentsNum++;
    const tablet768 = window.matchMedia("(max-width:768px)");
    if (tablet768.matches) {
      commentsBox.style.left = "-" + CommentsNum * 94 + "rem";
    } else {
      commentsBox.style.left = "-" + CommentsNum * 144 + "rem";
    }
    if (CommentsNum === 5) {
      goBtn.style.display = "none";
      backBtn.style.width = "10rem";
      backBtn.style.border = "0.1rem solid red";
    }
  });
  backBtn.addEventListener("click", () => {
    goBtn.style.display = "block";
    backBtn.style.width = "5rem";
    backBtn.style.border = "none";
    CommentsNum--;
    const tablet768 = window.matchMedia("(max-width:768px)");
    if (tablet768.matches) {
      commentsBox.style.left = "-" + CommentsNum * 94 + "rem";
    } else {
      commentsBox.style.left = "-" + CommentsNum * 144 + "rem";
    }
    if (CommentsNum === 0) {
      backBtn.style.display = "none";
      goBtn.style.width = "10rem";
      goBtn.style.border = "0.1rem solid red";
    }
    console.log(CommentsNum);
  });
}
// Responsive menu shower function
function showMenu() {
  const openMenuBtn = document.querySelector(".open");
  const cancelBtn = document.querySelector(".cancel");
  openMenuBtn.addEventListener("click", () => {
    const menu = document.querySelector(".menues");
    menu.style.left = "20rem";
    menu.style.transition = "1s";
    openMenuBtn.classList.add("hidden");
    cancelBtn.classList.remove("hidden");
    cancelBtn.addEventListener("click", () => {
      menu.style.left = "140rem";
      openMenuBtn.classList.remove("hidden");
      cancelBtn.classList.add("hidden");
    });
  });
}

function searchResizer() {
  const search = document.querySelector(".search-box>input");
  const searchBox = document.querySelector(".search-box");
  const sign = document.querySelector(".sign");
  if (window.innerWidth > 425 && window.innerWidth <= 600) {
    search.addEventListener("input", () => {
      if (search.value) {
        sign.classList.add("hidden");
        searchBox.style.width = "28rem";
        searchBox.style.transition = "1s";
      } else {
        sign.classList.remove("hidden");
        searchBox.style.width = "12rem";
      }
    });
  } else {
    search.addEventListener("input", () => {
      if (search.value) {
        sign.classList.add("hidden");
        searchBox.style.width = "35rem";
        searchBox.style.transition = "1s";
      } else {
        sign.classList.remove("hidden");
        searchBox.style.width = "5rem";
      }
    });
  }
}
if (window.innerWidth <= 400) {
  const searchIcon = document.querySelector(".search-icon");
  searchIcon.addEventListener("click", () => {
    const searchBox = document.querySelector(".search-box");
    const searchInput = document.querySelector(".search-box>input");
    searchBox.style.width = "30rem";
    searchInput.addEventListener("input", () => {
      searchInput.value
        ? (searchBox.style.width = "30rem")
        : (searchBox.style.width = "4rem");
    });
  });
}
if (window.innerWidth <= 600) {
  searchResizer();
}

(() => {
  slider();
  MoreViewer();
  sliderComments();
  showMenu();
})();
