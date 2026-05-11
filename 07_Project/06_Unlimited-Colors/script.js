//generate a random color
//
/*const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
    console.log(color);
    
  }
  return color
};*/
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  color +=
    hex[Math.floor(Math.random() * 16)] +
    hex[Math.floor(Math.random() * 16)] +
    hex[Math.floor(Math.random() * 16)] +
    hex[Math.floor(Math.random() * 16)] +
    hex[Math.floor(Math.random() * 16)] +
    hex[Math.floor(Math.random() * 16)];
  console.log(color);

  return color;
};

let intervalId;

function changeBgColor() {
  document.body.style.backgroundColor = randomColor();
}

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
