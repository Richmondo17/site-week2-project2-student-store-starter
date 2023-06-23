import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
// import { useParams } from "react-router-dom";
import "./ProductCard.css"

export default function ProductCard({products, cart, setCart }) {
  // console.log(products);

  function addToCart(product){

    const checkProduct = cart?.find((item) => item.id === product.id);
    if(checkProduct){
      const updatedCart = cart?.map((item) =>{
        if(item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else{
      // setCart([...cart, { ...product, quantity: 1 }]);
      setCart((prev) => [...prev, {...product, quantity:1}]); 
    }

    console.log(cart)
  }

 

// function createProduct(info, index){

// }

  return (
    <section className="product" style={{margin: '10px auto'}}>

      <Link to={`/products/${products.id}`} className="product-link">
        <img className="product-image" 
        style={{ width: '330px'}} 
        src={products.image} 
        alt={products.name} />
      </Link>

      {/* <img className="product-image" 
      
      style={{ width: '330px' }}
      src={image} 
      /> */}

      <div className="main-info">
        <p>
          <b>{products.name}</b>
        </p>
        <p>
          <b>${products.price}</b>
        </p>
        <button
          className="quantity-button"
          onClick={addToCart}
        >
          +
        </button>
        <span> </span>
        <button>-</button>

        {/* <button>-</button> */}
      </div>
    </section>
  );
}