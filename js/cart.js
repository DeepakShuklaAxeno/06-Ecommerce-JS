function renderCartItem(item) {
  const product = getProduct(item.id);
  if (!product) return "";
  const lineTotal = product.price * item.quantity;
  return `
    <article class="cart-item" data-id="${item.id}">
      <div class="cart-item__image-wrap">
        <img src="${product.images[0]}" alt="${product.title}" class="cart-item__image">
      </div>
      <div class="cart-item__details">
        <div class="cart-item__top">
          <div>
            <h3 class="cart-item__title">${product.title}</h3>
            <p class="cart-item__attribute">Size: <span class="cart-item__attribute-val">${item.size}</span></p>
            <p class="cart-item__attribute">Color: <span class="cart-item__attribute-val">${item.color}</span></p>
          </div>
          <button class="cart-item__delete" data-action="remove" aria-label="Remove item">${deleteSvg}</button>
        </div>
        <div class="cart-item__bottom">
          <span class="cart-item__price">$${lineTotal}</span>
          <div class="quantity-selector">
            <button class="quantity-selector__btn" data-action="decrease">
              <svg width="13" height="2" viewBox="0 0 13 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 0.75C12.5 0.948912 12.421 1.13968 12.2803 1.28033C12.1397 1.42098 11.9489 1.5 11.75 1.5H0.75C0.551088 1.5 0.360322 1.42098 0.21967 1.28033C0.0790177 1.13968 0 0.948912 0 0.75C0 0.551088 0.0790177 0.360322 0.21967 0.21967C0.360322 0.0790175 0.551088 0 0.75 0H11.75C11.9489 0 12.1397 0.0790175 12.2803 0.21967C12.421 0.360322 12.5 0.551088 12.5 0.75Z" fill="black"/>
              </svg>
            </button>
            <span class="quantity-selector__input" id="cartItemQuantity">${item.quantity}</span>
            <button class="quantity-selector__btn" data-action="increase">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 6.25C12.5 6.44891 12.421 6.63968 12.2803 6.78033C12.1397 6.92098 11.9489 7 11.75 7H7V11.75C7 11.9489 6.92098 12.1397 6.78033 12.2803C6.63968 12.421 6.44891 12.5 6.25 12.5C6.05109 12.5 5.86032 12.421 5.71967 12.2803C5.57902 12.1397 5.5 11.9489 5.5 11.75V7H0.75C0.551088 7 0.360322 6.92098 0.21967 6.78033C0.0790177 6.63968 0 6.44891 0 6.25C0 6.05109 0.0790177 5.86032 0.21967 5.71967C0.360322 5.57902 0.551088 5.5 0.75 5.5H5.5V0.75C5.5 0.551088 5.57902 0.360322 5.71967 0.21967C5.86032 0.0790177 6.05109 0 6.25 0C6.44891 0 6.63968 0.0790177 6.78033 0.21967C6.92098 0.360322 7 0.551088 7 0.75V5.5H11.75C11.9489 5.5 12.1397 5.57902 12.2803 5.71967C12.421 5.86032 12.5 6.05109 12.5 6.25Z" fill="black"/>
              </svg>
            </button>
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

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#cartList")) initCartPage();
});