const historySection = document.querySelector(".history");
const historyContentImage = document.querySelector("#historyContentImage");
const historyContentImageBack = document.querySelector("#historyContentImage2");
const historyContentText = document.querySelector("#historyContentText");
const historyContentTitle = document.querySelector("#historyContentTitle");
const rel = document.querySelector("#rel");
const abs = document.querySelector("#abs");

const history = [
  {
    text: "Коломенский машиностроительный завод",
    image: "images/блок-история-1.png",
    title: "1925",
  },
  {
    text: `Инженеры коломенского машиностроительного\nзавода с трамваем КМ`,
    image: "images/блок-история-3.png",
    title: "1929",
  },
];
let currentIndex = 0;
historyContentImage.src = history[currentIndex].image;
historyContentImageBack.src = history[currentIndex].imageBackground;
historyContentText.textContent = history[currentIndex].text;
historyContentTitle.textContent = history[currentIndex].title;

const historySectionSecond = document.querySelector(".history-second");
const historyContentImageSecond = document.querySelector(
  "#historyContentImageSecond"
);
const historyContentImage2Second = document.querySelector(
  "#historyContentImage2Second"
);
const historyContentTextSecond = document.querySelector(
  "#historyContentTextSecond"
);
const historyContentTitleSecond = document.querySelector(
  "#historyContentTitleSecond"
);
const textWrapper = document.querySelectorAll(".text-wrapper");
const relative = document.querySelector("#relative");
const absolute = document.querySelector("#absolute");

const historySecond = [
  {
    text: "Перевозка тяжело раненых в госпиталь",
    image: "images/historySec-1.png",
    title: "1943",
  },
  {
    text: "Достопримечательность Нижнего Новгорода - коломенский трамвай ",
    image: "images/historySEc-2.png",
    title: "2024",
  },
];
historyContentImageSecond.src = historySecond[currentIndex].image;
historyContentTextSecond.textContent = historySecond[currentIndex].text;
historyContentTitleSecond.textContent = historySecond[currentIndex].title;

window.addEventListener("scroll", () => {
  const sectionTop = historySection.offsetTop;
  const sectionHeight = historySection.offsetHeight;

  const scrollPosition = window.scrollY;
  if (
    scrollPosition >= sectionTop &&
    scrollPosition < sectionTop + sectionHeight
  ) {
    const relativeScroll = scrollPosition - sectionTop;
    const sectionScrollHeight = sectionHeight / history.length;
    const newIndex = Math.min(Math.floor(relativeScroll / sectionScrollHeight));
    if (newIndex !== currentIndex) {
      currentIndex = newIndex;
      historyContentImage.src = history[currentIndex].image;
      historyContentText.textContent = history[currentIndex].text;
      historyContentTitle.textContent = history[currentIndex].title;
    }
    if (newIndex === 0) {
      rel.classList.remove("body-image-img");
      abs.classList.remove("body-image-background");
    } else {
      rel.classList.add("body-image-img");
      abs.classList.add("body-image-background");
    }
  }

  const textActive = document.querySelectorAll(".history__body-title-1");
  for (let i = 0; i < textActive.length; i++) {
    const el = textActive[i];
    if (el.offsetTop < scrollPosition + 60) {
      el.classList.add("text-active");
    }
  }

  const mechanismBody = document.querySelector(".mechanism-body");
  const group = document.querySelectorAll(".group");
  group.forEach((item) => {
    if (item.offsetTop < scrollPosition - mechanismBody.offsetTop) {
      item.classList.add("group-active");
    }
  });

  const redTrain = document.querySelector(".red-train");
  const redBody = document.querySelector(".red-train-body");
  const trainText = document.querySelector(".red-train-text");
  const topRedTrain = redTrain.offsetTop;
  const heightRedTrain = redTrain.offsetHeight;

  if (
    topRedTrain <= scrollPosition &&
    scrollPosition < topRedTrain + heightRedTrain
  ) {
    redBody.classList.add("red-train-active");
    trainText.classList.add("train-text-active");
  } else {
    redBody.classList.remove("red-train-active");
    trainText.classList.remove("train-text-active");
  }

  const cinema = document.querySelector(".cinema");
  const circleImage = document.querySelector(".cinema__image-img");
  const topCinema = cinema.offsetTop;
  if (topCinema < scrollPosition) {
    circleImage.classList.add("active");
  } else {
    circleImage.classList.remove("active");
  }

  const secstionSEcond = historySectionSecond.offsetTop;
  const sectionSEcondHeight = historySectionSecond.offsetHeight;
  if (
    scrollPosition >= secstionSEcond &&
    scrollPosition < secstionSEcond + sectionSEcondHeight
  ) {
    const relativeScroll = scrollPosition - secstionSEcond;
    const sectionScrollHeight = sectionSEcondHeight / historySecond.length;
    const newIndex = Math.min(Math.floor(relativeScroll / sectionScrollHeight));

    if (newIndex !== currentIndex) {
      currentIndex = newIndex;
      historyContentImageSecond.src = historySecond[currentIndex].image;
      historyContentTextSecond.textContent = historySecond[currentIndex].text;
      historyContentTitleSecond.textContent = historySecond[currentIndex].title;
    }
    if (newIndex === 1) {
      absolute.classList.remove("absolute");
      relative.classList.remove("relative");
    } else {
      absolute.classList.add("absolute");
      relative.classList.add("relative");
    }
  }

  const characterictics = document.querySelector("#characterictics");
  const charactericticsTop = characterictics.offsetTop;
  const popup = document.querySelector(".popup");
  const charactericticsHeight = characterictics.offsetHeight;
  if (
    charactericticsTop <= scrollPosition &&
    scrollPosition < charactericticsHeight + charactericticsTop
  ) {
    popup.classList.add("popup-active");
  } else {
    popup.classList.remove("popup-active");
  }
});

const cards = [
  {
    id: 1,
    front: {
      title: "Скорость",
    },
    back: {
      image: "images/front1.png",
    },
  },
  {
    id: 2,
    front: {
      image: "images/front2.png",
    },
    back: {
      image: "images/front3.png",
    },
  },
  {
    id: 3,
    front: {
      image: "images/front8.png",
    },
    back: {
      image: "images/front4.png",
    },
  },
  {
    id: 4,
    front: {
      image: "images/front5.png",
    },
    back: {
      image: "images/front6.png",
    },
  },
  {
    id: 5,
    front: {
      title: "Вес",
    },
    back: {
      image: "images/front7.png",
    },
  },
];

const rowCard = document.querySelector(".row-card");
const html = cards.map((item) => {
  return `<li class="main-card-container">
                <div class="card-body">
                  <div class="front-card">
                  ${
                    item.front.title
                      ? `<div class="front-card-title">${item.front.title}</div>`
                      : `<div class="front-card-background"><img src=${item.front.image}></div>`
                  }
                    
                  </div>
                  <div class="back-card">
                  ${
                    item.back.image
                      ? `<img class="back-card-image" src=${item.back.image} alt="back-card-image" />`
                      : `<div class="back-card-text"><p>${item.back.text}</p></div>`
                  }
                  </div>
                </div>
              </li>
    
    `;
});
rowCard.innerHTML = html;
const mainCard = document.querySelector(".main-card-body");
mainCard.addEventListener("mouseover", () => {
  mainCard.classList.add("active");
});
