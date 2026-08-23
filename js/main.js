let PRODUCTS = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    category: "T-Shirts",
    price: 120,
    originalPrice: null,
    discountPercentage: 0,
    rating: 4.5,
    reviewCount: 96,
    images: [
      "assets/blackTshirt.png",
      "assets/blackTshirt.png",
      "assets/blackTshirt.png",
      "assets/blackTshirt.png",
    ],
    colors: ["Black", "White", "Navy Blue"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    section: "new-arrivals",
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    category: "Jeans",
    price: 240,
    originalPrice: 260,
    discountPercentage: 20,
    rating: 3.5,
    reviewCount: 72,
    images: [
      "assets/skinnyFitJeans.png",
      "assets/skinnyFitJeans.png",
      "assets/skinnyFitJeans.png",
      "assets/skinnyFitJeans.png",
    ],
    colors: ["Blue", "Light Blue", "Black"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    description:
      "A stylish and comfortable everyday piece designed for a modern wardrobe.",
    section: "new-arrivals",
  },
  {
    id: 3,
    title: "Checkered Shirt",
    category: "Shirts",
    price: 180,
    originalPrice: null,
    discountPercentage: 0,
    rating: 4.5,
    reviewCount: 124,
    images: [
      "assets/checkedShirt.png",
      "assets/checkedShirt.png",
      "assets/checkedShirt.png",
      "assets/checkedShirt.png",
    ],
    colors: ["Red", "Navy Blue", "Green", "Black"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    description:
      "A stylish and comfortable everyday piece designed for a modern wardrobe.",
    section: "new-arrivals",
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    category: "T-Shirts",
    price: 130,
    originalPrice: 160,
    discountPercentage: 30,
    rating: 4.5,
    reviewCount: 89,
    images: [
      "assets/stripedTshirt.png",
      "assets/stripedTshirt.png",
      "assets/stripedTshirt.png",
      "assets/stripedTshirt.png",
    ],
    colors: ["Orange", "Black", "White"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    description:
      "A stylish and comfortable everyday piece designed for a modern wardrobe.",
    section: "new-arrivals",
  },
  {
    id: 5,
    title: "Vertical Striped Shirt",
    category: "Shirts",
    price: 212,
    originalPrice: 232,
    discountPercentage: 20,
    rating: 5.0,
    reviewCount: 203,
    images: [
      "assets/blackStripedTshirt.png",
      "assets/blackStripedTshirt.png",
      "assets/blackStripedTshirt.png",
      "assets/blackStripedTshirt.png",
    ],
    colors: ["Green", "Black", "White", "Navy Blue"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    description:
      "A stylish and comfortable everyday piece designed for a modern wardrobe.",
    section: "top-selling",
  },
  {
    id: 6,
    title: "Courage Graphic T-shirt",
    category: "T-Shirts",
    price: 145,
    originalPrice: null,
    discountPercentage: 0,
    rating: 4.0,
    reviewCount: 156,
    images: [
      "assets/orangeTshirt.png",
      "assets/orangeTshirt.png",
      "assets/orangeTshirt.png",
      "assets/orangeTshirt.png",
    ],
    colors: ["Orange", "Black", "White"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    description:
      "A stylish and comfortable everyday piece designed for a modern wardrobe.",
    section: "top-selling",
  },
  {
    id: 7,
    title: "Loose Fit Bermuda Shorts",
    category: "Shorts",
    price: 80,
    originalPrice: null,
    discountPercentage: 0,
    rating: 3.0,
    reviewCount: 64,
    images: [
      "assets/denimShorts.png",
      "assets/denimShorts.png",
      "assets/denimShorts.png",
      "assets/denimShorts.png",
    ],
    colors: ["Blue", "Light Blue", "Black"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    description:
      "A stylish and comfortable everyday piece designed for a modern wardrobe.",
    section: "top-selling",
  },
  {
    id: 8,
    title: "Faded Skinny Jeans",
    category: "Jeans",
    price: 210,
    originalPrice: null,
    discountPercentage: 0,
    rating: 4.5,
    reviewCount: 187,
    images: [
      "assets/fadedSkinnyJeans.png",
      "assets/fadedSkinnyJeans.png",
      "assets/fadedSkinnyJeans.png",
      "assets/fadedSkinnyJeans.png",
    ],
    colors: ["Black", "Dark Gray", "Blue"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    description:
      "A stylish and comfortable everyday piece designed for a modern wardrobe.",
    section: "top-selling",
  },
  {
    id: 9,
    title: "Polo with Contrast Trims",
    category: "Polo",
    price: 212,
    originalPrice: 242,
    discountPercentage: 20,
    rating: 4.5,
    reviewCount: 115,
    images: [
      "assets/poloTshirt.png",
      "assets/poloTshirt.png",
      "assets/poloTshirt.png",
      "assets/poloTshirt.png",
    ],
    colors: ["Blue", "White", "Black", "Gray"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    description:
      "A stylish and comfortable everyday piece designed for a modern wardrobe.",
    section: "you-might-also-like",
  },
  {
    id: 10,
    title: "Gradient Graphic T-shirt",
    category: "T-Shirts",
    price: 145,
    originalPrice: null,
    discountPercentage: 0,
    rating: 3.5,
    reviewCount: 91,
    images: [
      "assets/gradientGraphicTshirt.png",
      "assets/gradientGraphicTshirt.png",
      "assets/gradientGraphicTshirt.png",
      "assets/gradientGraphicTshirt.png",
    ],
    colors: ["White", "Pink", "Blue", "Purple"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    description:
      "A stylish and comfortable everyday piece designed for a modern wardrobe.",
    section: "you-might-also-like",
  },
  {
    id: 11,
    title: "Polo with Tipping Details",
    category: "Polo",
    price: 180,
    originalPrice: null,
    discountPercentage: 0,
    rating: 4.5,
    reviewCount: 143,
    images: [
      "assets/poloBrownTshirt.png",
      "assets/poloBrownTshirt.png",
      "assets/poloBrownTshirt.png",
      "assets/poloBrownTshirt.png",
    ],
    colors: ["Brown", "Burgundy", "Black", "Navy Blue"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    description:
      "A stylish and comfortable everyday piece designed for a modern wardrobe.",
    section: "you-might-also-like",
  },
  {
    id: 12,
    title: "Black Striped T-shirt",
    category: "T-Shirts",
    price: 120,
    originalPrice: 150,
    discountPercentage: 30,
    rating: 5.0,
    reviewCount: 231,
    images: [
      "assets/blackStripedTshirt.png",
      "assets/blackStripedTshirt.png",
      "assets/blackStripedTshirt.png",
    ],
    colors: ["Black", "White", "Gray"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    description:
      "A stylish and comfortable everyday piece designed for a modern wardrobe.",
    section: "you-might-also-like",
  },
  {
    id: 13,
    title: "One Life Graphic T-Shirt",
    category: "T-Shirts",
    price: 300,
    originalPrice: 500,
    discountPercentage: 40,
    rating: 4.5,
    reviewCount: 231,
    images: [
      "assets/cartimage1.png",
      "assets/cartimage2.png",
      "assets/cartimage3.png",
      "assets/cartimage4.png",
    ],
    colors: ["Black", "White", "Red"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    description:
      "A stylish and comfortable everyday piece designed for a modern wardrobe.",
    section: "you-might-also-like",
  },
];

const REVIEWS = [
  {
    id: 1,
    author: "Samantha D.",
    verified: true,
    rating: 4.5,
    text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: "August 14, 2023",
    productIds: [13], // One Life Graphic T-Shirt
  },
  {
    id: 2,
    author: "Alex M.",
    verified: true,
    rating: 5,
    text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    date: "August 15, 2023",
    productIds: [13],
  },
  {
    id: 3,
    author: "Ethan R.",
    verified: true,
    rating: 3.5,
    text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    date: "August 16, 2023",
    productIds: [13],
  },
  {
    id: 4,
    author: "Olivia P.",
    verified: true,
    rating: 5,
    text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    date: "August 17, 2023",
    productIds: [13],
  },
  {
    id: 5,
    author: "Liam K.",
    verified: true,
    rating: 5,
    text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    date: "August 18, 2023",
    productIds: [13],
  },
  {
    id: 6,
    author: "Ava H.",
    verified: true,
    rating: 4.5,
    text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    date: "August 19, 2023",
    productIds: [13],
  },
  {
    id: 7,
    author: "Sarah M.",
    verified: true,
    rating: 5,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    date: "July 30, 2023",
    productIds: [], // general/featured — home page only
  },
  {
    id: 8,
    author: "Alex K.",
    verified: true,
    rating: 5,
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes.",
    date: "July 28, 2023",
    productIds: [],
  },
  {
    id: 9,
    author: "James L.",
    verified: true,
    rating: 4.5,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point.",
    date: "July 25, 2023",
    productIds: [],
  },
  {
    id: 10,
    author: "Priya N.",
    verified: true,
    rating: 4,
    text: "Great quality for the price. Shipping was fast and the packaging felt premium. Will definitely be ordering again for the upcoming season.",
    date: "July 22, 2023",
    productIds: [],
  },
];

const AUTH_KEY = "shopco_auth";
const CART_KEY = "shopco_cart";
const COUPON_KEY = "shopco_coupon";
const VALID_EMAIL = "admin@example.com";
const VALID_PASSWORD = "Admin@123";
const COUPONS = { SAVE10: 0.1, SAVE20: 0.2 };
const DELIVERY_FEE = 15;

const starFull = `<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.79242 0L11.4116 5.63991L17.5849 6.38809L13.0304 10.6219L14.2265 16.7243L8.79242 13.701L3.35839 16.7243L4.55446 10.6219L-3.52859e-05 6.38809L6.17322 5.63991L8.79242 0Z" fill="#FFC633"/>
</svg>
`;
const starHalf = `<svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.35842 16.7243L8.79246 13.701V0L6.17325 5.63991L0 6.38809L4.55449 10.6219L3.35842 16.7243Z" fill="#FFC633"/>
</svg>
`;
function starIcon(type) {
  if (type === "full") {
    return starFull;
  }
  if (type === "half") {
    return starHalf;
  }
}

function renderRatingStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  let icons = "";
  for (let i = 0; i < fullStars; i++) icons += starIcon("full");
  if (hasHalf) icons += starIcon("half");

  return `
    <span class="product-card__rating-stars">${icons}</span>
    
  `;
}

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
  const badge = document.querySelector("#cartCount");
  if (!badge) return;
  const count = cartItemCount(getCart());
  badge.textContent = count;
  badge.style.display = count > 0 ? "" : "none";
}

function updateAuthUI() {
  const loginLink = document.querySelector("#loginLink");
  if (!loginLink) return;
  if (isLoggedIn()) {
    loginLink.title = "Logout";
    if (loginLink.textContent.trim() === "Login")
      loginLink.textContent = "Logout";
  } else {
    loginLink.title = "Login";
    if (loginLink.textContent.trim() === "Logout")
      loginLink.textContent = "Login";
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
    const redirect = encodeURIComponent(
      window.location.pathtitle.split("/").pop() + window.location.search,
    );
    window.location.href = "login.html?redirect=" + redirect;
  }
}



function renderProductCard(product) {
  const pricing = product.originalPrice
    ? `
      <span class="product-card__price">$${product.price}</span>
      <span class="product-card__price product-card__price--original">
        $${product.originalPrice}
      </span>
      <span class="product-card__discount">
        -${product.discountPercentage}%
      </span>
    `
    : `
      <span class="product-card__price">$${product.price}</span>
    `;

  const stars = renderRatingStars(product.rating);

  return `
    <a href="product.html?id=${product.id}" class="product-card__link">
      <article class="product-card">

        <div class="product-card__image-wrap">
          <img
            src="${product.images[0]}"
            alt="${product.title}"
          >
        </div>

        <h3 class="product-card__title">
          ${product.title}
        </h3>

        <div class="product-card__rating">
          <span class="product-card__rating-stars">
            ${stars}
          </span>

          <span class="product-card__rating-score">
            ${product.rating}/5
          </span>
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
  renderProductGrid("newArrivalsGrid", PRODUCTS.slice(0, 6));
  renderProductGrid("topSellingGrid", PRODUCTS.slice(7, 11));
  renderReviewCard("homeReveiwsGrid",REVIEWS.slice(0,9));
}

function initProductPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || 1;
  const product = getProduct(id);
  const overview = document.querySelector("#productOverview");
  renderProductGrid("relatedProducts",PRODUCTS.slice(0,9));
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

function renderCartItem(item) {
  const product = getProduct(item.id);
  if (!product) return "";
  const lineTotal = product.price * item.quantity;
  return `
    <article class="cart-item" data-id="${item.id}">
      <div class="cart-item__image-wrap">
        <img src="${product.images}" alt="${product.title}" class="cart-item__image">
      </div>
      <div class="cart-item__details">
        <div class="cart-item__top">
          <div>
            <h3 class="cart-item__title">${product.title}</h3>
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
  const listEl = document.querySelector("#cartList");

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
  const discountRate =
    couponCode && COUPONS[couponCode] ? COUPONS[couponCode] : 0;
  const discountAmount = Math.round(subtotal * discountRate);
  const delivery = cart.length > 0 ? DELIVERY_FEE : 0;
  const total = subtotal - discountAmount + delivery;

  document.querySelector("#cartSubtotal").textContent = "$" + subtotal;
  document.querySelector("#cartDiscountLabel").textContent = couponCode
    ? `Discount (-${discountRate * 100}%)`
    : "Discount";
  document.querySelector("#cartDiscount").textContent = "-$" + discountAmount;
  document.querySelector("#cartDelivery").textContent = "$" + delivery;
  document.querySelector("#cartTotal").textContent = "$" + total;

  const couponInput = document.querySelector("#couponInput");
  if (couponCode) couponInput.value = couponCode;
}

function initCartPage() {
  renderCart();

  document.querySelector("#cartList").addEventListener("click", (e) => {
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

  document.querySelector("#applyCouponBtn").addEventListener("click", () => {
    const input = document.querySelector("#couponInput");
    const code = input.value.trim().toUpperCase();
    const messageEl = document.querySelector("#couponMessage");

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

  document.querySelector("#checkoutBtn").addEventListener("click", () => {
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
      alert(
        "Some items in your cart are no longer available. Please add products again.",
      );
      return;
    }

    const totalText = document.querySelector("#cartTotal").textContent;
    document.querySelector("#successModal .modal__text").textContent =
      `Your order has been placed successfully. Total charged: ${totalText}`;
    document.querySelector("#successModal").classList.remove("hidden");
  });

  document.querySelector("#modalOkBtn").addEventListener("click", () => {
    document.querySelector("#successModal").classList.add("hidden");
    clearCart();
    updateCartCount();
    renderCart();
  });
}

function initLoginPage() {
  const form = document.querySelector("#loginForm");
  const errorEl = document.querySelector("#authError");
  

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector("#emailInput").value.trim();
    const password = document.querySelector("#passwordInput").value;

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      login();
      const params = new URLSearchParams(window.location.search);
      const redirect = params.get("redirect");
      window.location.href = redirect
        ? decodeURIComponent(redirect)
        : "index.html";
    } else {
      errorEl.textContent = "Invalid email or password. Please try again.";
    }
  });
}

if (
  document.querySelector("#productOverview") ||
  document.querySelector("#cartList")
) {
  protectPage();
}

document.addEventListener("DOMContentLoaded", async () => {
  updateCartCount();
  updateAuthUI();
  openSidebar();

  if (document.querySelector("#loginForm")) initLoginPage();
  if (document.querySelector("#newArrivalsGrid")) initHomePage();
  if (document.querySelector("#productOverview")) initProductPage();
  if (document.querySelector("#cartList")) initCartPage();
});

function openSidebar() {
  let navContainer = document.querySelector(".nav-container");
  document.querySelector(".hamburger-btn").addEventListener("click", () => {
    navContainer.style.display = "flex";
  });
  document.querySelector(".header__nav-close").addEventListener("click", () => {
    navContainer.style.display = "none";
  });
}

function renderReviewCard(review, variant = "compact") {
  const starsMarkup = renderRatingStars(review.rating);
  const verifiedBadge = review.verified
    ? `<span class="review-card__verified">✔</span>`
    : "";

  if (variant === "full") {
    
    return `
      <article class="review-card">
        <div class="review-card__header">
          <div class="review-card__stars">${starsMarkup}</div>
          <button class="review-card__menu" aria-label="Review options">...</button>
        </div>
        <h4 class="review-card__author">${review.author} ${verifiedBadge}</h4>
        <p class="review-card__text">"${review.text}"</p>
        <span class="review-card__date">Posted on ${review.date}</span>
      </article>
    `;
  }

  return `
    <article class="review-card">
      <div class="review-card__stars">${starsMarkup}</div>
      <h4 class="review-card__author">${review.author} ${verifiedBadge}</h4>
      <p class="review-card__text">"${review.text}"</p>
    </article>
  `;
}

function renderReviewsGrid(containerId, reviews, variant = "compact") {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = reviews.map((r) => renderReviewCard(r, variant)).join("");
}
