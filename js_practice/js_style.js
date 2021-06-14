var h1 = document.querySelector("h1");

function handleh1Click(){
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleh1Click);


// 이것보다 더 쉬운방법이 존재함 -> toggle

// function handleh1Click(){
//   var clickedClass = "clicked"
//   if(h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }