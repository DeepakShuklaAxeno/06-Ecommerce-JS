let PRODUCTS = [];

function mapDummyProduct(item) {
  const discountPercentage = item.discountPercentage || 0;
  const hasDiscount = discountPercentage > 0;
  const price = Math.round(item.price);
  const originalPrice = hasDiscount ? Math.round(price / (1 - discountPercentage / 100)) : null;
  const fullStars = Math.round(item.rating);

  return {
    id: item.id,
    name: item.title,
    price,
    originalPrice,
    discount: hasDiscount ? `-${Math.round(discountPercentage)}%` : null,
    rating: "★".repeat(fullStars) + "☆".repeat(5 - fullStars),
    score: `${item.rating}/5`,
    image: item.thumbnail,
    images: item.images && item.images.length ? item.images : [item.thumbnail],
    description: item.description,
    colors: ["Black", "White", "Grey"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
  };
}

const CLOTHING_CATEGORIES = ["mens-shirts", "womens-dresses", "tops"];

async function loadProducts() {
  try {
    const responses = await Promise.all(
        CLOTHING_CATEGORIES.map((category) =>
            fetch(`https://dummyjson.com/products/category/${category}`).then((res) => res.json())
        )
    );
    const items = responses.flatMap((data) => data.products);
    PRODUCTS = items.map(mapDummyProduct);
  } catch (err) {
    PRODUCTS = [];
  }
}

const AUTH_KEY = "shopco_auth";
const CART_KEY = "shopco_cart";
const COUPON_KEY = "shopco_coupon";
const VALID_EMAIL = "admin@example.com";
const VALID_PASSWORD = "Admin@123";
const COUPONS = { SAVE10: 0.1, SAVE20: 0.2 };
const DELIVERY_FEE = 15;

function isLoggedIn() {
  return localStorage.getItem(AUTH_KEY) === "true";
}

function login() {
  localStorage.setItem(AUTH_KEY, "true");
}

function logout() {
  localStorage.removeItem(AUTH_KEY);
}

function getCart() {
  const raw = localStorage.getItem(CART_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  localStorage.removeItem(COUPON_KEY);
}

function getAppliedCoupon() {
  return localStorage.getItem(COUPON_KEY);
}

function setAppliedCoupon(code) {
  if (code) localStorage.setItem(COUPON_KEY, code);
  else localStorage.removeItem(COUPON_KEY);
}

function getProduct(id) {
  return PRODUCTS.find((p) => p.id === Number(id));
}

function cartItemCount(cart) {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function addToCart(productId, quantity, color, size) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
    existing.color = color;
    existing.size = size;
  } else {
    cart.push({ id: productId, quantity, color, size });
  }
  saveCart(cart);
  updateCartCount();
}

function updateCartCount() {
  const badge = document.getElementById("cartCount");
  if (!badge) return;
  const count = cartItemCount(getCart());
  badge.textContent = count;
  badge.style.display = count > 0 ? "" : "none";
}

function updateAuthUI() {
  const loginLink = document.getElementById("loginLink");
  if (!loginLink) return;
  if (isLoggedIn()) {
    loginLink.title = "Logout";
    if (loginLink.textContent.trim() === "Login") loginLink.textContent = "Logout";
  } else {
    loginLink.title = "Login";
    if (loginLink.textContent.trim() === "Logout") loginLink.textContent = "Login";
  }
  loginLink.addEventListener("click", (e) => {
    if (isLoggedIn()) {
      e.preventDefault();
      logout();
      window.location.href = "index.html";
    }
  });
}

function protectPage() {
  if (!isLoggedIn()) {
    const redirect = encodeURIComponent(window.location.pathname.split("/").pop() + window.location.search);
    window.location.href = "login.html?redirect=" + redirect;
  }
}

function renderStars(rating, score) {
  return `<span class="product-card__rating-stars">${rating}</span><span class="product-card__rating-score">${score}</span>`;
}

function renderProductCard(product) {
  const pricing = product.originalPrice
      ? `<span class="product-card__price">$${product.price}</span>
       <span class="product-card__price product-card__price--original">$${product.originalPrice}</span>
       <span class="product-card__discount">${product.discount}</span>`
      : `<span class="product-card__price">$${product.price}</span>`;

  return `
    <a href="product.html?id=${product.id}" class="product-card__link">
      <article class="product-card">
        <div class="product-card__image-wrap">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <h3 class="product-card__title">${product.name}</h3>
        <div class="product-card__rating">
          ${renderStars(product.rating, product.score)}
        </div>
        <div class="product-card__pricing">
          ${pricing}
        </div>
      </article>
    </a>
  `;
}

function renderProductGrid(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = products.map(renderProductCard).join("");
}

function initHomePage() {
  renderProductGrid("newArrivalsGrid", PRODUCTS.slice(0, 4));
  renderProductGrid("topSellingGrid", PRODUCTS.slice(4, 8));
}

function initProductPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || 1;
  const product = getProduct(id);
  const overview = document.getElementById("productOverview");

  if (!product) {
    overview.innerHTML = `<p class="product-not-found">Sorry, we couldn't find that product.</p>`;
    return;
  }

  document.getElementById("breadcrumbCurrent").textContent = product.name;
  document.getElementById("productImage").src = product.images[0];
  document.getElementById("productImage").alt = product.name;

  const thumbsContainer = document.querySelector(".product-gallery__thumbnails");
  thumbsContainer.innerHTML = product.images
      .slice(0, 3)
      .map(
          (img, i) => `
      <button class="product-gallery__thumb-btn${i === 0 ? " product-gallery__thumb-btn--active" : ""}" data-image="${img}">
        <img src="${img}" alt="Thumbnail ${i + 1}" class="product-gallery__thumb-img">
      </button>
    `
      )
      .join("");

  thumbsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".product-gallery__thumb-btn");
    if (!btn) return;
    thumbsContainer.querySelectorAll(".product-gallery__thumb-btn").forEach((el) => el.classList.remove("product-gallery__thumb-btn--active"));
    btn.classList.add("product-gallery__thumb-btn--active");
    document.getElementById("productImage").src = btn.dataset.image;
  });

  document.getElementById("productTitle").textContent = product.name;
  document.getElementById("productStars").textContent = product.rating;
  document.getElementById("productScore").textContent = product.score;
  document.getElementById("productPrice").textContent = "$" + product.price;

  const originalPriceEl = document.getElementById("productPriceOriginal");
  const discountBadgeEl = document.getElementById("productDiscountBadge");
  if (product.originalPrice) {
    originalPriceEl.textContent = "$" + product.originalPrice;
    discountBadgeEl.textContent = product.discount;
    originalPriceEl.style.display = "";
    discountBadgeEl.style.display = "";
  } else {
    originalPriceEl.style.display = "none";
    discountBadgeEl.style.display = "none";
  }

  document.getElementById("productDescription").textContent = product.description;

  const colorsContainer = document.getElementById("productColors");
  colorsContainer.innerHTML = product.colors
      .map(
          (color, i) => `
      <button class="color-swatch${i === 0 ? " color-swatch--active" : ""}" data-color="${color}" aria-label="${color}"></button>
    `
      )
      .join("");

  const sizesContainer = document.getElementById("productSizes");
  sizesContainer.innerHTML = product.sizes
      .map(
          (size, i) => `
      <button class="size-pill${i === 0 ? " size-pill--active" : ""}" data-size="${size}">${size}</button>
    `
      )
      .join("");

  let selectedColor = product.colors[0];
  let selectedSize = product.sizes[0];

  colorsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".color-swatch");
    if (!btn) return;
    colorsContainer.querySelectorAll(".color-swatch").forEach((el) => el.classList.remove("color-swatch--active"));
    btn.classList.add("color-swatch--active");
    selectedColor = btn.dataset.color;
  });

  sizesContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".size-pill");
    if (!btn) return;
    sizesContainer.querySelectorAll(".size-pill").forEach((el) => el.classList.remove("size-pill--active"));
    btn.classList.add("size-pill--active");
    selectedSize = btn.dataset.size;
  });

  const qtyInput = document.getElementById("qtyInput");
  document.getElementById("qtyDecrease").addEventListener("click", () => {
    const value = Math.max(1, Number(qtyInput.value) - 1);
    qtyInput.value = value;
  });
  document.getElementById("qtyIncrease").addEventListener("click", () => {
    qtyInput.value = Number(qtyInput.value) + 1;
  });

  document.getElementById("addToCartBtn").addEventListener("click", () => {
    addToCart(product.id, Number(qtyInput.value), selectedColor, selectedSize);
  });

  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);
  renderProductGrid("relatedProductsGrid", related);
}

function renderCartItem(item) {
  const product = getProduct(item.id);
  if (!product) return "";
  const lineTotal = product.price * item.quantity;
  return `
    <article class="cart-item" data-id="${item.id}">
      <div class="cart-item__image-wrap">
        <img src="${product.image}" alt="${product.name}" class="cart-item__image">
      </div>
      <div class="cart-item__details">
        <div class="cart-item__top">
          <div>
            <h3 class="cart-item__title">${product.name}</h3>
            <p class="cart-item__attribute">Size: <span class="cart-item__attribute-val">${item.size}</span></p>
            <p class="cart-item__attribute">Color: <span class="cart-item__attribute-val">${item.color}</span></p>
          </div>
          <button class="cart-item__delete" data-action="remove" aria-label="Remove item">✕</button>
        </div>
        <div class="cart-item__bottom">
          <span class="cart-item__price">$${lineTotal}</span>
          <div class="quantity-selector">
            <button class="quantity-selector__btn" data-action="decrease">-</button>
            <input class="quantity-selector__input" type="number" value="${item.quantity}" readonly>
            <button class="quantity-selector__btn" data-action="increase">+</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderCart() {
  const cart = getCart();
  const listEl = document.getElementById("cartList");

  if (cart.length === 0) {
    listEl.innerHTML = `
      <div class="cart-list__empty">
        <p>Your cart is empty.</p>
        <a href="index.html" class="btn btn--primary">Continue Shopping</a>
      </div>
    `;
  } else {
    listEl.innerHTML = cart.map(renderCartItem).join("");
  }

  renderCartSummary(cart);
}

function renderCartSummary(cart) {
  const subtotal = cart.reduce((sum, item) => {
    const product = getProduct(item.id);
    return product ? sum + product.price * item.quantity : sum;
  }, 0);

  const couponCode = getAppliedCoupon();
  const discountRate = couponCode && COUPONS[couponCode] ? COUPONS[couponCode] : 0;
  const discountAmount = Math.round(subtotal * discountRate);
  const delivery = cart.length > 0 ? DELIVERY_FEE : 0;
  const total = subtotal - discountAmount + delivery;

  document.getElementById("cartSubtotal").textContent = "$" + subtotal;
  document.getElementById("cartDiscountLabel").textContent = couponCode
      ? `Discount (-${discountRate * 100}%)`
      : "Discount";
  document.getElementById("cartDiscount").textContent = "-$" + discountAmount;
  document.getElementById("cartDelivery").textContent = "$" + delivery;
  document.getElementById("cartTotal").textContent = "$" + total;

  const couponInput = document.getElementById("couponInput");
  if (couponCode) couponInput.value = couponCode;
}

function initCartPage() {
  renderCart();

  document.getElementById("cartList").addEventListener("click", (e) => {
    const article = e.target.closest(".cart-item");
    if (!article) return;
    const id = Number(article.dataset.id);
    const action = e.target.closest("[data-action]")?.dataset.action;
    if (!action) return;

    const cart = getCart();
    const item = cart.find((c) => c.id === id);
    if (!item) return;

    if (action === "increase") {
      item.quantity += 1;
    } else if (action === "decrease") {
      item.quantity = Math.max(1, item.quantity - 1);
    } else if (action === "remove") {
      const index = cart.indexOf(item);
      cart.splice(index, 1);
    }

    saveCart(cart);
    updateCartCount();
    renderCart();
  });

  document.getElementById("applyCouponBtn").addEventListener("click", () => {
    const input = document.getElementById("couponInput");
    const code = input.value.trim().toUpperCase();
    const messageEl = document.getElementById("couponMessage");

    if (!code) {
      messageEl.textContent = "Please enter a coupon code.";
      messageEl.style.color = "#FF3333";
      return;
    }

    if (COUPONS[code]) {
      setAppliedCoupon(code);
      messageEl.textContent = `Coupon ${code} applied!`;
      messageEl.style.color = "#2ECC71";
      renderCart();
    } else {
      messageEl.textContent = "Invalid coupon code.";
      messageEl.style.color = "#FF3333";
    }
  });

  document.getElementById("checkoutBtn").addEventListener("click", () => {
    const cart = getCart();

    if (cart.length === 0) {
      alert("Your cart is empty. Add some products before checking out.");
      return;
    }

    const validCart = cart.filter((item) => getProduct(item.id));
    if (validCart.length !== cart.length) {
      saveCart(validCart);
      updateCartCount();
      renderCart();
    }
    if (validCart.length === 0) {
      alert("Some items in your cart are no longer available. Please add products again.");
      return;
    }

    const totalText = document.getElementById("cartTotal").textContent;
    document.querySelector("#successModal .modal__text").textContent =
        `Your order has been placed successfully. Total charged: ${totalText}`;
    document.getElementById("successModal").classList.remove("hidden");
  });

  document.getElementById("modalOkBtn").addEventListener("click", () => {
    document.getElementById("successModal").classList.add("hidden");
    clearCart();
    updateCartCount();
    renderCart();
  });
}

function initLoginPage() {
  const form = document.getElementById("loginForm");
  const errorEl = document.getElementById("authError");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("emailInput").value.trim();
    const password = document.getElementById("passwordInput").value;

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      login();
      const params = new URLSearchParams(window.location.search);
      const redirect = params.get("redirect");
      window.location.href = redirect ? decodeURIComponent(redirect) : "index.html";
    } else {
      errorEl.textContent = "Invalid email or password. Please try again.";
    }
  });
}

if (document.getElementById("productOverview") || document.getElementById("cartList")) {
  protectPage();
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadProducts();

  updateCartCount();
  updateAuthUI();

  if (document.getElementById("loginForm")) initLoginPage();
  if (document.getElementById("newArrivalsGrid")) initHomePage();
  if (document.getElementById("productOverview")) initProductPage();
  if (document.getElementById("cartList")) initCartPage();
});