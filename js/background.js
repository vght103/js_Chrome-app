var images = ["0.jpg", "1.jpg", "2.jpg"];

// 랜덤 이미지 가져오기

var chosenImage = images[Math.floor(Math.random() * images.length)];

var bgImage = document.createElement("img");
bgImage.classList = "bgimg";


// bgImage.src = `imgs/${chosenImage}`;
bgImage.src = "imgs/"+chosenImage;


document.body.appendChild(bgImage);