import "./script/header";
import { getCity } from "./script/search";
import { showTime, showDay } from "./script/time";

import "./index.scss";

showTime();
let time = setInterval(showTime, 1000);
showDay();
// getCity();

export { time };
