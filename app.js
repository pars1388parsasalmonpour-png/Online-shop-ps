"use strict";

(() => {
  const translations = {
    fa: {
      announcement: "تخفیف‌های ویژه؛ خرید هوشمندانه با Violet Market",
      searchPlaceholder: "جست‌وجوی محصولات...",
      cart: "سبد خرید",
      home: "صفحه اصلی",
      products: "همه محصولات",
      categories: "دسته‌بندی‌ها",
      discounts: "تخفیف‌ها",
      heroEyebrow: "تجربه‌ای متفاوت از خرید آنلاین",
      heroTitle: "خرید هوشمندانه، انتخاب‌های بی‌نهایت!",
      heroDescription: "محصولات مورد علاقه‌ات را پیدا کن و از پیشنهادهای ویژه لذت ببر.",
      shopNow: "شروع خرید",
      heroBadge: "تخفیف ویژه",
      benefitOneTitle: "ارسال سریع",
      benefitOneText: "تجربه خرید آسان",
      benefitTwoTitle: "خرید مطمئن",
      benefitTwoText: "اطلاعات شفاف محصولات",
      benefitThreeTitle: "قیمت‌های ویژه",
      benefitThreeText: "پیشنهادهای جذاب خرید",
      benefitFourTitle: "پشتیبانی",
      benefitFourText: "همراه شما در خرید",
      specialOffer: "پیشنهادهای جذاب",
      discountedProducts: "محصولات تخفیف‌دار",
      viewAll: "مشاهده همه",
      discover: "کشف دنیای محصولات",
      categoryBannerTitle: "برای هر سلیقه، یک انتخاب",
      categoryBannerText: "دسته‌بندی‌های متنوع را بررسی کن و محصول دلخواهت را پیدا کن.",
      exploreCategories: "بررسی دسته‌بندی‌ها",
      selectedForYou: "انتخاب‌شده برای شما",
      popularProducts: "محصولات پیشنهادی",
      footerDescription: "تجربه‌ای ساده، زیبا و هوشمندانه از خرید آنلاین.",
      quickAccess: "دسترسی سریع",
      customerService: "خدمات مشتریان",
      copyright: "تمام حقوق محفوظ است.",
      addToCart: "افزودن به سبد خرید",
      addedToCart: "محصول به سبد خرید اضافه شد.",
      searchResults: "نتایج جست‌وجو",
      allProducts: "همه محصولات",
      filterProducts: "فیلتر محصولات",
      category: "دسته‌بندی",
      allCategories: "همه دسته‌بندی‌ها",
      minimumPrice: "حداقل قیمت (تومان)",
      maximumPrice: "حداکثر قیمت (تومان)",
      onlyDiscounted: "فقط محصولات تخفیف‌دار",
      applyFilters: "اعمال فیلتر",
      resetFilters: "پاک کردن فیلتر",
      sortBy: "مرتب‌سازی",
      sortRecommended: "پیشنهادی",
      sortCheapest: "ارزان‌ترین",
      sortExpensive: "گران‌ترین",
      sortDiscount: "بیشترین تخفیف",
      productCount: "تعداد محصولات",
      noProducts: "محصولی با این مشخصات پیدا نشد.",
      productDetails: "جزئیات محصول",
      productDescription: "توضیحات محصول",
      price: "قیمت",
      originalPrice: "قیمت قبلی",
      discount: "تخفیف",
      available: "موجود در فروشگاه",
      backToProducts: "بازگشت به محصولات",
      relatedProducts: "محصولات مرتبط",
      orderSummary: "خلاصه سفارش",
      subtotal: "مجموع قیمت محصولات",
      savings: "میزان صرفه‌جویی",
      total: "مبلغ قابل پرداخت",
      checkout: "ادامه فرایند خرید",
      checkoutNotice: "این نسخه نمایشی است و پرداخت واقعی انجام نمی‌دهد.",
      remove: "حذف",
      emptyCart: "سبد خرید شما خالی است.",
      continueShopping: "ادامه خرید",
      quantity: "تعداد",
      itemAdded: "این محصول به سبد خرید اضافه شد.",
      removedItem: "محصول از سبد خرید حذف شد.",
      checkoutDemo: "در این نسخه، درگاه پرداخت فعال نیست.",
      invalidProduct: "محصول موردنظر پیدا نشد.",
      categoryElectronics: "کالای دیجیتال",
      categoryFashion: "مد و پوشاک",
      categoryHome: "خانه و آشپزخانه",
      categoryBeauty: "زیبایی و سلامت",
      explore: "مشاهده محصولات",
      productsInCategory: "محصولات این دسته",
      rating: "امتیاز",
      searchEmpty: "عبارت جست‌وجو را وارد کنید.",
      currency: "تومان",
      unit: "عدد",
      themeLight: "روشن",
      themeDark: "تاریک"
    },

    en: {
      announcement: "Special offers: shop smarter with Violet Market",
      searchPlaceholder: "Search products...",
      cart: "Cart",
      home: "Home",
      products: "All products",
      categories: "Categories",
      discounts: "Deals",
      heroEyebrow: "A different online shopping experience",
      heroTitle: "Shop smarter, discover more!",
      heroDescription: "Find your favorite products and enjoy special offers.",
      shopNow: "Start shopping",
      heroBadge: "Special offer",
      benefitOneTitle: "Fast delivery",
      benefitOneText: "An easy shopping experience",
      benefitTwoTitle: "Trusted shopping",
      benefitTwoText: "Clear product information",
      benefitThreeTitle: "Special prices",
      benefitThreeText: "Attractive shopping deals",
      benefitFourTitle: "Support",
      benefitFourText: "Here to help you shop",
      specialOffer: "Special offers",
      discountedProducts: "Discounted products",
      viewAll: "View all",
      discover: "Discover our products",
      categoryBannerTitle: "Something for every taste",
      categoryBannerText: "Explore our categories and find the right product for you.",
      exploreCategories: "Explore categories",
      selectedForYou: "Selected for you",
      popularProducts: "Featured products",
      footerDescription: "A simple, beautiful and smart online shopping experience.",
      quickAccess: "Quick links",
      customerService: "Customer service",
      copyright: "All rights reserved.",
      addToCart: "Add to cart",
      addedToCart: "Product added to your cart.",
      searchResults: "Search results",
      allProducts: "All products",
      filterProducts: "Filter products",
      category: "Category",
      allCategories: "All categories",
      minimumPrice: "Minimum price",
      maximumPrice: "Maximum price",
      onlyDiscounted: "Discounted products only",
      applyFilters: "Apply filters",
      resetFilters: "Reset filters",
      sortBy: "Sort by",
      sortRecommended: "Recommended",
      sortCheapest: "Lowest price",
      sortExpensive: "Highest price",
      sortDiscount: "Biggest discount",
      productCount: "Products",
      noProducts: "No products match your filters.",
      productDetails: "Product details",
      productDescription: "Product description",
      price: "Price",
      originalPrice: "Original price",
      discount: "Discount",
      available: "In stock",
      backToProducts: "Back to products",
      relatedProducts: "Related products",
      orderSummary: "Order summary",
      subtotal: "Subtotal",
      savings: "You save",
      total: "Total",
      checkout: "Continue to checkout",
      checkoutNotice: "Demo only. Real payments are not available.",
      remove: "Remove",
      emptyCart: "Your cart is empty.",
      continueShopping: "Continue shopping",
      quantity: "Quantity",
      itemAdded: "Product added to your cart.",
      removedItem: "Product removed from your cart.",
      checkoutDemo: "Payment gateway is not enabled in this demo.",
      invalidProduct: "Product not found.",
      categoryElectronics: "Electronics",
      categoryFashion: "Fashion",
      categoryHome: "Home & Kitchen",
      categoryBeauty: "Beauty & Health",
      explore: "Browse products",
      productsInCategory: "Products in this category",
      rating: "Rating",
      searchEmpty: "Please enter a search term.",
      currency: "Toman",
      unit: "item",
      themeLight: "Light",
      themeDark: "Dark"
    }
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  function getStorage(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value === null ? fallback : value;
    } catch {
      return fallback;
    }
  }

  function setStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // The site remains usable if browser storage is unavailable.
    }
  }

  function getCart() {
    try {
      const cart = JSON.parse(getStorage("vm-cart", "[]"));

      if (!Array.isArray(cart)) return [];

      return cart
        .filter(item =>
          item &&
          Number.isInteger(Number(item.id)) &&
          Number.isInteger(Number(item.quantity)) &&
          Number(item.quantity) > 0 &&
          Number(item.quantity) <= 99 &&
          window.STORE_PRODUCTS?.some(p => p.id === Number(item.id))
        )
        .map(item => ({
          id: Number(item.id),
          quantity: Number(item.quantity)
        }));
    } catch {
      return [];
    }
  }

  function saveCart(cart) {
    const normalized = cart
      .filter(item => Number.isInteger(item.id) && item.quantity > 0)
      .map(item => ({
        id: item.id,
        quantity: Math.min(99, item.quantity)
      }));

    setStorage("vm-cart", JSON.stringify(normalized));
    updateCartCount();
    document.dispatchEvent(new CustomEvent("vm:cart-updated"));
  }

  function addToCart(id) {
    const product = window.STORE_PRODUCTS?.find(p => p.id === Number(id));
    if (!product) return;

    const cart = getCart();
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      if (existing.quantity >= 99) {
        showToast(language() === "fa" ? "حداکثر تعداد مجاز ۹۹ عدد است." : "Maximum quantity is 99.");
        return;
      }

      existing.quantity += 1;
    } else {
      cart.push({ id: product.id, quantity: 1 });
    }

    saveCart(cart);
    showToast(t("itemAdded"));
  }

  function updateCartCount() {
    const count = getCart().reduce((sum, item) => sum + item.quantity, 0);
    const element = $("#cartCount");

    if (element) element.textContent = String(count);
  }

  function language() {
    return getStorage("vm-language", "fa") === "en" ? "en" : "fa";
  }

  function t(key) {
    return translations[language()][key] ?? key;
  }

  function categoryName(categoryId) {
    const key = {
      electronics: "categoryElectronics",
      fashion: "categoryFashion",
      home: "categoryHome",
      beauty: "categoryBeauty"
    }[categoryId];

    return key ? t(key) : categoryId;
  }

  function money(amount) {
    const locale = language() === "fa" ? "fa-IR" : "en-US";
    const formatted = new Intl.NumberFormat(locale, {
      maximumFractionDigits: 0
    }).format(Math.round(amount));

    return `${formatted} ${t("currency")}`;
  }

  function getProductName(product) {
    return language() === "en" ? product.nameEn : product.name;
  }

  function getProductDescription(product) {
    return language() === "en"
      ? product.descriptionEn
      : product.description;
  }

  function discountPercent(product) {
    if (!product.oldPrice || product.oldPrice <= product.price) return 0;

    return Math.round(
      (1 - product.price / product.oldPrice) * 100
    );
  }

  function safeText(value) {
    return String(value).replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);
  }

  function showToast(message) {
    let toast = $("#vmToast");

    if (!toast) {
      toast = document.createElement("div");
      toast.id = "vmToast";
      toast.className = "toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast.timer);

    showToast.timer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }

  function applyTheme(theme) {
    const normalized = theme === "dark" ? "dark" : "light";

    document.documentElement.dataset.theme = normalized;
    setStorage("vm-theme", normalized);

    const button = $("#themeToggle");

    if (button) {
      button.textContent = normalized === "dark" ? "☀️" : "🌙";
      button.setAttribute(
        "aria-label",
        normalized === "dark" ? t("themeLight") : t("themeDark")
      );
      button.title = normalized === "dark" ? t("themeLight") : t("themeDark");
    }
  }

  function applyLanguage(lang) {
    const normalized = lang === "en" ? "en" : "fa";

    setStorage("vm-language", normalized);

    document.documentElement.lang = normalized;
    document.documentElement.dir = normalized === "fa" ? "rtl" : "ltr";

    $$("[data-i18n]").forEach(element => {
      const key = element.dataset.i18n;
      if (translations[normalized][key] !== undefined) {
        element.textContent = translations[normalized][key];
      }
    });

    $$("[data-i18n-placeholder]").forEach(element => {
      const key = element.dataset.i18nPlaceholder;

      if (translations[normalized][key] !== undefined) {
        element.placeholder = translations[normalized][key];
      }
    });

    const languageButton = $("#languageToggle");

    if (languageButton) {
      languageButton.textContent = normalized === "fa" ? "EN" : "فا";
      languageButton.setAttribute(
        "aria-label",
        normalized === "fa" ? "Switch to English" : "تغییر زبان به فارسی"
      );
    }

    applyTheme(getStorage("vm-theme", "light"));
    updateCartCount();

    document.dispatchEvent(new CustomEvent("vm:language-changed"));
  }

  function renderProductCard(product) {
    const name = safeText(getProductName(product));
    const category = safeText(categoryName(product.category));
    const percent = discountPercent(product);
    const oldPrice = percent > 0
      ? `<div class="old-price">${money(product.oldPrice)}</div>`
      : `<div class="old-price">&nbsp;</div>`;

    return `
      <article class="product-card">
        <a
          class="product-image-wrap"
          href="product.html?id=${encodeURIComponent(product.id)}"
          aria-label="${name}"
        >
          <img
            class="product-image"
            src="${safeText(product.image)}"
            alt="${name}"
            loading="lazy"
            onerror="this.onerror=null;this.src='https://placehold.co/500x400/f1e9ff/7128d8?text=Violet+Market';"
          >
          ${percent > 0
            ? `<span class="discount-badge">${language() === "fa" ? "٪" : ""}${percent}${language() === "en" ? "%" : ""}</span>`
            : ""}
        </a>

        <div class="product-info">
          <span class="product-category">${category}</span>

          <h3 class="product-title">
            <a href="product.html?id=${encodeURIComponent(product.id)}">${name}</a>
          </h3>

          <div class="product-prices">
            ${oldPrice}
            <div class="current-price">
              ${money(product.price)}
            </div>
          </div>

          <button
            type="button"
            class="add-to-cart"
            data-add-cart="${product.id}"
          >${t("addToCart")}</button>
        </div>
      </article>
    `;
  }

  function renderProducts(target, products) {
    const container = typeof target === "string" ? $(target) : target;

    if (!container) return;

    if (!products.length) {
      container.innerHTML = `<div class="empty-message">${t("noProducts")}</div>`;
      return;
    }

    container.innerHTML = products.map(renderProductCard).join("");
  }

  function initSearch() {
    const form = $("#searchForm");
    const input = $("#searchInput");

    if (!form || !input) return;

    form.addEventListener("submit", event => {
      event.preventDefault();

      const query = input.value.trim();

      if (!query) {
        showToast(t("searchEmpty"));
        input.focus();
        return;
      }

      window.location.href = `products.html?q=${encodeURIComponent(query)}`;
    });

    const params = new URLSearchParams(window.location.search);

    if (params.has("q")) {
      input.value = params.get("q") || "";
    }
  }

  function initGlobalEvents() {
    $("#languageToggle")?.addEventListener("click", () => {
      applyLanguage(language() === "fa" ? "en" : "fa");
    });

    $("#themeToggle")?.addEventListener("click", () => {
      const current = getStorage("vm-theme", "light");
      applyTheme(current === "dark" ? "light" : "dark");
    });

    document.addEventListener("click", event => {
      const button = event.target.closest("[data-add-cart]");

      if (!button) return;

      const id = Number(button.dataset.addCart);
      if (Number.isInteger(id)) addToCart(id);
    });

    $("#currentYear")?.replaceChildren(
      document.createTextNode(String(new Date().getFullYear()))
    );
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(language());
    applyTheme(getStorage("vm-theme", "light"));
    initSearch();
    initGlobalEvents();
    updateCartCount();
  });

  window.VioletMarket = {
    $,
    $$,
    t,
    language,
    money,
    categoryName,
    getProductName,
    getProductDescription,
    discountPercent,
    getCart,
    saveCart,
    addToCart,
    updateCartCount,
    renderProductCard,
    renderProducts,
    showToast,
    safeText
  };
})();
