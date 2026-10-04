(function () {
  const categories = Object.freeze([
    Object.freeze({ label: "All", slug: "all" }),
    Object.freeze({ label: "Necklaces", slug: "necklaces" }),
    Object.freeze({ label: "Bracelets", slug: "bracelets" }),
    Object.freeze({ label: "Earrings", slug: "earrings" }),
    Object.freeze({ label: "Rings", slug: "rings" }),
    Object.freeze({ label: "Hand Cuffs", slug: "hand-cuffs" }),
    Object.freeze({ label: "Anklets", slug: "anklets" }),
    Object.freeze({ label: "Phone Charms", slug: "phone-charms" }),
    Object.freeze({ label: "Bag Charms", slug: "bag-charms" }),
    Object.freeze({ label: "Keychains", slug: "keychains" }),
  ]);

  // These records map only the unique product imagery already supplied in the
  // Diraa catalog. Neutral titles avoid implying unverified SKUs or pricing.
  const products = Object.freeze([
    Object.freeze({
      id: "necklace-edit-01",
      title: "Necklace Edit 01",
      category: "necklaces",
      image: "/assets/images/diraa-necklace-collection.webp",
      width: 1400,
      height: 700,
      alt: "Green, white and blue bead necklaces with sculptural gold pendants",
    }),
    Object.freeze({
      id: "necklace-edit-02",
      title: "Necklace Edit 02",
      category: "necklaces",
      image: "/assets/images/diraa-colour-necklaces.webp",
      width: 900,
      height: 1125,
      alt: "Pink, orange and gold bead necklaces arranged with lemons",
    }),
    Object.freeze({
      id: "necklace-edit-03",
      title: "Necklace Edit 03",
      category: "necklaces",
      image: "/assets/images/diraa-necklace-detail.webp",
      width: 900,
      height: 1350,
      alt: "Pastel bead necklace styled on a model",
    }),
    Object.freeze({
      id: "necklace-edit-04",
      title: "Necklace Edit 04",
      category: "necklaces",
      image: "/assets/images/diraa-necklace-line.webp",
      width: 900,
      height: 900,
      alt: "Colourful necklaces suspended against a bright blue sky",
    }),
    Object.freeze({
      id: "necklace-edit-05",
      title: "Necklace Edit 05",
      category: "necklaces",
      image: "/assets/images/diraa-necklace-portrait.webp",
      width: 1200,
      height: 1800,
      alt: "Model wearing a colourful chunky bead necklace",
    }),
    Object.freeze({
      id: "bracelet-edit-01",
      title: "Bracelet Edit 01",
      category: "bracelets",
      image: "/assets/images/diraa-bead-styling.webp",
      width: 900,
      height: 1600,
      alt: "Pastel bead bracelets styled with shell necklaces against a blue sky",
    }),
    Object.freeze({
      id: "phone-charm-edit-01",
      title: "Phone Charm Edit 01",
      category: "phone-charms",
      image: "/assets/images/diraa-bag-charm.webp",
      width: 900,
      height: 1350,
      alt: "Pink beaded charm styled against blue denim",
    }),
    Object.freeze({
      id: "bag-charm-edit-01",
      title: "Bag Charm Edit 01",
      category: "bag-charms",
      image: "/assets/images/diraa-clutch-charm.webp",
      width: 900,
      height: 1800,
      alt: "Olive clutch styled with a colourful beaded charm",
    }),
  ]);

  window.DiraaCatalog = Object.freeze({ categories, products });
})();
