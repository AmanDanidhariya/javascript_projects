const AccordionData = [
  {
    id: 1,
    question: "What is JavaScript?",
    answer:
      "JavaScript is a high-level programming language that is primarily used for creating interactive web pages and web applications.",
  },
  {
    id: 2,
    question: "What are the features of ES6?",
    answer:
      "ES6, also known as ECMAScript 2015, introduced several new features to JavaScript, including arrow functions, classes, template literals, and let/const for variable declarations.",
  },
  {
    id: 3,
    question: "How does asynchronous programming work in JavaScript?",
    answer:
      "Asynchronous programming in JavaScript allows tasks to be executed concurrently without blocking the main thread. This is achieved using callbacks, Promises, or async/await syntax.",
  },
  {
    id: 4,
    question: "What is the difference between var, let, and const?",
    answer:
      "var is function-scoped, let is block-scoped, and const is block-scoped and its value cannot be reassigned once initialized. They are used for variable declarations in JavaScript.",
  },
];
const accordionWrapper = document.querySelector(".accordion");
console.log(AccordionData);
function createAccordion() {
  accordionWrapper.innerHTML = AccordionData.map(
    (item) => `
    <div class="accordion_item">
      <div class="accordion_title">
        <h3>${item.question}</h3>
        <i class="fa-solid fa-arrow-up"></i>
      </div>
      <div class="answer">${item.answer}</div>
    </div>
  `
  ).join("");
}

createAccordion();

const getAccordionTitle = document.querySelectorAll(".accordion_title");

console.log(getAccordionTitle);

getAccordionTitle.forEach((currentItem) => {
  currentItem.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
    } else {
      let getAlreadyAddedActiveClasses = document.querySelectorAll(".active");
      getAlreadyAddedActiveClasses.forEach((currentActiveItem) => {
        currentActiveItem.classList.remove("active");
      });
      currentItem.classList.add("active");
    }
  });
});
