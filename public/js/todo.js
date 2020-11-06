// DOMs
const $todoBtn = document.querySelector(".todo-btn");
const $todoWrap = document.querySelector(".todo-wrap");
const $closeBtn = document.querySelector(".close-btn");

// 이벤트
$todoBtn.onclick = () => {
  $todoWrap.classList.toggle("slide");
};

$closeBtn.onclick = () => {
  $todoWrap.classList.remove("slide");
};
