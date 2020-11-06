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
  $loginId.value = "";
  $loginPw.value = "";
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
};

$loginCloseBtn.onclick = () => {
  $showPage();
};
