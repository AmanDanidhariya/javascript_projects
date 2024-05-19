const container = document.querySelector(".container");
const header = document.querySelector(".header");
const btn = document.querySelector(".btn");
const body = document.querySelector("body");

// btn.addEventListener("click", function () {
//   if (body.classList.contains("light")) {
//     body.classList.remove("light");
//     body.classList.add("dark");
//   } else {
//     body.classList.remove("dark");
//     body.classList.add("light");
//   }
//   if (header.classList.contains("light")) {
//     header.classList.remove("light");
//     header.classList.add("dark");
//   } else {
//     header.classList.remove("dark");
//     header.classList.add("light");
//   }
//   if (btn.classList.contains("light")) {
//     btn.classList.remove("light");
//     btn.classList.add("dark");
//   } else {
//     btn.classList.remove("dark");
//     btn.classList.add("light");
//   }
// });

btn.addEventListener("click", function () {
  if (body.getAttribute("data-theme") === "dark") {
    body.setAttribute("data-theme", null);
  } else {
    body.setAttribute("data-theme", "dark");
  }
});
