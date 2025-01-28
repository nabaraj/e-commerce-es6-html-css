export const renderProducts = (products) => {
  const productGrid = document.getElementById("product-grid");
  productGrid.innerHTML = products
    .map(
      (product) => `
        <div class="product-card">
          <img src="${product.image}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p>$${product.price}</p>
        </div>
      `
    )
    .join("");
};
