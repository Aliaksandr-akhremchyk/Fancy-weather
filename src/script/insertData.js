import { resetTime } from "../index";
import { isNight } from "./time";
import { setCity } from "./search";
import { currentDeg } from "./header";
import { translate } from "./leng";
import { getPlaceForLeng } from "./coord";

const TEMP_TODAY = document.querySelector(".temp");
const TEMP_1 = document.querySelector(".temp-day-first");
const TEMP_2 = document.querySelector(".temp-day-second");
const TEMP_3 = document.querySelector(".temp-day-third");
const TEMP_FEELS = document.querySelector(".tempFeels");
const WIND = document.querySelector(".wind");
const HUMIDITY = document.querySelector(".humidity");

const LATITUDE = document.querySelector(".latitude");
const LONGITUDE = document.querySelector(".longitude");

const ICON_TODAY = document.querySelector(".icon-today");
const ICON_1 = document.querySelector(".icon-first");
const ICON_2 = document.querySelector(".icon-second");
const ICON_3 = document.querySelector(".icon-third");

let temps = [TEMP_TODAY, TEMP_1, TEMP_2, TEMP_3];
let icons = [ICON_TODAY, ICON_1, ICON_2, ICON_3];

export let allData = {
  temp: [0, 0, 0, 0],
  tempFeels: [0, 0, 0, 0],
  wind: [0, 0, 0, 0],
  weatherCode: ["clear", "clear", "clear", "clear"],
  humidity: [0, 0, 0, 0],
  place: ["Город, Республика", "City, Country"],
  offset: 0,
  lng: 12.3456789,
  lat: 12.3456789,
};

export function insertData(e) {
  resetTime(allData.offset)
  setCity();
  setTemp();
  setIcons();

  WIND.textContent = allData.wind[0].toFixed(1);
  HUMIDITY.textContent = `${Math.round(allData.humidity[0])} %`;

  LONGITUDE.textContent = coordForm(allData.lng);
  LATITUDE.textContent = coordForm(allData.lat);
  translate();
  if (e) return;
  getPlaceForLeng(allData.lng, allData.lat);
}

function coordForm(n) {
  n += "";
  n = n.split(".");
  return ` ${n[0]}°  ${n[1][0] + n[1][1]}'  ${n[1][2] + n[1][3]}" `;
}

export function setTemp() {
  for (let i = 0; i < temps.length; ++i) {
    let temp = Math.round(
      currentDeg === "°f" ? cToF(allData.temp[i]) : allData.temp[i]
    );
    temps[i].textContent = `${temp > 0 ? "+" : ""}${temp}`;
  }
  let temp = Math.round(
    currentDeg === "°f" ? cToF(allData.tempFeels[0]) : allData.tempFeels[0]
  );
  TEMP_FEELS.textContent = `${temp > 0 ? "+" : ""}${temp}`;
}

function cToF(c) {
  return (9 / 5) * c + 32;
}

export function setIcons() {
  let sufix = "";
  if (isNight) sufix = "-night";
  for (let i = 0; i < icons.length; ++i) {
    icons[
      i
    ].style.backgroundImage = `url(../src/assets/icons/${allData.weatherCode[i]}${sufix}.svg)`;
  }
}
