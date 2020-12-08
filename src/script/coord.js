import { currentLeng } from "./time";
import { allData } from "./insertData";

export function getСoordinates(place) {
  let lengInx = currentLeng === "ru" ? 0 : 1;
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${place}&key=75fa2f2d37824a27be34212ce12f3406&language=${currentLeng}`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      allData.place[lengInx] = `${
        data.results[0].components.city ||
        data.results[0].components.town ||
        data.results[0].components.village ||
        data.results[0].components["ISO_3166-1_alpha-3"]
      }, ${data.results[0].components.country}`;
      allData.offset = data.results[0].annotations.timezone.offset_sec;
      allData.lng = data.results[0].geometry.lng;
      allData.lat = data.results[0].geometry.lat;
      return [data.results[0].geometry.lng, data.results[0].geometry.lat];
    })
    .catch((e) => console.log("не получилось с кооординатами"));
}

export function getPlace(lng, lat) {
  let lengInx = currentLeng === "ru" ? 0 : 1;
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C%20${lng}&key=75fa2f2d37824a27be34212ce12f3406&language=${currentLeng}`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      allData.place[lengInx] = `${
        data.results[0].components.city ||
        data.results[0].components.town ||
        data.results[0].components.village ||
        data.results[0].components["ISO_3166-1_alpha-3"]
      }, ${data.results[0].components.country}`;
      allData.offset = data.results[0].annotations.timezone.offset_sec;
      return "ok";
    })
    .catch((e) => console.log("не получилось с Местом"));
}

export function getPlaceForLeng(lng, lat) {
  let leng = currentLeng === "ru" ? "en" : "ru";
  let lengInx = leng === "ru" ? 0 : 1;
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C%20${lng}&key=75fa2f2d37824a27be34212ce12f3406&language=${leng}`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      allData.place[lengInx] = `${
        data.results[0].components.city ||
        data.results[0].components.town ||
        data.results[0].components.village ||
        data.results[0].components["ISO_3166-1_alpha-3"]
      }, ${data.results[0].components.country}`;
      return "ok";
    })
    .catch((e) => console.log("не получилось с Местом"));
}
