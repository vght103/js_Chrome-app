var h1 = document.querySelector("h1");

function handleh1Click(){
  var currentColor = h1.style.color;
  var newColor;

  if(currentColor === "blue"){
    newColor = "pink";
  } else {
    newColor = "blue";
  }

  h1.style.color = newColor;
}
//  클릭 한번하면 파란색 , 다시 클릭 핑크 다시 파랑 다시 핑크

h1.addEventListener("click", handleh1Click);
