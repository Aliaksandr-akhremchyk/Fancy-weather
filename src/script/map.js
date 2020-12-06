import { getWeather } from "./weather";
import { getPlace } from "./coord";
import { allData } from "./insertData";
import { insertData } from "./insertData";
import { START_OVERLAY } from "./leng";

const START_MESSAGE = document.querySelector(".start-message");
const START_CONFIRM_btn = document.querySelector(".start-confirm");

export function currentLocation() {
  navigator.geolocation.getCurrentPosition(success, error, options);
}

export let map;

export function setMap() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYWxleDE5ODQwNSIsImEiOiJja2k4dzc2aTcwOXRmMzRtemFjN3ZjYWdpIn0.iu__APcp4HT_E4a1CHa6jQ";
  map = new mapboxgl.Map({
    container: "map", // container id
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: [0, 0], // starting position [lng, lat]
    zoom: 9.5, // starting zoom
  });
}

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  console.log("получили местные координаты");
  var crd = pos.coords;
  allData.lat = crd.latitude;
  allData.lng = crd.longitude;

  map.flyTo({
    center: [crd.longitude, crd.latitude],
    essential: true, // this animation is considered essential with respect to prefers-reduced-motion
  });

  getPlace(crd.longitude, crd.latitude)
    .then((s) => getWeather(crd.longitude, crd.latitude))
    .then((s) => {
      insertData();
      START_OVERLAY.style.display = "none";
    });
}

function error(err) {
  moveStatrMessage();
  insertData(1);
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function moveStatrMessage() {
  START_MESSAGE.classList.toggle("move");
}

START_CONFIRM_btn.addEventListener("click", () => {
  START_OVERLAY.style.display = "none";
  moveStatrMessage();
});
/////////////////////
// const b = document.querySelector("button");
// b.addEventListener("click", () => {
//   map.flyTo({
//     center: [
//       -74.5 + (Math.random() - 0.5) * 10,
//       40 + (Math.random() - 0.5) * 10,
//     ],
//     essential: true, // this animation is considered essential with respect to prefers-reduced-motion
//   });
// });
