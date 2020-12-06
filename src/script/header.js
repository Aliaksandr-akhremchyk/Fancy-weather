import { setTemp } from "./insertData";
import { showDay, currentLeng } from "./time";
import { translate } from "./leng";

const BACKGROUND_IMG = document.querySelector(".background__img");
const REFRESH_IMG_btn = document.querySelector(".header__refreshBtn");
const VECTOR_REFRESH_btn = document.querySelector(".inVector");
const LENG_EN_btn = document.querySelector(".leng-en");
const LENG_RU_btn = document.querySelector(".leng-ru");
const DEG_F_btn = document.querySelector(".deg-f");
const DEG_C_btn = document.querySelector(".deg-c");

let rotare = 180;
let isBackgroundImgActive = false;

export let currentDeg = "°с";

DEG_F_btn.addEventListener("click", toggleDeg);
DEG_C_btn.addEventListener("click", toggleDeg);

LENG_EN_btn.addEventListener("click", toggleLeng);
LENG_RU_btn.addEventListener("click", toggleLeng);

function toggleLeng(e) {
  if (e.target.classList.contains("passive")) {
    currentLeng = e.target.textContent.toLowerCase();
    setLengInLocalStorage(currentLeng);
    showDay();
    translate();
    LENG_EN_btn.classList.toggle("passive");
    LENG_RU_btn.classList.toggle("passive");
  }
}

function toggleDeg(e) {
  if (e.target.classList.contains("passive")) {
    currentDeg = e.target.textContent.toLowerCase();
    setDegInLocalStorage(currentDeg);
    setTemp();
    DEG_F_btn.classList.toggle("passive");
    DEG_C_btn.classList.toggle("passive");
  }
}

function setDegInLocalStorage(value) {
  localStorage.setItem("weather-deg", value);
}

function setLengInLocalStorage(value) {
  localStorage.setItem("weather-leng", value);
}

export function getDegFormLocalStorage() {
  if (localStorage.getItem("weather-deg") === "°f") {
    currentDeg = "°f";
    DEG_F_btn.classList.toggle("passive");
    DEG_C_btn.classList.toggle("passive");
  }
}
export function getLengFormLocalStorage() {
  if (localStorage.getItem("weather-leng") === "ru") {
    currentLeng = "ru";
    LENG_EN_btn.classList.toggle("passive");
    LENG_RU_btn.classList.toggle("passive");
  }
}

REFRESH_IMG_btn.addEventListener("click", () => {
  VECTOR_REFRESH_btn.style.transform = `rotate(${rotare}deg)`;
  rotare += 180;
  getLinkToImage();
});

function loadImage(url) {
  const img = new Image();
  img.src = url;
  img.onload = () => {
    if (!isBackgroundImgActive) {
      BACKGROUND_IMG.style.backgroundImage = `url(${img.src})`;
      changeOpacity();
      isBackgroundImgActive = !isBackgroundImgActive;
    } else {
      document.body.style.backgroundImage = `url(${img.src})`;
      changeOpacity();
      isBackgroundImgActive = !isBackgroundImgActive;
    }
  };
}

export function getLinkToImage() {
  const url =
    "https://api.unsplash.com/photos/random?query=morning&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17";
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadImage(data.urls.regular));
}

function changeOpacity() {
  if (!isBackgroundImgActive) {
    BACKGROUND_IMG.style.opacity = "1";
  } else BACKGROUND_IMG.style.opacity = "0";
}
