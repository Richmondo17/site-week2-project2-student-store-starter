import * as React from "react"
import "./Home.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import ProductGrid from "../productGrid/productGrid";
import SubNavbar from "../SubNavbar/SubNavbar"

export default function Home({ products, cart, setCart }) {

const [searchTerm, setSearchTerm] = useState("");
const [filteredProduct, setFilteredProduct] = useState(products);
const categories = Array.from(new Set(products.map((item) => item.category)));

const handleSearch = (event) =>{
    event.preventDefault();
    setSearchTerm(event.target.value);



   const filter = setFilteredProduct(
        products.filter((item) =>
            // item.category.toLowerCase().includes(event.target.value.toLowerCase()) &&
            item.name.toLowerCase().includes(event.target.value.toLowerCase()) 
            
        )
    )
    // console.log(filteredProduct)
  }
  // console.log("product:")
  // console.log(products)
  // console.log("filtered products:")

  const handleCategorySelect = (category) => {
    setSearchTerm('');
    setFilteredProduct(
      products.filter((item) => item.category.toLowerCase().includes(category.toLowerCase()))
    );
  };


  return (
    <div className="home">
      <br></br>
      <div className="products-grid" style={{margin: '10px auto'}}>
      <div>

      
        <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Enter search....."
        />



        <SubNavbar categories={categories} onSelectCategory={handleCategorySelect} />

        <div id="bestSeller">
          <h2>Best Selling Products</h2>
        </div>
        

        <ProductGrid product =  {filteredProduct.length == 0? products: filteredProduct } cart={cart} setCart={setCart}/>
        {/* <ProductGrid product = {products} /> */}
        
          
        </div>
      </div>
    </div>
  );
}
