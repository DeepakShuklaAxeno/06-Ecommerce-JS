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
    productIds: [13],
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
    productIds: [],
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

const deleteSvg = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.875 3.75H13.75V3.125C13.75 2.62772 13.5525 2.15081 13.2008 1.79917C12.8492 1.44754 12.3723 1.25 11.875 1.25H8.125C7.62772 1.25 7.15081 1.44754 6.79917 1.79917C6.44754 2.15081 6.25 2.62772 6.25 3.125V3.75H3.125C2.95924 3.75 2.80027 3.81585 2.68306 3.93306C2.56585 4.05027 2.5 4.20924 2.5 4.375C2.5 4.54076 2.56585 4.69973 2.68306 4.81694C2.80027 4.93415 2.95924 5 3.125 5H3.75V16.25C3.75 16.5815 3.8817 16.8995 4.11612 17.1339C4.35054 17.3683 4.66848 17.5 5 17.5H15C15.3315 17.5 15.6495 17.3683 15.8839 17.1339C16.1183 16.8995 16.25 16.5815 16.25 16.25V5H16.875C17.0408 5 17.1997 4.93415 17.3169 4.81694C17.4342 4.69973 17.5 4.54076 17.5 4.375C17.5 4.20924 17.4342 4.05027 17.3169 3.93306C17.1997 3.81585 17.0408 3.75 16.875 3.75ZM8.75 13.125C8.75 13.2908 8.68415 13.4497 8.56694 13.5669C8.44973 13.6842 8.29076 13.75 8.125 13.75C7.95924 13.75 7.80027 13.6842 7.68306 13.5669C7.56585 13.4497 7.5 13.2908 7.5 13.125V8.125C7.5 7.95924 7.56585 7.80027 7.68306 7.68306C7.80027 7.56585 7.95924 7.5 8.125 7.5C8.29076 7.5 8.44973 7.56585 8.56694 7.68306C8.68415 7.80027 8.75 7.95924 8.75 8.125V13.125ZM12.5 13.125C12.5 13.2908 12.4342 13.4497 12.3169 13.5669C12.1997 13.6842 12.0408 13.75 11.875 13.75C11.7092 13.75 11.5503 13.6842 11.4331 13.5669C11.3158 13.4497 11.25 13.2908 11.25 13.125V8.125C11.25 7.95924 11.3158 7.80027 11.4331 7.68306C11.5503 7.56585 11.7092 7.5 11.875 7.5C12.0408 7.5 12.1997 7.56585 12.3169 7.68306C12.4342 7.80027 12.5 7.95924 12.5 8.125V13.125ZM12.5 3.75H7.5V3.125C7.5 2.95924 7.56585 2.80027 7.68306 2.68306C7.80027 2.56585 7.95924 2.5 8.125 2.5H11.875C12.0408 2.5 12.1997 2.56585 12.3169 2.68306C12.4342 2.80027 12.5 2.95924 12.5 3.125V3.75Z" fill="#FF3333"/>
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
      window.location.pathname.split("/").pop() + window.location.search,
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
  container.innerHTML = reviews
    .map((r) => renderReviewCard(r, variant))
    .join("");
}

function openSidebar() {
  let navContainer = document.querySelector(".header__nav-container");
  let sidebarOvarlay = document.querySelector(".sidebar-overlay");
  document.querySelector(".hamburger-btn").addEventListener("click", () => {
    navContainer.style.display = "flex";
    sidebarOvarlay.style.display = "flex";
    document.body.overflow = "hidden";
  });
  document.querySelector(".header__nav-close").addEventListener("click", () => {
    navContainer.style.display = "none";
    sidebarOvarlay.style.display = "none";
    document.body.overflow = "";
  });
  sidebarOvarlay.addEventListener("click", () => {
    navContainer.style.display = "none";
    sidebarOvarlay.style.display = "none";
    document.body.overflow = "";
  });
}

function initHomePage() {
  renderProductGrid("newArrivalsGrid", PRODUCTS.slice(0, 6));
  renderProductGrid("topSellingGrid", PRODUCTS.slice(7, 11));
  renderReviewsGrid("homeReveiwsGrid", REVIEWS.slice(0, 9));
}

if (
  document.querySelector("#productOverview") ||
  document.querySelector("#cartList")
) {
  protectPage();
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  updateAuthUI();
  openSidebar();

  if (document.querySelector("#newArrivalsGrid")) initHomePage();
});