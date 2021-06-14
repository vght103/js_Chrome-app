var h1 = document.querySelector("h1");

function handleh1Click(){
  h1.style.color = "blue";
}

function handleMouseEnter(){
  h1.innerText = "hey im here";
}

function handleMouseLeave(){
  h1.innerText = "mouse is gone";
}

function handleWindowResize(){
  document.body.style.backgroundColor = "skyblue";
}

function handleWindowCopy(){
  alert("copier");
}

function handleWindowOffline(){
  alert("SOS no WIFI");
}

function handleWindowOnline(){
  alert("WIFI is PERPECT");
}


// h1.addEventListener("click", handleh1Click);
h1.onclick = handleh1Click;
// 이렇게 js 내에서 onclick  이라고 해도 된다.
h1.addEventListener("mouseenter", handleMouseEnter);
// h1.onmouseenter ~~~
h1.addEventListener("mouseleave", handleMouseLeave);
// h1.onmouseleave ~~~

//  윈도우 이벤트

window.addEventListener("resize", handleWindowResize);

// 클립보드 이벤트
window.addEventListener("copy", handleWindowCopy);

// 와이파이 이벤트
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
