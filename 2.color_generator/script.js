const hexBtn = document.querySelector(".hex_btn");
const hexCopyBtn = document.querySelector("#hex_copy");
let hexValue = document.querySelector(".hex_color_value");
//rgb values
let rgbContainer = document.querySelector(".rgb-color-generator");
const rgb_btn = document.querySelector(".rgb_btn");
const rgbCopyBtn = document.querySelector("#rgb_copy");
let red = document.querySelector("#red");
let green = document.querySelector("#blue");
let blue = document.querySelector("#green");
let redValue;
let greenValue;
let blueValue;
let finalRGBValue;

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
  hexValue.textContent = hexColorOutput;
});

rgb_btn.addEventListener("click", () => {
  redValue = red.value;
  greenValue = green.value;
  blueValue = blue.value;
  rgbContainer.style.backgroundColor = `rgb(${redValue}, ${greenValue},${blueValue})`;
});

hexCopyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(hexValue.textContent);
  alert("Hex color copy successfully.");
});

rgbCopyBtn.addEventListener("click", () => {
  // navigator.clipboard.writeText(hexValue.innerHTML);
  navigator.clipboard.writeText(`rgb(${redValue},${greenValue},${blueValue})`);
  alert("RGB color copy successfully.");
});
