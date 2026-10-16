"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const store = window.VioletMarket;
  const products = window.STORE_PRODUCTS || [];
  const params = new URLSearchParams(window.location.search);
  const productId = Number(params.get("id"));

  const product = products.find(item => item.id === productId);
  const detail = document.querySelector("#productDetail");

  if (!product) {
    detail.innerHTML = `
      <div class="empty-message">
        <h2>${store.t("invalidProduct")}</h2>
        <a class="primary-button" href="products.html">
          ${store.t("backToProducts")}
        </a>
      </div>
    `;

    document.title = `${store.t("invalidProduct")} | Violet Market`;
    return;
  }

  function renderDetail() {
    const name = store.safeText(store.getProductName(product));
    const description = store.safeText(
      store.getProductDescription(product)
    );
    const percent = store.discountPercent(product);

    document.title = `${store.getProductName(product)} | Violet Market`;

    detail.innerHTML = `
      <div class="product-detail-layout">
        <div class="detail-image-panel">
          <img
            class="detail-image"
            src="${store.safeText(product.image)}"
            alt="${name}"
            onerror="this.onerror=null;this.src='https://placehold.co/700x600/f1e9ff/7128d8?text=Violet+Market';"
          >
        </div>

        <div class="detail-info-panel">
          <span class="product-category">
            ${store.safeText(store.categoryName(product.category))}
          </span>

          <h1>${name}</h1>

          <p>
            ⭐ ${product.rating}
            <span class="product-category">| ${store.t("rating")}</span>
          </p>

          <h3>${store.t("productDescription")}</h3>

          <p class="detail-description">${description}</p>

          <div class="detail-price">
            ${percent > 0
              ? `<div class="old-price">${store.t("originalPrice")}: ${store.money(product.oldPrice)}</div>`
              : ""}
            <div class="current-price">${store.money(product.price)}</div>
            ${percent > 0
              ? `<p class="discount-badge" style="position:static;display:inline-block;margin-top:10px">${store.t("discount")}: ${percent}%</p>`
              : ""}
          </div>

          <p class="detail-stock">● ${store.t("available")}</p>

          <div class="detail-actions">
            <button
              type="button"
              class="add-to-cart"
              data-add-cart="${product.id}"
            >${store.t("addToCart")}</button>
          </div>
        </div>
      </div>
    `;

    const related = products
      .filter(item =>
        item.id !== product.id &&
        item.category === product.category
      )
      .slice(0, 4);

    store.renderProducts("#relatedProducts", related);
  }

  renderDetail();

  document.addEventListener("vm:language-changed", renderDetail);
});
