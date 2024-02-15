let addBtn = document.querySelector(".addNote");
let container = document.querySelector(".container");
let todoText = document.querySelector(".todo-text");
let todoDate = document.querySelector(".todo-date");
// let reset = document.querySelector(".reset");
let todoList = [];

function addNote() {
  if (todoText.value === "") {
    alert("please enter the note ");
  } else if (todoDate.value === "") {
    alert("please enter the date");
  } else {
    todoList.push({ name: todoText.value, date: todoDate.value });
    console.log("hare krishna");
    // console.log(todoList);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    todolist();
  }
}

const todolist = () => {
  let html = "";

  for (i = 0; i < todoList.length; i++) {
    let { name, date } = todoList[i];
    html += `<div class="js-container"> 
    <span class="todo-input" style=" justify-self: start;">${
      i + 1
    } ${name}</span>
    <span class="todo-input" style=" justify-self: start;">${date}</span>
    <button class="js-del todo-input" onclick="todoList.splice(${i},1); setTodoList();
    todolist();" style=" justify-self: start;">Delete</button>
  </div>`;
  }
  console.log(todoList.length === 0);
  // console.log(todoList == []);
  if (todoList.length === 0) {
    container.innerHTML = html;
  } else {
    container.innerHTML =
      html +
      '<button   class="todo-input js-reset" onclick="reset()">Reset</button>';
  }
};

const setTodoList = () => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

addBtn.addEventListener("click", addNote);

const reset = () => {
  localStorage.clear();
  container.innerHTML = "";
  todoList = [];
};

const todolistOnWindowLoad = () => {
  let todoListstr = localStorage.getItem("todoList");
  console.log(todoListstr);
  todoList = JSON.parse(todoListstr) || [];

  todolist();
  // if (todoListstr !== undefined) {

  //   todoList = JSON.parse(todoListstr);
  //   todolist();
  // }
  // console.log(todoList);

  // else {
  //   todoList = [];
  // }
};
todolistOnWindowLoad();
