function greet() {
  console.log("Have a good day!");
  console.log("Have a good 2 day!");
}

export default greet;

let rotare = 180;
const REFRESH_btn = document.querySelector(".header__refreshBtn");
const VECTOR_REFRESH_btn = document.querySelector(".inVector");
const LENG_EN_btn = document.querySelector(".leng-en");
const LENG_RU_btn = document.querySelector(".leng-ru");
const DEG_F_btn = document.querySelector(".deg-f");
const DEG_C_btn = document.querySelector(".deg-c");

DEG_F_btn.addEventListener("click", toggleDeg);
DEG_C_btn.addEventListener("click", toggleDeg);

LENG_EN_btn.addEventListener("click", toggleLeng);
LENG_RU_btn.addEventListener("click", toggleLeng);

function toggleLeng(e) {
  if (e.target.classList.contains("passive")) {
    LENG_EN_btn.classList.toggle("passive");
    LENG_RU_btn.classList.toggle("passive");
  }
}

function toggleDeg(e) {
  if (e.target.classList.contains("passive")) {
    DEG_F_btn.classList.toggle("passive");
    DEG_C_btn.classList.toggle("passive");
  }
}

REFRESH_btn.addEventListener("click", () => {
  VECTOR_REFRESH_btn.style.transform = `rotate(${rotare}deg)`;
  rotare += 180;
  const img = new Image();
  img.src = "../src/assets/imeges/bg2.png";
  img.onload = () => {
    document.body.style.backgroundImage = `url(${img.src})`;
  };

  // document.body.classList.add("a");
});
