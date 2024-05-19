const categories = ["All", "Men", "Women", "Kids"];
const content = [
  {
    id: "Men",
    label: "Men Shirt 1",
  },
  {
    id: "Men",
    label: "Men Shirt 2",
  },
  {
    id: "Men",
    label: "Men Shirt 3",
  },
  {
    id: "Men",
    label: "Men Shirt 4",
  },
  {
    id: "Men",
    label: "Men Shirt 5",
  },
  {
    id: "Women",
    label: "Women Shirt 1",
  },
  {
    id: "Women",
    label: "Women Shirt 2",
  },
  {
    id: "Women",
    label: "Women Shirt 3",
  },
  {
    id: "Women",
    label: "Women Shirt 4",
  },
  {
    id: "Women",
    label: "Women Shirt 5",
  },
  {
    id: "Kids",
    label: "Kids Shirt 1",
  },
  {
    id: "Kids",
    label: "Kids Shirt 2",
  },
  {
    id: "Kids",
    label: "Kids Shirt 3",
  },
  {
    id: "Kids",
    label: "Kids Shirt 4",
  },
  {
    id: "Kids",
    label: "Kids Shirt 5",
  },
];

const filterButtons = document.querySelector(".filter-buttons-wrapper");
const content_div = document.querySelector(".content_div");

function createCategory() {
  categories.forEach((category) => {
    const buttonEle = document.createElement("button");
    buttonEle.innerText = category;
    buttonEle.setAttribute("data-category", category);
    buttonEle.classList.add("filter_btn");

    filterButtons.appendChild(buttonEle);
  });
}

function createContent() {
  content.forEach((item) => {
    const singleContent = document.createElement("div");
    singleContent.classList.add("card", item.id);
    singleContent.textContent = item.label;

    content_div.appendChild(singleContent);
  });
}

createCategory();
createContent();

const allFilterBtn = document.querySelectorAll(".filter_btn");
const allCards = document.querySelectorAll(".card");

console.log(allCards[0].classList);
//id===currentCategory
function filterCardsByCategory(currentCategory, allCards) {
  allCards.forEach((card) => {
    let isShowAllCards = currentCategory.toLowerCase() === "all";
    let isItemFiltered = !card.classList.contains(currentCategory);
    if (isItemFiltered && !isShowAllCards) {
      card.classList.add("hide");
    } else {
      card.classList.remove("hide");
    }
  });
}

allFilterBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    const currentFilter = btn.dataset.category;

    filterCardsByCategory(currentFilter, allCards);
  });
});
