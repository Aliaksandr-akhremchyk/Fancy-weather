import { map, currentLocation } from "./map";
import { getWeather } from "./weather";
import { getСoordinates } from "./coord";
import { insertData } from "./insertData";
import { MESSAGE } from "./leng";

const SEARCH_btn = document.querySelector(".search-btn");
export const SEARCH_INPUT = document.querySelector(".search-input");

SEARCH_btn.addEventListener("click", mainCearch);

function mainCearch() {
  getСoordinates(SEARCH_INPUT.value)
    .then((data) => {
      console.log("сюда дошли");
      map.flyTo({
        center: [...data],
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      }); //setMap(...data);
      return getWeather(...data);
    })
    .then((s) => insertData())
    .catch((e) => {
      console.log("не получилось ваще");
      moveMessage();
      setTimeout(() => {
        MESSAGE.classList.remove("move");
      }, 8000);
    });
}

export function getCity() {
  if (
    localStorage.getItem("search-city") === null ||
    localStorage.getItem("search-city") === ""
  ) {
    // SEARCH_INPUT.value = "Search city or ZIP";
    currentLocation();
    console.log("пошли в местную локацию");
  } else {
    SEARCH_INPUT.value = localStorage.getItem("search-city");
    currentLocation();
    console.log("пошли по главному поиску");
  }
}
//mainCearch();

export function setCity() {
  localStorage.setItem("search-city", SEARCH_INPUT.value);
}

function moveMessage() {
  MESSAGE.classList.toggle("move");
}

SEARCH_INPUT.addEventListener("keypress", (e) => {
  if (e.which == 13 || e.keyCode == 13) {
    mainCearch();
    SEARCH_INPUT.blur();
  }
});

SEARCH_INPUT.addEventListener("focus", () => (SEARCH_INPUT.value = ""));
MESSAGE.addEventListener("click", moveMessage);
