const hexBtn = document.querySelector(".hex_btn");
let hexValue = document.querySelector(".hex_color_value");
//rgb values
const rgb_btn = document.querySelector(".rgb_btn");
let red = document.querySelector("#red");
let green = document.querySelector("#blue");
let blue = document.querySelector("#green");

hexBtn.addEventListener("click", () => {
  const hexChar = "0123456789ABCDEF";
  const hexContainer = document.querySelector(".hex-color-generator");
  let hexColorOutput = "#";
  for (let i = 0; i < 6; i++) {
    hexColorOutput += hexChar.charAt(
      Math.floor(Math.random() * hexChar.length)
    );
  }
  hexContainer.style.backgroundColor = hexColorOutput;
  hexValue.innerHTML = hexColorOutput;
});

rgb_btn.addEventListener("click", () => {
  let rgbContainer = document.querySelector(".rgb-color-generator");
  let redValue = red.value;
  let greenValue = green.value;
  let blueValue = blue.value;

  rgbContainer.style.backgroundColor = `rgb(${redValue}, ${greenValue},${blueValue})`;
});
