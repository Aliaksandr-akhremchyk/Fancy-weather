import { currentLeng } from "./time";
import { allData } from "./insertData";
import { SEARCH_INPUT, MESSAGE } from "./search";

const T_SEARCH = document.querySelector(".t-search");
const T_TEMP_FEELS = document.querySelector(".t-tempFeels");
const T_WIND = document.querySelector(".t-wind");
const D_WIND = document.querySelector(".d-wind");
const T_HUMIDITI = document.querySelector(".t-humidity");
const T_LATITUDE = document.querySelector(".t-latitude");
const T_LONGIRUDE = document.querySelector(".t-longitude");
const WEATHER_CODE = document.querySelector(".weatherCode");
const CITY = document.querySelector(".city");
// export const START_OVERLAY = document.querySelector(".start-overlay");

let titles = [
  T_SEARCH,
  T_TEMP_FEELS,
  T_WIND,
  D_WIND,
  T_HUMIDITI,
  T_LATITUDE,
  T_LONGIRUDE,
  MESSAGE,
  // START_OVERLAY,
];

let translation = [
  ["Поиск", "Search"],
  ["Ощущается: ", "Feels like: "],
  ["Ветер: ", "Wind: "],
  ["м/с", "m/s"],
  ["Влажность: ", "Humidity: "],
  ["Широта: ", "Latitude: "],
  ["Долгота: ", "Longitude: "],
  ["Что-то пошло не так...", "Something went wrong..."],
  // ["Загрузка...", "Loading..."],
];

let codeWeather = [
  "freezing_rain_heavy",
  "freezing_rain",
  "freezing_rain_light",
  "freezing_drizzle",
  "ice_pellets_heavy",
  "ice_pellets",
  "ice_pellets_light",
  "snow_heavy",
  "snow",
  "snow_light",
  "flurries",
  "tstorm",
  "rain_heavy",
  "rain",
  "rain_light",
  "drizzle",
  "fog_light",
  "fog",
  "cloudy",
  "mostly_cloudy",
  "partly_cloudy",
  "mostly_clear",
  "clear",
];

let weatherDescription = [
  ["Сильный ледяной дождь", "Heavy freezing rain"],
  ["Ледяной дождь", "Freezing rain"],
  ["Легкий ледяной дождь", "Light freezing rain"],
  ["Ледяная изморось", "Freezing drizzle"],
  ["Сильный град", "Heavy ice pellets"],
  ["Град", "Ice pellets"],
  ["Лекгий град", "Light ice pellets"],
  ["Сильный снег", "Heavy snow_heavy"],
  ["Снег", "Snow"],
  ["Слабый снег", "Light snow"],
  ["Хрень", "Flurries"],
  ["Шторм", "Tstorm"],
  ["Сильный дождь", "Heavy rain"],
  ["Дождь", "Rain"],
  ["Легкий дождь", "Light rain"],
  ["Изморось", "Drizzle"],
  ["Легкий туман", "Light fog"],
  ["Туман", "Fog"],
  ["Сильная облачность", "Cloudy"],
  ["Значительная облачность", "Mostly cloudy"],
  ["Переменная облачность", "Partly cloudy"],
  ["Незначительная облачность", "Mostly clear"],
  ["Ясно", "Clear"],
];

export function translate() {
  let langIndex = currentLeng === "ru" ? 0 : 1;
  for (let i = 0; i < titles.length; ++i) {
    titles[i].textContent = translation[i][langIndex];
  }
  setWeatherDescription(allData.weatherCode[0]);
  SEARCH_INPUT.setAttribute(
    "placeholder",
    langIndex ? "Сity or ZIP" : "Город или Индекс"
  );
  CITY.textContent = allData.place[langIndex];
}

export function setWeatherDescription(code) {
  let langIndex = currentLeng === "ru" ? 0 : 1;
  for (let i = 0; i < codeWeather.length; ++i) {
    if (code == codeWeather[i]) {
      WEATHER_CODE.textContent = weatherDescription[i][langIndex];
      return;
    }
  }
}
