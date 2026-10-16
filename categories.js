"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const store = window.VioletMarket;
  const categories = window.STORE_CATEGORIES || [];
  const products = window.STORE_PRODUCTS || [];
  const grid = document.querySelector("#categoryGrid");

  function renderCategories() {
    grid.innerHTML = categories.map(category => {
      const name = store.language() === "en"
        ? category.nameEn
        : category.name;

      const count = products.filter(
        product => product.category === category.id
      ).length;

      return `
        <a
          class="category-card"
          href="products.html?category=${encodeURIComponent(category.id)}"
        >
          <span class="category-icon" aria-hidden="true">
            ${store.safeText(category.icon)}
          </span>

          <strong>${store.safeText(name)}</strong>

          <span>
            ${new Intl.NumberFormat(
              store.language() === "fa" ? "fa-IR" : "en-US"
            ).format(count)}
            ${store.t("productCount")}
          </span>
        </a>
      `;
    }).join("");

    const discounted = products
      .filter(product => store.discountPercent(product) > 0)
      .sort((a, b) =>
        store.discountPercent(b) - store.discountPercent(a)
      )
      .slice(0, 4);

    store.renderProducts("#discountProducts", discounted);
  }

  renderCategories();

  document.addEventListener("vm:language-changed", renderCategories);
});
