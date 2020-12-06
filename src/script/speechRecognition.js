import { SEARCH_INPUT, mainCearch } from "./search";
import { currentLeng } from "./time";

const BTN_SPEECH = document.querySelector(".search-input_speech");
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition;

export function speech() {
  recognition = new SpeechRecognition();

  BTN_SPEECH.addEventListener("click", () => {
    recognition.lang = currentLeng === "ru" ? "ru-RU" : "en-EN";
    console.log(recognition.lang);
    recognition.start();
    console.log("Ready to receive a color command.");
  });

  recognition.onresult = function (event) {
    console.log(event.results[0][0].transcript);
    SEARCH_INPUT.value = event.results[0][0].transcript;
    mainCearch();
  };

  recognition.onerror = function (event) {
    console.log(event.error);
  };
}

// ;
