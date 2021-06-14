var loginForm = document.querySelector("#login-form");
var loginInput = loginForm.querySelector("input");
var greeting = document.querySelector("h1");

var HIDDEN_CLASSNAME = "hidden";
var USERNAME_KEY = "userName"; 

function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  
  var userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);


  greeting.innerText = "Hello " + userName;
  // greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  createGreetings(userName);
}

function createGreetings(userName){
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = "Hello " + userName;
}


var savedUserName = localStorage.getItem(USERNAME_KEY)

if(savedUserName === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  createGreetings(savedUserName);
}

  // preventDefault = 기본 효과가 적용되는것을 막아준다.
  // submit 은 새로고침이 되는데, 클릭해도 그 기능을 막아준다.