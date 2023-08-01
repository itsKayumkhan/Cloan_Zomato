//selection filter
const cuisines = document.querySelector(".select_cuisines");
const sort = document.querySelector(".select_sort");
const rating = document.querySelector(".select_rating");
const cpp = document.querySelector(".cpp");
const more = document.querySelector(".select_more");

const Sby = document.querySelector("#Sby");
const Cui = document.querySelector("#Cui");
const Rat = document.querySelector("#Rat");
const Cpp = document.querySelector("#CPP");
const Mf = document.querySelector("#Mf");

const filterItem = document.querySelectorAll(".filter-item");
const select_item = document.querySelectorAll(".select-item");

const change = (item, opy) => {
  filterItem.forEach((filterItemElement) => {
    filterItemElement.classList.remove("Sby");
  });
  select_item.forEach((selectItemElement) => {
    selectItemElement.style.display = "none";
  });
  item.classList.add("Sby");
  opy.style.display = "flex";
};

Sby.addEventListener("click", () => change(Sby, sort));
Cui.addEventListener("click", () => change(Cui, cuisines));
Rat.addEventListener("click", () => change(Rat, rating));
Cpp.addEventListener("click", () => change(Cpp, cpp));
Mf.addEventListener("click", () => change(Mf, more));

// close btn
const filterCard = document.querySelector(".act");
const closeBtn = document.getElementById("closeBtn");
const body = document.querySelector("body");
closeBtn.addEventListener("click", () => {
  filterCard.style.display = "none";
  body.style.overflowY = "";
});

const openFilter = document.getElementById("openFilter");

openFilter.addEventListener("click", () => {
  filterCard.style.display = "flex";
  body.style.overflowY = "hidden";
});

// range function
// Get the range bar element and range labels elements

const rangeBar = document.getElementById("range-bar");
const rangeLabels = document.querySelectorAll(".range-labels span");
const showRating = document.querySelector(".rating-selected");

function updateRangeValue(event) {
  const value = event.target.dataset.value;
  rangeBar.value = value;
  showRating.innerText = event.target.textContent;
}

rangeLabels.forEach((label) => {
  label.addEventListener("click", updateRangeValue);
});
//cpp range
//  window.onload = function () {
//    slideOne();
//    slideTwo();
//  };
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

let first = document.querySelector(".zero");
let sec = document.querySelector(".sec");

function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }

  displayValOne.textContent = sliderOne.value;
  first.textContent = sliderOne.value;

  // Calculate the percentage position for displayValOne based on sliderOne value
  const percentagePosition = (sliderOne.value / sliderMaxValue) * 100;
  displayValOne.style.left = `${percentagePosition}%`;

  fillColor();
}

function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.innerText = sliderTwo.value;
  sec.innerText = sliderTwo.value;

  const percentagePosition = (sliderTwo.value / sliderMaxValue) * 100;
  displayValTwo.style.right = `${100 - percentagePosition}%`;

  fillColor();
}

function fillColor() {
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #3264fe ${percent1}%, #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}

fillColor();
function fillColor() {
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #e23744 ${percent1}%, #e23744 ${percent2}%, #dadae5 ${percent2}%)`;
}

// cuisines box

const main_box = document.querySelector(".cui-main");
const cu = document.querySelector(".cuisines");
const close_i = document.querySelector(".close");

let test = true;

cu.addEventListener("click", () => {
  if (test) {
    main_box.style.display = `${"flex"}`;
  }
  test = !test;
});

close_i.addEventListener("click", () => {
  main_box.style.display = "none";
});


