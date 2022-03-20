const images = ["촛불.jpg","달.jpg","건물.jpg"];

const chosenImages = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImages}`;
bgImage.style.backgroundImage = bgImage;
document.body.appendChild(bgImage);
