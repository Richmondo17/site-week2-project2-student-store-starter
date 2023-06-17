import * as React from "react"
import "./Home.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import ProductGrid from "../productGrid/productGrid";
import SubNavbar from "../SubNavbar/SubNavbar"

export default function Home({ products }) {

const [searchTerm, setSearchTerm] = useState("");
const [filteredProduct, setFilteredProduct] = useState(products);

const handleSearch = (event) =>{
    event.preventDefault();
    setSearchTerm(event.target.value);

    console.log(event.target.value)

    setFilteredProduct(
        products.filter((item) =>
            item.name.toLowerCase().includes(event.target.value.toLowerCase()) && 
            item.category.toLowerCase().includes(event.target.value.toLowerCase())
        )
    )
    console.log(filteredProduct)
  }
  console.log("product:")
  console.log(products)
  console.log("filtered products:")

  return (
    <div className="home">
      <br></br>
      <div className="products-grid" style={{margin: '10px auto'}}>
      <div>

        <SubNavbar/>
        <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Enter search....."
        />

        <ProductGrid product =  {filteredProduct.length == 0? products: filteredProduct }/>
        </div>
      </div>
    </div>
  );
}
