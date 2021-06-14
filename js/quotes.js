var quotes = [
  {
    quote: "코딩은 마치 악기를 다루거나 스포츠를 하는 것과 같다.",
  },
  {
    quote: "코딩은 학습을 통해 익힐 수 있다.",
  },
  {
    quote: "코딩은 문제를 해결해 나가는 과정이다.",
  },
  {
    quote: "천재여야만 코딩을 할 수 있는 것이 아니다. 결단력만 있으면 된다.",
  },
  {
    quote: "오늘날 컴퓨터가 사용되지 않는 곳이 있는가?",
  },
  {
    quote: "오늘의 프래그러머는 미래의 마법사이다.",
  }



];

var quote = document.querySelector("#quote span:first-child");
var author = document.querySelector("#quote span:last-child");

var todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;

// Math.random()
// 랜덤은 0 ~ 1 사이의 값을 랜덤으로 나타낸다.

// Math.random * 6
// 1~6 까지 랜덤으로 나타낸다


// Math.round(1.6)
// 라운드는 뒤에 소수점을 없애준다.
// 1.6 이어도 오로지 1만 나타낸다. 다른걸 써도 마찬가지.

// Math.ceil (1.1)  // 반올림
// = 2

// 오로지 정수만 1이 될 수 있고, 소수점이 붙으면 반올림된다.
// 1.6 = 2


// Math.floor() // (1.999999) 소수점 앞에 숫자가 나오는대로만 정수로 표현된다.
// 1.9999999999 = 1
