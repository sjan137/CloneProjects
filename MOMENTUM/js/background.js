// const images = new Image();
const randomNumber = Math.ceil(Math.random() * 11);
const bgImage = document.createElement("img");

bgImage.src = `img/${randomNumber}.jpg`;

document.body.appendChild(bgImage);