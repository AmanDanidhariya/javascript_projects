const stars = document.querySelectorAll(".fa-star-o");
const selectedValue = document.querySelector(".selected_rating_value");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const value = parseInt(star.dataset.value);
    selectedValue.textContent = value;
    resetValue();
    markStar(value);
  });
});
function markStar(value) {
  for (let i = 0; i < value; i++) {
    stars[i].classList.add("active");
  }
}

function resetValue() {
  stars.forEach((star) => {
    star.classList.remove("active");
  });
}
