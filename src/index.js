import {
  getDegFormLocalStorage,
  getLengFormLocalStorage,
} from "./script/header";
import { getCity } from "./script/search";
import { showTime, showDay } from "./script/time";
import { setMap } from "./script/map";
import { speech } from "./script/speechRecognition.js";

import "./index.scss";

setMap();
showTime();
let time = setInterval(showTime, 1000);
showDay();

getDegFormLocalStorage();
getLengFormLocalStorage();
getCity();
speech();

export function resetTime(offset) {
  clearInterval(time);
  showTime(offset);
  time = setInterval(showTime, 1000, offset);
  showDay();
}