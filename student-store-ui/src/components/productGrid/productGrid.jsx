import React from 'react'
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"
import { BrowserRouter, Link, Outlet} from 'react-router-dom';

//pass props into the ProductGrid variable
const ProductGrid = ({product, setCart, cart}) => {

  let productData = product
  console.log(productData)
 
  //return statement
  //that links to the product grid portion of the website
  return (
    <>
    <div className='grid'>
     
      
        {productData.map((product) =>
        <ProductCard
          product={product} key = {product.id} setCart={setCart} cart={cart}
        /> 
      )}
  
    </div>
  
    </>
  
  )
}

export default ProductGrid