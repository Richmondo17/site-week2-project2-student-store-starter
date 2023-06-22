import React from 'react'
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"
import { BrowserRouter, Link, Outlet} from 'react-router-dom';

//pass props into the ProductGrid variable
const ProductGrid = (props) => {

  let productData = props.product
  console.log(productData[0])
  


  //return statement
  //that links to the product grid portion of the website
  return (
    <>
    
    <Link to={`products/${productData.id}`}> 
 
 
    <div className='grid'>
     {productData.map((item) =>(
      //map the productData
            <ProductCard
            name={item.name}
            id={item.id}
            image={item.image}
            price={item.price}
            key={item.id}
          />
      ))}
  
    </div>
    </Link>
    </>
  
  )
}

export default ProductGrid