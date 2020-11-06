const $timerHour = document.querySelector(".timer-hour");
const $timerMin = document.querySelector(".timer-min");
const $timerSecond = document.querySelector(".timer-second");
const $greetingWord = document.querySelector(".greeting-word");
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

// DOMs
const $loginPageEnterBtn = document.querySelector(".login-page-enter-btn");
const $loginwrap = document.querySelector(".login-wrap");
const $wrap = document.querySelector(".wrap");
const $loginForm = document.querySelector(".login-form");
const $loginId = document.querySelector(".login-id");
const $loginPw = document.querySelector(".login-pw");

const $loginBtn = document.querySelector(".login-btn");


const $loginCloseBtn = document.querySelector(".login-close-btn");

// function
const $showPage = () => {
  $loginwrap.classList.toggle("activeLogin");
  $wrap.classList.toggle("activeLogin");
};
// event handler
$loginPageEnterBtn.onclick = (e) => {
  $showPage();
};

$loginBtn.onclick = (e) => {
  if ($loginId.value && $loginPw.value) {
    alert("아이디 또는 비밀번호가 일치하지 않습니다. 다시 입력해주세요");
  } else {
    $showPage();
  }
}


$loginCloseBtn.onclick = () => {
  $showPage();
};


