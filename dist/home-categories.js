(function () {
  const container = document.querySelector("[data-home-categories]");
  const catalog = window.DiraaCatalog;
  if (!container || !catalog) return;

  catalog.categories
    .filter((category) => category.slug !== "all")
    .forEach((category, index) => {
      const link = document.createElement("a");
      const number = document.createElement("span");
      const arrow = document.createElement("i");

      link.href = `/collections?category=${category.slug}`;
      number.textContent = String(index + 1).padStart(2, "0");
      arrow.textContent = "↗";
      arrow.setAttribute("aria-hidden", "true");
      link.append(number, document.createTextNode(category.label), arrow);
      container.append(link);
    });
})();
