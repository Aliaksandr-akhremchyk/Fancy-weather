import { allData } from "./insertData";

export function getWeather(lng, lat) {
  const url = `https://api.climacell.co/v3/weather/forecast/daily?lat=${lat}&lon=${lng}&unit_system=si&start_time=now&fields=feels_like%2Ctemp%2Chumidity%2Cwind_speed%2Cweather_code&apikey=jvts28CAJvZln9V73cFjUSQCFtLnX2GT`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < 4; ++i) {
        allData.temp[i] =
          (data[i].temp[0].min.value + data[i].temp[1].max.value) / 2;

        allData.tempFeels[i] =
          (data[i].feels_like[0].min.value + data[i].feels_like[1].max.value) /
          2;

        allData.wind[i] =
          (data[i].wind_speed[0].min.value + data[i].wind_speed[1].max.value) /
          2;

        allData.humidity[i] =
          (data[i].humidity[0].min.value + data[i].humidity[1].max.value) / 2;

        allData.weatherCode[i] = data[i].weather_code.value;
      }
      return "ok";
    })
    .catch((e) => console.log("не получилось с погодой"));
}
