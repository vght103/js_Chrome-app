var images = ["captain.jpg", "iron-man.jpg", "thor.jpg"];

// 랜덤 이미지 가져오기

var chosenImage = images[Math.floor(Math.random() * images.length)];

// var bgImage = document.createElement("img");
// bgImage.classList = "bgimg";


var bgMainImage = document.querySelector("body > main");
bgMainImage.style.backgroundImage = `url(imgs/${chosenImage})`;


// bgImage.src = `imgs/${chosenImage}`;
// bgImage.src = "imgs/"+chosenImage;


// document.body.appendChild(bgImage);


