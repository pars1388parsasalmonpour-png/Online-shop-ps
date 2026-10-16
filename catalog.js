"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const store = window.VioletMarket;
  const products = window.STORE_PRODUCTS || [];
  const params = new URLSearchParams(window.location.search);

  const form = document.querySelector("#filterForm");
  const categoryFilter = document.querySelector("#categoryFilter");
  const minPrice = document.querySelector("#minPrice");
  const maxPrice = document.querySelector("#maxPrice");
  const saleFilter = document.querySelector("#saleFilter");
  const sortSelect = document.querySelector("#sortSelect");
  const resultCount = document.querySelector("#resultCount");
  const catalogTitle = document.querySelector("#catalogTitle");
  const catalogDescription = document.querySelector("#catalogDescription");

  const state = {
    query: params.get("q") || "",
    category: params.get("category") || "",
    sale: params.get("sale") === "true",
    min: "",
    max: "",
    sort: "recommended"
  };

  categoryFilter.value = state.category;
  saleFilter.checked = state.sale;

  if (state.query) {
    catalogTitle.textContent = store.t("searchResults");
  } else if (state.sale) {
    catalogTitle.textContent = store.t("discountedProducts");
  } else {
    catalogTitle.textContent = store.t("allProducts");
  }

  const searchInput = document.querySelector("#searchInput");

  if (searchInput) {
    searchInput.value = state.query;
  }

  function normalize(value) {
    return String(value || "")
      .trim()
      .toLocaleLowerCase()
      .replace(/ي/g, "ی")
      .replace(/ك/g, "ک");
  }

  function getFilteredProducts() {
    let result = products.filter(product => {
      const query = normalize(state.query);
      const name = normalize(product.name);
      const nameEn = normalize(product.nameEn);
      const categoryName = normalize(store.categoryName(product.category));

      const matchesQuery = !query ||
        name.includes(query) ||
        nameEn.includes(query) ||
        categoryName.includes(query);

      const matchesCategory =
        !state.category || product.category === state.category;

      const matchesSale =
        !state.sale || store.discountPercent(product) > 0;

      const matchesMin =
        state.min === "" || product.price >= Number(state.min);

      const matchesMax =
        state.max === "" || product.price <= Number(state.max);

      return (
        matchesQuery &&
        matchesCategory &&
        matchesSale &&
        matchesMin &&
        matchesMax
      );
    });

    switch (state.sort) {
      case "cheapest":
        result.sort((a, b) => a.price - b.price);
        break;

      case "expensive":
        result.sort((a, b) => b.price - a.price);
        break;

      case "discount":
        result.sort((a, b) =>
          store.discountPercent(b) - store.discountPercent(a)
        );
        break;

      default:
        result.sort((a, b) =>
          Number(b.featured) - Number(a.featured)
        );
    }

    return result;
  }

  function renderCatalog() {
    const filtered = getFilteredProducts();

    resultCount.textContent = new Intl.NumberFormat(
      store.language() === "fa" ? "fa-IR" : "en-US"
    ).format(filtered.length);

    store.renderProducts("#catalogProducts", filtered);
  }

  form.addEventListener("submit", event => {
    event.preventDefault();

    const min = minPrice.value.trim();
    const max = maxPrice.value.trim();

    if (min !== "" && Number(min) < 0) {
      store.showToast("قیمت حداقل نمی‌تواند منفی باشد.");
      return;
    }

    if (max !== "" && Number(max) < 0) {
      store.showToast("قیمت حداکثر نمی‌تواند منفی باشد.");
      return;
    }

    if (min !== "" && max !== "" && Number(min) > Number(max)) {
      store.showToast("حداقل قیمت نمی‌تواند از حداکثر قیمت بیشتر باشد.");
      return;
    }

    state.category = categoryFilter.value;
    state.min = min;
    state.max = max;
    state.sale = saleFilter.checked;

    renderCatalog();
  });

  document.querySelector("#resetFilters").addEventListener("click", () => {
    form.reset();

    state.category = "";
    state.min = "";
    state.max = "";
    state.sale = false;

    categoryFilter.value = "";
    renderCatalog();
  });

  sortSelect.addEventListener("change", () => {
    state.sort = sortSelect.value;
    renderCatalog();
  });

  document.addEventListener("vm:language-changed", () => {
    catalogTitle.textContent = state.query
      ? store.t("searchResults")
      : state.sale
        ? store.t("discountedProducts")
        : store.t("allProducts");

    catalogDescription.textContent = store.t("discover");
    renderCatalog();
  });

  renderCatalog();
});
