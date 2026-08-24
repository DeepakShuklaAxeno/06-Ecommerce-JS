function initProductPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || 1;
  const product = getProduct(id);
  const overview = document.querySelector("#productOverview");
  renderProductGrid("relatedProducts", PRODUCTS.slice(0, 9));
  if (!product) {
    overview.innerHTML = `<p class="product-not-found">Sorry, we couldn't find that product.</p>`;
    return;
  }

  document.querySelector("#breadcrumbCurrent").textContent = product.title;
  document.querySelector("#productImage").src = product.images[0];
  document.querySelector("#productImage").alt = product.title;

  const thumbsContainer = document.querySelector(
    ".product-gallery__thumbnails",
  );
  thumbsContainer.innerHTML = product.images
    .slice(0, 3)
    .map(
      (img, i) => `
      <button class="product-gallery__thumb-btn${i === 0 ? " product-gallery__thumb-btn--active" : ""}" data-image="${img}">
        <img src="${img}" alt="Thumbnail ${i + 1}" class="product-gallery__thumb-img">
      </button>
    `,
    )
    .join("");

  thumbsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".product-gallery__thumb-btn");
    if (!btn) return;
    thumbsContainer
      .querySelectorAll(".product-gallery__thumb-btn")
      .forEach((el) =>
        el.classList.remove("product-gallery__thumb-btn--active"),
      );
    btn.classList.add("product-gallery__thumb-btn--active");
    document.querySelector("#productImage").src = btn.dataset.image;
  });

  document.querySelector("#productTitle").textContent = product.title;
  document.querySelector("#productStars").innerHTML = renderRatingStars(
    product.rating,
  );
  document.querySelector("#productScore").textContent = product.rating;
  document.querySelector("#productPrice").textContent = "$" + product.price;

  const originalPriceEl = document.querySelector("#productPriceOriginal");
  const discountBadgeEl = document.querySelector("#productDiscountBadge");
  const productCurrentPrice = document.querySelector("#productPrice");
  if (product.originalPrice && product.discountPercentage != 0) {
    productCurrentPrice.textContent = "$" + product.price;
    discountBadgeEl.textContent = product.discountPercentage + "%";
    originalPriceEl.textContent = "$" + product.originalPrice;
  } else {
    productCurrentPrice.textContent = product.price;
    discountBadgeEl.style.display = "none";
    originalPriceEl.style.display = "none";
  }
  document.querySelector("#productDescription").textContent =
    product.description;

  const colorsContainer = document.querySelector("#productColors");
  colorsContainer.innerHTML = product.colors
    .map(
      (color, i) => `
      <button class="color-switch${i === 0 ? " color-switch--active" : ""}" style=" background:${color};" aria-label="${color}"></button>
    `,
    )
    .join("");

  const sizesContainer = document.querySelector("#productSizes");
  sizesContainer.innerHTML = product.sizes
    .map(
      (size, i) => `
      <button class="size-pill${i === 0 ? " size-pill--active" : ""}" data-size="${size}">${size}</button>
    `,
    )
    .join("");

  let selectedColor = product.colors[0];
  let selectedSize = product.sizes[0];

  colorsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".color-switch");
    if (!btn) return;
    colorsContainer
      .querySelectorAll(".color-switch")
      .forEach((el) => el.classList.remove("color-switch--active"));
    btn.classList.add("color-switch--active");
    selectedColor = btn.dataset.color;
  });

  sizesContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".size-pill");
    if (!btn) return;
    sizesContainer
      .querySelectorAll(".size-pill")
      .forEach((el) => el.classList.remove("size-pill--active"));
    btn.classList.add("size-pill--active");
    selectedSize = btn.dataset.size;
  });

  const qtyInput = document.querySelector("#qtyInput");
  let itemQuantity = qtyInput.textContent;
  let decreaseQty = document.querySelector("#qtyDecrease");
  decreaseQty.addEventListener("click", () => {
    if (itemQuantity > 1) itemQuantity--;
    qtyInput.textContent = itemQuantity;
  });
  document.querySelector("#qtyIncrease").addEventListener("click", () => {
    itemQuantity++;
    qtyInput.textContent = itemQuantity;
  });

  document.querySelector("#addToCartBtn").addEventListener("click", () => {
    addToCart(product.id, itemQuantity, selectedColor, selectedSize);
  });

  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 8);
  renderProductGrid("relatedProductsGrid", related);
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#productOverview")) initProductPage();
});