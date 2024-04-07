const images = [
    "bgimg1.jpg",
    "bgimg2.jpg",
    "bgimg3.jpg",
    "bgimg4.jpg",
    "bgimg5.jpg",
    "bgimg6.jpg"
];

const choseImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${choseImage}`;
bgImage.id = "bgimg";

document.body.appendChild(bgImage);