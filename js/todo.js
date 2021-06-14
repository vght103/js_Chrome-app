var todoForm = document.querySelector("#todo-form");
var todoInput = todoForm.querySelector("input");
var todoList = document.querySelector(".todo-list");


// todosData 는 lacoa Storage에 저장되는 것.
// 그런데 어레이는 저장할 수 없고 오로지 텍스트만 저장된다.
// 해서 텍스트 -> 스트링으로 변환해야 한다. JSON.stringify.~~
var todosData = [];
//  여기가 빈값이라 새로고침후 작성하면 로컬스토리지에 새로운 값만 저장이 된다.
// 그래서 하단에 foreach 부분에 todos 를 지정해준다.
var TODOS_KEY = "todosData";




function saveTodoClass(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(todosData));
  // JSON.stringify -> 스트링으로 바꿔서 어레이처럼 보이게 한다.(어레이 아님)
  // 어레이로 만들기 - 스트링으로 바꾸기 -> JSON.parse()
  // 투두리스트를 save 하기 위해서는 어레이로 되어 있어야 한다.
}



function createTodo(newTodoText){
  var todoListItem = document.createElement("li");
  todoListItem.id = newTodoText.id;

  var viewDiv = document.createElement("div");
  viewDiv.classList = "view";

  var toggleBtn = document.createElement("input");
  toggleBtn.type = "checkbox";
  toggleBtn.classList = "toggle";

  var label = document.createElement("label");
  var deleteBtn = document.createElement("button");
  deleteBtn.classList = "destroy";

  label.innerText = newTodoText.text;
  // newTodoObj 의 오브젝트를 받아오기 때문에 . text를 추가하면 
  // 변수에 지정한 텍스트(newTodoText) 나온다


  deleteBtn.innerText = "❌";
  deleteBtn.addEventListener("click", deleteTodo);
  


  todoListItem.appendChild(viewDiv);
  viewDiv.appendChild(toggleBtn);
  viewDiv.appendChild(label);
  viewDiv.appendChild(deleteBtn);
  todoList.appendChild(todoListItem);

}

function deleteTodo(e){
  var currentList = e.target.parentElement.parentElement;
  console.log(currentList);
  todosData = todosData.filter((todoId) => todoId.id !== parseInt(currentList.id));

  // todoId = number 이고 currentList.id = string 이다. 그래서 서로 다른값이 된다.
  // 그래서 스트링을 넘버로 바꿔준다. parseInt()

  saveTodoClass();

  // todo 데이터에서 todoID 를 지운다음에 saveTodoClass 를 한번 더 실행해주어야 된다.



  currentList.remove();
}

function handleTodoSubmit(e) {
  event.preventDefault(); // 서밋 기본 동작 멈추기
  var newTodoText = todoInput.value;
  todoInput.value = "";

  var newTodoObj = {
    text: newTodoText,
    id: Date.now(),
  }

  todosData.push(newTodoObj);

  createTodo(newTodoObj);
  saveTodoClass();
}

todoForm.addEventListener("submit", handleTodoSubmit)


var saveTodoList = localStorage.getItem(TODOS_KEY);

if(saveTodoList) {
  var parsedTodos = JSON.parse(saveTodoList);
  parsedTodos.forEach(createTodo);
  todosData = parsedTodos;
  // 새로고침후 리스트 업로드해도 기존 자료들이 저장되게끔 하는 것 
  // 이전 todo 를 복원한다는 말이다.

  // forEach 는 어레이의 각 item에 대해 function을 실행한다.
  // 작성한 리스트를 저장해놓고 새로고침해도 불러온다.
}

function todoFilterClass(){ 
  return true;
}

//필터 함수는, 어레이 안에 데이터를 지우는게 X
//기존 어레이는 그냥 두고, 선택된 아이템을 제외하고 새로운 어레이를 만든다.
// 필터 함수는 꼭 true 를 리턴해야한다. (새로운 어레이에서 기존 데이트를 포함하고 싶으면)
// true 는 어레이에 추가, false 는 어레이에서 제외됨.