const container = document.querySelector(".products_container");
const btn_load = document.querySelector(".load_more");

let currentStep = 0;

async function fetchProducts(currentStep) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${
        currentStep === 0 ? 0 : currentStep * 10
      }`,
      {
        method: "GET",
      }
    );
    const result = await response.json();
    console.log(result);
    if (result && result.products) displayProducts(result.products);
  } catch (error) {
    console.log(error);
  }
}

function displayProducts(productList) {
  productList.forEach((item) => {
    const productWrapper = document.createElement("div");
    const productTitle = document.createElement("p");
    const productThumbnail = document.createElement("img");
    const productPrice = document.createElement("p");

    productWrapper.classList.add("product_wrapper");
    productTitle.classList.add("product_title");
    productThumbnail.classList.add("product_thumbnail");
    productPrice.classList.add("product_price");

    productTitle.textContent = item.title;
    productThumbnail.src = item.thumbnail;
    productPrice.textContent = item.price;

    productWrapper.appendChild(productThumbnail);
    productWrapper.appendChild(productTitle);
    productWrapper.appendChild(productPrice);

    container.appendChild(productWrapper);
  });
  if (container.children.length === 100) {
    btn_load.setAttribute("disabled", 'true');
  }
}
fetchProducts(currentStep);

btn_load.addEventListener("click", function () {
  fetchProducts((currentStep += 1));
});
