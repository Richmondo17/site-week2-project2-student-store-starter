import React from 'react'
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"
import { BrowserRouter, Link, Outlet} from 'react-router-dom';

//pass props into the ProductGrid variable
const ProductGrid = (props) => {

  let productData = props.product
  console.log(productData)
 
  //return statement
  //that links to the product grid portion of the website
  return (
    <>
    <div className='grid'>
     
      
        {productData.map((product) =>
          <ProductCard
          products={product} key = {product.id}
        /> 
      )}
  
    </div>
  
    </>
  
  )
}

export default ProductGrid