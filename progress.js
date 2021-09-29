const input = document.querySelector(".input");
const button = document.querySelector(".button");
const list = document.querySelector(".list");

button.addEventListener("click", addTodo);
list.addEventListener("click", clickInList);

function addTodo(e) {
  e.preventDefault();
  if (input.value == "") {
    return;
  }

  const div = document.createElement("div");

  div.classList.add("todo");

  const todo = document.createElement("li");

  todo.innerText = input.value;
  console.log(input.value);
  todo.classList.add("list-todo");

  div.appendChild(todo);

  const checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fas fa-check"></i>';
  checkButton.classList.add("cek");
  div.appendChild(checkButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash");
  div.appendChild(trashButton);

  list.appendChild(div);
  input.value = "";
}
