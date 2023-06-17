import React from 'react'
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

const ProductGrid = (props) => {

  const productData = props.product

  return (
    <div className='grid'>
     {productData.map((item) =>(
            <ProductCard
            name={item.name}
            id={item.id}
            image={item.image}
            price={item.price}
            key={item.id}
          />
        ))}
    </div>
  )
}

export default ProductGrid