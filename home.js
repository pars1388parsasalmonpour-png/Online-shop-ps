"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const store = window.VioletMarket;
  const products = window.STORE_PRODUCTS || [];

  function renderHome() {
    const discounted = products
      .filter(product => product.oldPrice > product.price)
      .sort((a, b) =>
        store.discountPercent(b) - store.discountPercent(a)
      )
      .slice(0, 4);

    const featured = products
      .filter(product => product.featured)
      .slice(0, 4);

    store.renderProducts("#discountProducts", discounted);
    store.renderProducts("#featuredProducts", featured);
  }

  renderHome();

  document.addEventListener("vm:language-changed", renderHome);
});
