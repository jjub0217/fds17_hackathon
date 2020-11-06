// DOMs
const $todoBtn = document.querySelector(".todo-btn");
const $todoWrap = document.querySelector(".todo-wrap");
const $closeBtn = document.querySelector(".close-btn");
const $todos = document.querySelector(".todos");
const $todoInput = document.querySelector(".todo-input");
const $addBtn = document.querySelector(".add-btn");
const $completeAllButton = document.querySelector(".complete-all");
const $clearCompleteButton = document.querySelector(".clear-complete");
const $nav = document.querySelector('.nav');
const $activeTodosNumber = document.querySelector(".active-todo");
const $completedNumber = document.querySelector(".completed-todo");


// states
let todos = [];

// 함수 정의
const fetchTodos = () => {
  todos = [{
      id: 1,
      content: "HTML",
      completed: false
    },
    {
      id: 2,
      content: "CSS",
      completed: false
    },
    {
      id: 3,
      content: "Javascript",
      completed: false
    }
  ];
  render();
};
 
const render = () => {
  
  let tabMoveTodos = [...todos];
  // console.log(tabMoveTodos);// 기존 배열
  const targetId = $nav.querySelector('.active').id;
  console.log(targetId); all 

 if(targetId === 'completed'){
   tabMoveTodos = todos.filter(todo => todo.completed)
  }else if(targetId === 'active')
  {
    tabMoveTodos = todos.filter(todo => !todo.completed)
  }

  let html = "";
  tabMoveTodos.forEach(todo => {
    html += `<li id="${todo.id}" class="todo-item">
      <input id="ck-${todo.id}" class="checkbox" type="checkbox"
      ${todo.completed ? 'checked' : ""}>
      <label for="ck-${todo.id}">${todo.content}</label>
      <i class="remove-todo far fa-times-circle"></i>
    </li>`
  });
  $todos.innerHTML = html;

  $completedNumber.textContent = todos.filter(todo => todo.completed).length;
  $activeTodosNumber.textContent = todos.filter(todo => !todo.completed).length;

};

const getGenerateId = () => {
  return todos.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
};

const addTodo = (content) => {
  todos = [{
    id: getGenerateId(),
    content,
    completed: false
  }, ...todos];
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
const toggleCompleted = (id) => {
  todos = todos.map(todo => todo.id === +id ? ({
    ...todo,
    completed: !(todo.completed)
  }) : todo)
}

$todos.onchange = (e) => {
  toggleCompleted(e.target.parentNode.id)
  render();
}


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
  todos = todos.map(todo => ({
    ...todo,
    completed: checked
  }))
}

$completeAllButton.onchange = e => {
  completeAll(e.target.checked);
  render();
}


// clear-completed 버튼 누르면, 체크박스 체크 되어있는 li 삭제하기
const clearComplete = () => {
  todos = todos.filter(todo => !todo.completed);
}

$clearCompleteButton.onclick = e => {
  if (!e.target.matches('.clear-complete > button')) return;
  clearComplete();

  render();
}

// checked가 true 인 li에만 돌아가면서 Active 클래스를 달기
const tabMove = (target) => {
  // console.log($nav); // $nav 의 li들
  // console.log(Array.isArray($nav)); // false
  // console.log($nav.children); // HTMLCollection (3) <- 유사배열 객체
  [...$nav.children].forEach($navItem => {
    if ($navItem === target) {
      target.classList.add('active');
    } else {
      $navItem.classList.remove('active');
    }
  })
}


$nav.onclick = e => {
  if (!e.target.matches('.nav > li')) return;
  tabMove(e.target); // Active를 선택하면 id가 Active인 li
  render();
}