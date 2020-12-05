import {
  getDegFormLocalStorage,
  getLengFormLocalStorage,
} from "./script/header";
import { getCity, currentLocation } from "./script/search";
import { showTime, showDay } from "./script/time";
import { setMap } from "./script/map";

import "./index.scss";

showTime();
let time = setInterval(showTime, 1000);

getDegFormLocalStorage();
getLengFormLocalStorage();
showDay();
setMap();
// currentLocation();
getCity();

export { time };
