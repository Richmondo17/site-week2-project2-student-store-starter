// Importing necessary dependencies and CSS file
import * as React from "react"
import "./Home.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import ProductGrid from "../productGrid/productGrid";
import SubNavbar from "../SubNavbar/SubNavbar"

// Exporting the Home component as the default export
export default function Home({ products, cart, setCart }) {

  // State variables to store search term and filtered products
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProduct, setFilteredProduct] = useState(products);

  // Creating an array of unique categories from the list of products
  const categories = Array.from(new Set(products.map((item) => item.category)));

  // Event handler for search functionality
  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);

    // Filtering products based on the search term
    setFilteredProduct(
      products.filter((item) =>
        item.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  }

  // Event handler for category selection
  const handleCategorySelect = (category) => {
    setSearchTerm('');

    // Filtering products based on the selected category
    setFilteredProduct(
      products.filter((item) => item.category.toLowerCase().includes(category.toLowerCase()))
    );
  };

  return (
    <div className="home">
      <br></br>
      <div className="products-grid" style={{ margin: '10px auto' }}>
        <div>
          {/* Search input to allow users to search for products */}
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Enter search....."
          />

          {/* SubNavbar component to display categories and allow category selection */}
          <SubNavbar categories={categories} onSelectCategory={handleCategorySelect} />

          {/* Section for displaying best-selling products */}
          <div id="bestSeller">
            <h2>Best Selling Products</h2>
          </div>

          {/* ProductGrid component to render the grid of products */}
          <ProductGrid product={filteredProduct.length === 0 ? products : filteredProduct} cart={cart} setCart={setCart} />
        </div>
      </div>
    </div>
  );
}
