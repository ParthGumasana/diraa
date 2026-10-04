(function () {
  const catalog = window.DiraaCatalog;
  const buttonGroup = document.querySelector("[data-category-buttons]");
  const select = document.querySelector("[data-category-select]");
  const grid = document.querySelector("[data-product-grid]");
  const count = document.querySelector("[data-product-count]");
  const emptyState = document.querySelector("[data-empty-state]");
  const viewAll = document.querySelector("[data-view-all]");

  if (!catalog || !buttonGroup || !select || !grid || !count || !emptyState) return;

  const { categories, products } = catalog;
  const validSlugs = new Set(categories.map((category) => category.slug));
  const categoryLabels = new Map(categories.map((category) => [category.slug, category.label]));

  const getCategoryFromUrl = () => {
    const requested = new URLSearchParams(window.location.search).get("category");
    return requested && validSlugs.has(requested) && requested !== "all" ? requested : "all";
  };

  const writeUrl = (slug, mode) => {
    const url = new URL(window.location.href);
    url.pathname = "/collections";
    if (slug === "all") url.searchParams.delete("category");
    else url.searchParams.set("category", slug);
    window.history[mode]({}, "", `${url.pathname}${url.search}${url.hash}`);
  };

  const productCard = (product) => {
    const article = document.createElement("article");
    article.className = "product-card";
    article.dataset.category = product.category;

    const imageWrap = document.createElement("div");
    imageWrap.className = "product-card-image";

    const image = document.createElement("img");
    image.src = product.image;
    image.width = product.width;
    image.height = product.height;
    image.alt = product.alt;
    image.loading = "lazy";
    imageWrap.append(image);

    const details = document.createElement("div");
    details.className = "product-card-details";

    const category = document.createElement("p");
    category.textContent = categoryLabels.get(product.category);

    const title = document.createElement("h3");
    title.textContent = product.title;

    details.append(category, title);
    article.append(imageWrap, details);
    return article;
  };

  const render = (slug, updateHistory = false) => {
    const activeSlug = validSlugs.has(slug) ? slug : "all";
    const visibleProducts =
      activeSlug === "all" ? products : products.filter((product) => product.category === activeSlug);

    grid.replaceChildren(...visibleProducts.map(productCard));
    grid.hidden = visibleProducts.length === 0;
    emptyState.hidden = visibleProducts.length !== 0;
    count.textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? "product" : "products"}`;
    select.value = activeSlug;

    buttonGroup.querySelectorAll("button").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.category === activeSlug));
    });

    if (updateHistory) writeUrl(activeSlug, "pushState");
  };

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.category = category.slug;
    button.textContent = category.label;
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => render(category.slug, true));
    buttonGroup.append(button);

    const option = document.createElement("option");
    option.value = category.slug;
    option.textContent = category.label;
    select.append(option);
  });

  select.addEventListener("change", () => render(select.value, true));
  viewAll?.addEventListener("click", () => render("all", true));
  window.addEventListener("popstate", () => render(getCategoryFromUrl()));

  const initialCategory = getCategoryFromUrl();
  const requested = new URLSearchParams(window.location.search).get("category");
  if (requested && (!validSlugs.has(requested) || requested === "all")) writeUrl("all", "replaceState");
  render(initialCategory);
})();
