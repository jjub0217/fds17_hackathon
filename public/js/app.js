// 로그인 창 구현

// DOMs
const $loginPageEnterBtn = document.querySelector(".login-page-enter-btn");
const $loginwrap = document.querySelector(".login-wrap");
const $wrap = document.querySelector(".wrap");
const $loginForm = document.querySelector('.login-form')
const $loginId = document.querySelector('.login-id');
const $loginPw = document.querySelector('.login-pw');


// function
const $showPage = () =>{
  $loginwrap.classList.toggle("active");
  $wrap.classList.toggle("active");
};


// event handler
$loginPageEnterBtn.onclick = (e) => { $showPage(); };

$loginForm.onsubmit = e => {
  e.preventDefalut();
  if($loginId.value!== && $loginPw.value !==){
    alert('아이디 또는 비밀번호가 일치하지 않습니다. 다시 입력해주세요')
  } else {
    $showPage();
  }
};




