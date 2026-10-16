"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const store = window.VioletMarket;
  const products = window.STORE_PRODUCTS || [];

  const cartItemsElement = document.querySelector("#cartItems");
  const subtotalElement = document.querySelector("#subtotal");
  const savingsElement = document.querySelector("#savings");
  const totalElement = document.querySelector("#total");
  const checkoutButton = document.querySelector("#checkoutButton");

  function renderCart() {
    const cart = store.getCart();

    const validItems = cart
      .map(item => ({
        ...item,
        product: products.find(product => product.id === item.id)
      }))
      .filter(item => item.product);

    if (!validItems.length) {
      cartItemsElement.innerHTML = `
        <div class="empty-message">
          <p>${store.t("emptyCart")}</p>
          <a class="primary-button" href="products.html">
            ${store.t("continueShopping")}
          </a>
        </div>
      `;

      subtotalElement.textContent = store.money(0);
      savingsElement.textContent = store.money(0);
      totalElement.textContent = store.money(0);
      checkoutButton.disabled = true;
      checkoutButton.style.opacity = "0.55";
      return;
    }

    checkoutButton.disabled = false;
    checkoutButton.style.opacity = "1";

    cartItemsElement.innerHTML = validItems.map(({ product, quantity }) => {
      const name = store.safeText(store.getProductName(product));
      const lineTotal = product.price * quantity;

      return `
        <article class="cart-item">
          <a href="product.html?id=${product.id}">
            <img
              class="cart-item-image"
              src="${store.safeText(product.image)}"
              alt="${name}"
              onerror="this.onerror=null;this.src='https://placehold.co/200x200/f1e9ff/7128d8?text=Product';"
            >
          </a>

          <div>
            <h3>
              <a href="product.html?id=${product.id}">${name}</a>
            </h3>

            <div class="cart-item-category">
              ${store.safeText(store.categoryName(product.category))}
            </div>

            <div class="current-price">${store.money(product.price)}</div>

            <div class="quantity-control">
              <button
                type="button"
                data-quantity-action="increase"
                data-product-id="${product.id}"
                aria-label="+"
              >+</button>

              <span>${quantity}</span>

              <button
                type="button"
                data-quantity-action="decrease"
                data-product-id="${product.id}"
                aria-label="-"
              >−</button>
            </div>
          </div>

          <div class="cart-item-side">
            <strong>${store.money(lineTotal)}</strong>

            <button
              type="button"
              class="remove-item"
              data-remove-product="${product.id}"
            >${store.t("remove")}</button>
          </div>
        </article>
      `;
    }).join("");

    const subtotal = validItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    const originalTotal = validItems.reduce(
      (sum, item) =>
        sum +
        Math.max(item.product.oldPrice || item.product.price, item.product.price) *
        item.quantity,
      0
    );

    const savings = Math.max(0, originalTotal - subtotal);

    subtotalElement.textContent = store.money(subtotal);
    savingsElement.textContent = store.money(savings);
    totalElement.textContent = store.money(subtotal);
  }

  cartItemsElement.addEventListener("click", event => {
    const quantityButton = event.target.closest("[data-quantity-action]");
    const removeButton = event.target.closest("[data-remove-product]");

    if (quantityButton) {
      const id = Number(quantityButton.dataset.productId);
      const action = quantityButton.dataset.quantityAction;
      const cart = store.getCart();
      const item = cart.find(entry => entry.id === id);

      if (!item) return;

      if (action === "increase") {
        if (item.quantity >= 99) {
          store.showToast("حداکثر تعداد مجاز ۹۹ عدد است.");
          return;
        }

        item.quantity += 1;
      } else if (action === "decrease") {
        item.quantity -= 1;
      }

      store.saveCart(cart.filter(entry => entry.quantity > 0));
      renderCart();
      return;
    }

    if (removeButton) {
      const id = Number(removeButton.dataset.removeProduct);

      store.saveCart(
        store.getCart().filter(item => item.id !== id)
      );

      store.showToast(store.t("removedItem"));
      renderCart();
    }
  });

  checkoutButton.addEventListener("click", () => {
    if (!store.getCart().length) return;

    store.showToast(store.t("checkoutDemo"));
  });

  document.addEventListener("vm:cart-updated", renderCart);
  document.addEventListener("vm:language-changed", renderCart);

  renderCart();
});
