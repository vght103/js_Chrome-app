// 조건문

var age = parseInt(prompt("몇살이야?"));
// parseInt = string -> number 로 바꾸기
// if(isNaN(age)) {
//   console.log("please write a number");
// } else {
//   console.log("Thank you for your information");
// }


if(isNaN(age) || age < 0) { // 음수를 적은걸 알고 싶으면 OR 사용
  console.log("please write a positive number");
} else if (age < 18) {
  console.log("You are too young");
} else if(age >= 18 && age <= 50){
  console.log("You can drink");
} else if(age > 50 && age <= 80){
  console.log("You should exercise");
} else {
  console.log("You should stop drinking");
}
