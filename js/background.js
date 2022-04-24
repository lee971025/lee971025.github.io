const images = ["1.jpeg", "2.jpeg", "3.jpeg"];

const myImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `${myImage}`;

document.body.appendChild(bgImage);
