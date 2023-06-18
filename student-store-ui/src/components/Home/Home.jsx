import * as React from "react"
import "./Home.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import ProductGrid from "../productGrid/productGrid";
import SubNavbar from "../SubNavbar/SubNavbar"

export default function Home({ products }) {

const [searchTerm, setSearchTerm] = useState("");
const [filteredProduct, setFilteredProduct] = useState(products);
const categories = Array.from(new Set(products.map((item) => item.category)));

const handleSearch = (event) =>{
    event.preventDefault();
    setSearchTerm(event.target.value);

    console.log(event.target.value)

    setFilteredProduct(
        products.filter((item) =>
            item.category.toLowerCase().includes(event.target.value.toLowerCase()) &&
            item.name.toLowerCase().includes(event.target.value.toLowerCase()) 
            
        )
    )
    console.log(filteredProduct)
  }
  console.log("product:")
  console.log(products)
  console.log("filtered products:")

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

        <ProductGrid product =  {filteredProduct.length == 0? products: filteredProduct }/>
        </div>
      </div>
    </div>
  );
}
