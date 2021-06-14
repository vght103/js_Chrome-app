var API_KEY = "e42289dfdefc1f3d3d6474f23b66134f";

// 나의 위치를 찾는 함수
function onGeoOk(position){
  var Mylatitude = position.coords.latitude;
  var Mylongitude = position.coords.longitude;
  console.log("my lacation is", Mylatitude, Mylongitude);

  var url = `https://api.openweathermap.org/data/2.5/weather?lat=${Mylatitude}&lon=${Mylongitude}&appid=${API_KEY}&units=metric`;
  // var url = "https://api.openweathermap.org/data/2.5/weather?lat=37.6055862&lon=127.07408489999997&appid=e42289dfdefc1f3d3d6474f23b66134f"

 // 현재 내가 위치한 곳을 url로 나타낸 다.

  fetch(url).then(response => response.json()).then(data => {
    var weather = document.querySelector("#weather span:first-child");
    var city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });


  console.log(url);
}


function onGeoError(){
  alert("위치를 찾을 수 없습니다.");
}

// 내 위치 찾기
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);



// 날씨를 가져오려면 API 를 가져와야 한다.

// https://openweathermap.org/

// 여기서 로그인 하고 API 클릭
// current weater data -> API doc -> by geolocationCoordinates 에서 url 찾기

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// 콘솔에서 위도 경도 확인 후 {lat} {lon} 에 붙여넣기

// {API key} 는  사이트에서 내 계정, API KEY 확인 후 붙여넣기
// https://home.openweathermap.org/api_keys

// 최종
// https://api.openweathermap.org/data/2.5/weather?lat=37.6055862&lon=127.07408489999997&appid=e42289dfdefc1f3d3d6474f23b66134f