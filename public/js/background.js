const $background = document.querySelector(".background");
const $backgroundBtn = document.querySelector(".background-btn");
const $backgroundLi = $background.querySelectorAll("li");


let imgNum = 1;
let backgroundTimer;
let isAnimating = false;
const changeBackground = () => {
  if (isAnimating) return;
  const prev = imgNum;
  imgNum = ++imgNum > $backgroundLi.length ? 1 : imgNum;
  isAnimating = true;
  [...$background.children].forEach(($li) => $li.classList.remove("fade-out"));
  $background.querySelector(`li:nth-child(${imgNum})`).style.opacity = 1;
  $background.querySelector(`li:nth-child(${prev})`).classList.add("fade-out");
  $background.querySelector(`li:nth-child(${prev})`).onanimationend = () => {
    isAnimating = false;
    $backgroundBtn.classList.remove("rolling");
  };
  $background.querySelector(`li:nth-child(${prev})`).style.opacity = 0;
  backgroundTimer = setTimeout(changeBackground, 3000);
};
backgroundTimer = setTimeout(changeBackground, 3000);
$backgroundBtn.onclick = () => {
  if (isAnimating) return;
  $backgroundBtn.classList.add("rolling");
  changeBackground();
};
backgroundTimer = setTimeout(changeBackground, 3000);

