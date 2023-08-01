const carousel = document.querySelectorAll(".carousel");

let isDragStart = false;
let prevPageX;
let prevScrollLeft;

const dragStart = (e) => {
  isDragStart = true;

  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
  carousel.forEach((item) => {
    item.classList.add("dragging");
  });
};

const dragging = (e) => {
  if (!isDragStart) return;

  carousel.forEach((icon) => {
    icon.scrollLeft = prevScrollLeft - (e.pageX - prevPageX);
  });
};

const dragStop = () => {
  isDragStart = false;
  carousel.forEach((icon) => {
    icon.classList.remove("dragging");
  });
};

carousel.forEach((item) => {
  item.addEventListener("mousedown", dragStart);
});
carousel.forEach((item) => {
  item.addEventListener("mousemove", dragging);
});

document.addEventListener("mouseup", dragStop);

// place data

const places = [
  {
    name: "C Scheme",
    place: "262 places",
  },
  {
    name: "Malviya Nagar",
    place: "549 places",
  },
  {
    name: "Tonk Road",
    place: "128 places",
  },
  {
    name: "Vaishali Nagar",
    place: "581 places",
  },
  {
    name: "MI Road",
    place: "121 places",
  },
  {
    name: "Mansarovar",
    place: "783 places",
  },
  {
    name: "Raja Park",
    place: "249 places",
  },
  {
    name: "Bani Park",
    place: "109 places",
  },
  {
    name: "See more",
    place: "",
  },
];
const tit = document.querySelector(".loc-boc");

places.map((place) => {
  const card = document.createElement("div");
  card.className = "box-card";

  card.innerHTML = `
    <div class="left">
      <h1 class="pop-title">${place.name}</h1>
      <h4 class="pop-des">${place.place}</h4>
    </div>
    <div class="right">
      <ion-icon name="chevron-forward-outline"></ion-icon>
    </div>
  `;
  tit.appendChild(card);
});

