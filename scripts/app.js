// Fetch data from API
const fetchData = async (url) => {
  try {
    const response = await fetch(url);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: error.message }; // Return an error message
  }
};

// Render products dynamically
const renderProducts = ({ products = [], error = null }) => {
  const productGrid = document.getElementById("product-grid");

  // Display error if exists
  if (error) {
    productGrid.innerHTML = `<p class="error-message">Error: ${error}</p>`;
    return;
  }

  // Display "No products found" message if the array is empty
  if (!products || products.length === 0) {
    productGrid.innerHTML = "<p>No products found.</p>";
    return;
  }
  //show product count
  const productCount = document.getElementById("productCount");
  productCount.innerText = products.length + " Results";
  // Render product cards

  productGrid.innerHTML = products
    .map(
      (product) => `
        <div class="product-card">
          <div class="product-image"><img src="${product.image}" alt="${product.title}"></div>
          <h3 class="product-title">${product.title}</h3>
          <p class="product-price">$${product.price}</p>
          <div class="product-like"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg></div>
        </div>
      `
    )
    .join("");
};

// Initialize the application
const init = async () => {
  const result = await fetchData("https://fakestoreapi.com/products"); // Incorrect endpoint for testing
  if (result.error) {
    renderProducts({ error: result.error }); // Pass the error to renderProducts
  } else {
    renderProducts({ products: result }); // Pass the fetched products
  }
};

// Run the application
init();
