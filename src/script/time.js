import { setIcons } from "./insertData";
import { allData } from "./insertData";

const TIME = document.querySelector(".time");
const DAY = document.querySelector(".day");
const DAY_TITLE_1 = document.querySelector(".title-day-first");
const DAY_TITLE_2 = document.querySelector(".title-day-second");
const DAY_TITLE_3 = document.querySelector(".title-day-third");

let timeOffset = 0;
let incomeOffset;
export let isNight = false;
export let currentLeng = "en";

// let time = setInterval(showTime, 1000);
export function showTime(offset) {
  let today = new Date();
  timeOffset = today.getTimezoneOffset() * 60;

  if (offset === undefined) {
    allData.offset = 0 - timeOffset;
    incomeOffset = timeOffset;
  }

  incomeOffset = offset || 0;
  today.setSeconds(today.getSeconds() + incomeOffset + timeOffset);

  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  TIME.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)}`;

  if (hour < 6 || hour >= 22) isNight = !isNight;
  if (hour === 0 && min === 0 && sec === 0) showDay();
  if (hour === 22 && min === 0 && sec === 0) setIcons();
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

export function showDay() {
  let today = new Date();
  today.setSeconds(today.getSeconds() + incomeOffset + timeOffset);

  let langIndex = currentLeng === "ru" ? 0 : 1;

  let daysW = [
    [
      ["Воскресенье", "Sunday"],
      ["Вс", "Sun"],
    ],
    [
      ["Понедельник", "Monday"],
      ["Пн", "Mon"],
    ],
    [
      ["Вторник", "Tuesday"],
      ["Вт", "Tue"],
    ],
    [
      ["Среда", "Wednesday"],
      ["Ср", "Wed"],
    ],
    [
      ["Четверг", "Thursday"],
      ["Чт", "Thu"],
    ],
    [
      ["Пятница", "Friday"],
      ["Пт", "Fri"],
    ],
    [
      ["Суббота", "Saturday"],
      ["Сб", "Sat"],
    ],
  ];

  let months = [
    ["Января", "January"],
    ["Февраля", "February"],
    ["Марта", "March"],
    ["Апреля", "April"],
    ["Мая", "May"],
    ["Июня", "June"],
    ["Июля", "July"],
    ["Августа", "August"],
    ["Сентября", "September"],
    ["Октября", "October"],
    ["Ноября", "November"],
    ["Декабря", "December"],
  ];
  
  let dayW = today.getDay();
  let dayDate = today.getDate();
  let dayMonth = today.getMonth();
  DAY.innerHTML = `${daysW[dayW][1][langIndex]}, ${dayDate} ${months[dayMonth][langIndex]}`;

  today.setDate(today.getDate() + 1);
  DAY_TITLE_1.innerHTML = daysW[today.getDay()][0][langIndex];
  today.setDate(today.getDate() + 1);
  DAY_TITLE_2.innerHTML = daysW[today.getDay()][0][langIndex];
  today.setDate(today.getDate() + 1);
  DAY_TITLE_3.innerHTML = daysW[today.getDay()][0][langIndex];
}
