// DOMs
const $todoBtn = document.querySelector(".todo-btn");
const $todoWrap = document.querySelector(".todo-wrap");
const $closeBtn = document.querySelector(".close-btn");
const $todos = document.querySelector(".todos");
const $todoInput = document.querySelector(".todo-input");
const $addBtn = document.querySelector(".add-btn");

// states
let todos = [];

// 함수 정의
const fetchTodos = () => {
  todos = [
    { id: 1, content: "HTML", completed: false },
    { id: 2, content: "CSS", completed: false },
    { id: 3, content: "Javascript", completed: false },
  ];
  render();
};

const render = () => {
  let html = "";
  todos.forEach(({ id, content, completed }) => {
    html += `<li id="${id}" class="todo-item">
    <input id="ck-my${id}" class="checkbox" type="checkbox" ${completed}? 'checked' : ''>
    <label for="ck-my${id}">${content}</label>
    <i class="remove-todo far fa-times-circle"></i>
  </li>`;
  });
  $todos.innerHTML = html;
};

const getGenerateId = () => {
  return todos.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
};

const addTodo = (content) => {
  todos = [{ id: getGenerateId(), content, completed: false }, ...todos];
  render();
};

window.onload = fetchTodos;

// 이벤트
$todoBtn.onclick = () => {
  $todoWrap.classList.toggle("slide");
};

$closeBtn.onclick = () => {
  $todoWrap.classList.remove("slide");
};

window.onkeyup = (e) => {
  console.log(e);
  if (e.key !== "Escape") return;
  $todoWrap.classList.remove("slide");
  $loginwrap.classList.remove("activeLogin");
  $wrap.classList.remove("activeLogin");
};

$todoInput.onkeyup = (e) => {
  if (e.key !== "Enter" || !$todoInput) return;
  addTodo($todoInput.value);
  render();
  $todoInput.value = "";
  $todoInput.focus();
};

$addBtn.onclick = (e) => {
  if (!$todoInput.value) return;
  addTodo($todoInput.value);
  render();
  $todoInput.value = "";
  $todoInput.focus();
};
