// https://picsum.photos/v2/list?page=1&limit=5
const slider = document.querySelector(".slider");
const dotsContainer = document.querySelector(".dot_container");

async function fetchListOfImages() {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=10",
      {
        method: "GET",
      }
    );

    const imagesList = await response.json();
    if (imagesList && imagesList.length > 0) displayImages(imagesList);
  } catch (error) {
    throw new Error(error);
  }
}

function displayImages(getImagesList) {
  slider.innerHTML = getImagesList
    .map(
      (item) => `
    <div class="slide">
    <img src=${item.download_url} alt=${item.author}/>
    </div>
    `
    )
    .join(" ");

  dotsContainer.innerHTML = getImagesList
    .map(
      (item, index) => `
    <span class="dot ${index === 0 ? "active" : ""}" data-slide=${index}></span>
    `
    )
    .join(" ");
}

fetchListOfImages();

//slider functionality begins

setTimeout(() => {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentSlide = 0;

  function activeDot(slide) {
    document.querySelectorAll(".dot").forEach((dotItem) => {
      dotItem.classList.remove("active");
      document
        .querySelector(`.dot[data-slide="${slide}"]`)
        .classList.add("active");
    });
  }
  function changeCurrentSlide(currentSlide) {
    slides.forEach(
      (slideItem, index) =>
        (slideItem.style.transform = `translateX(${
          100 * (index - currentSlide)
        }%)`)
    );
  }
  changeCurrentSlide(currentSlide);

  nextBtn.addEventListener("click", function () {
    currentSlide++;
    if (slides.length - 1 < currentSlide) {
      currentSlide = 0;
    }
    changeCurrentSlide(currentSlide);
    activeDot(currentSlide);
  });
  prevBtn.addEventListener("click", function () {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    changeCurrentSlide(currentSlide);
    activeDot(currentSlide);
  });

  dotsContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dot")) {
      const getSlide = e.target.dataset.slide;
      changeCurrentSlide(getSlide);
      activeDot(getSlide);
    }
  });
}, 1000);
