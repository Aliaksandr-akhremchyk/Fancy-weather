import { SEARCH_INPUT, mainCearch } from "./search";
import { currentLeng } from "./time";

const BTN_SPEECH = document.querySelector(".search-input_speech");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;

export function speech() {
  recognition = new SpeechRecognition();

  BTN_SPEECH.addEventListener("click", () => {
    recognition.lang = currentLeng === "ru" ? "ru-RU" : "en-EN";
    console.log(recognition.lang);
    recognition.start();
    console.log("Ready to receive a color command.");
    changeColor();
  });

  recognition.onresult = function (event) {
    console.log(event.results[0][0].transcript);
    SEARCH_INPUT.value = event.results[0][0].transcript;
    mainCearch();
  };

  recognition.onerror = function (event) {
    console.log("Ошибка в голосовом наборе");
  };
}

function changeColor() {
  BTN_SPEECH.style.fill = "orange";
  setTimeout(() => {
    BTN_SPEECH.style.fill = "white";
  }, 3000);
}
