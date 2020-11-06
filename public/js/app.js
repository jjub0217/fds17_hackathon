// clock 구현
const $timerDay = document.querySelector(".timer-day");
const $timerNow = document.querySelector(".timer-now");
const $greeting = document.querySelector(".greeting");

const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDay();
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

$timerDay.textContent = `${year}년 ${month}월 ${date}일`;
$timerNow.textContent = `${hour < 10 ? "0" + hour : hour} : ${
  minute < 10 ? "0" + minute : minute
} : ${second < 10 ? "0" + second : second}`;

const greetingText =
  hour > 6 && hour < 12
    ? "Good Morning"
    : hour > 12 && hour < 18
    ? "Good Afternoon"
    : hour > 18 && hour < 21
    ? "Good Evening"
    : "Good Night";

$greeting.textContent = `${greetingText}`;

// 배경이미지 전환
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

// DOMs 로그인창
const $loginPageEnterBtn = document.querySelector(".login-page-enter-btn");
const $loginwrap = document.querySelector(".login-wrap");
const $wrap = document.querySelector(".wrap");
const $loginForm = document.querySelector(".login-form");
const $loginId = document.querySelector(".login-id");
const $loginPw = document.querySelector(".login-pw");
const $loginBtn = document.querySelector(".login-btn");

// function
const $showPage = () => {
  $loginwrap.classList.toggle("activeLogin");
  $wrap.classList.toggle("activeLogin");
};
// event handler
$loginPageEnterBtn.onclick = (e) => {
  console.log(1);
  $showPage();
};
$loginBtn.onsclick = (e) => {
  if ($loginId.value && $loginPw.value) {
    alert("아이디 또는 비밀번호가 일치하지 않습니다. 다시 입력해주세요");
  } else {
    $showPage();
  }
};
const $loginCloseBtn = document.querySelector(".login-close-btn");
$loginCloseBtn.onclick = (e) => {
  $showPage();
};
