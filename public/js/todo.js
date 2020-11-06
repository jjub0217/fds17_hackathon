// DOMs
const $todoBtn = document.querySelector(".todo-btn");
const $todoWrap = document.querySelector(".todo-wrap");
const $closeBtn = document.querySelector(".close-btn");
const $todos = document.querySelector(".todos");
const $todoInput = document.querySelector(".todo-input");
const $addBtn = document.querySelector(".add-btn");
const $completeAllButton = document.querySelector(".complete-all");
const $clearCompleteButton = document.querySelector('clear-complete-btn');


// states
let todos = [];

// 함수 정의
const fetchTodos = () => {
  todos = [
    { id: 1, content: "HTML", completed: false },
    { id: 2, content: "CSS", completed: false },
    { id: 3, content: "Javascript", completed: false }
  ];
  render();
};

const render = () => {
  let html = "";
  todos.forEach(todo => {
    html += `<li id="${todo.id}" class="todo-item">
      <input id="ck-${todo.id}" class="checkbox" type="checkbox"
      ${todo.completed ? 'checked' : ""}>
      <label for="ck-${todo.id}">${todo.content}</label>
      <i class="remove-todo far fa-times-circle"></i>
    </li>`
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
  if (e.key !== "Enter" || !$todoInput.value) return;
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





// todo 

// todo의 x 버튼 누르면 li 삭제하기
const removeTodo = (id) => {
todos = todos.filter(todo => todo.id !== +id);
}

$todos.onclick = e => {
  if (!e.target.matches('.todos > li > i')) return;
  console.log(e.target); // i
  console.log(e.target.parentNode.id); // 세변째 li 클릭하면: 3 
  removeTodo(e.target.parentNode.id);  

  render(); 
}

// 전체 체크, 전체 해제 하기
const completeAll = (checked) => {
  todos = todos.map(todo => ({...todo, completed: checked}))
}

$completeAllButton.onchange = e => {
  completeAll(e.target.checked);
  render();
}


// clear-completed 버튼 누르면, 체크박스 체크 되어있는 li 삭제하기

const clearComplete = () => {
  todos = todos.filter(todo => !todo.completed)
}

$clearCompleteButton.onclick = e => {
  if(!e.target.matches('.clear-complete > button')) return;
  clearComplete();
  render();
}