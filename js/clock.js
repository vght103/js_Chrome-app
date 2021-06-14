var clock = document.querySelector("h2#clock");

function getClock(){
  var date = new Date();
  var hours = String(date.getHours()).padStart(2, "0");
  var minutes = String(date.getMinutes()).padStart(2, "0");
  var seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = hours + ":" + minutes + ":" + seconds;
}



getClock();
// getClock 을 인터벌 위에 시작해서 곧바로 시간이 시작되게끔 한다.
//  인터벌부터 시작하면 1초 후 시간이 나오기 때문
setInterval(getClock, 1000)
// setInterval(함수, 시간(1/1000))
// setInterval 은 함수를 지정한 시간만큼 계속 자동 실행시켜준다.


// 다른 버전 = setTimeout()

// setTimeout(getClock, 1000);

// setInterval / setTimeout 차이는
// 인터벌은 시간마다 계속해서 실행 / 타임아웃은 지정 시간에 한번만 실행


// padStart = 스트링인 값 앞쪽에 원하는 내용을 집어넣을 수 있다.

// "1".padStart(2, "0");
// 숫자 1 을 01 로 두자리로 만들고 싶으면,
// (원하는 length, 값) 으로 작성

//  = "01"

// !!!!! 꼭 스트링이어야 한다.