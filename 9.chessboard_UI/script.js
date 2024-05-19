let table = document.querySelector(".table");
let textBoxValue;
let getValue = document.querySelector(".getValue");

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("getValue").addEventListener("click", function () {
    textBoxValue = document.querySelector(".textbox").value;
    for (let i = 0; i < textBoxValue; i++) {
      let tr = document.createElement("tr");
      let white = i % 2 === 0 ? true : false;
      for (let j = 0; j < textBoxValue; j++) {
        let td = document.createElement("td");
        if (white) {
          td.setAttribute("class", "box white");
        } else {
          td.setAttribute("class", "box black");
        }
        white = !white;
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
  });
});
// for (let i = 0; i < 8; i++) {
//   let tr = document.createElement("tr");
//   let white = i % 2 === 0 ? true : false;
//   for (let j = 0; j < 8; j++) {
//     let td = document.createElement("td");
//     if (white) {
//       td.setAttribute("class", "box white");
//     } else {
//       td.setAttribute("class", "box black");
//     }
//     white = !white;
//     tr.appendChild(td);
//   }
//   table.appendChild(tr);
// }
