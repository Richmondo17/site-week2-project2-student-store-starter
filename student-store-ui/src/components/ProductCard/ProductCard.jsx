import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
// import { useParams } from "react-router-dom";
import "./ProductCard.css"

export default function ProductCard({product, cart, setCart}) {

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
    }  else{
      setCart([...cart, { ...product, quantity: 1 }]);
   
    }

   
  }

  function removeFromCart(product) {
    const checkProduct = cart?.find((item) => item.id === product.id);
    if (checkProduct?.quantity === 1) {
      const updatedCart = cart?.filter((item) => item.id !== product.id);
      setCart(updatedCart);
    } else {
      const updatedCart = cart?.map((item) => {
        if (item.id === product.id) {
          console.log(cart);
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      console.log(cart);
      setCart(updatedCart);
    }
  }


  return (
    <section className="product" style={{margin: '10px auto'}}>

      <Link to={`/products/${product.id}`} className="product-link">
        <img className="product-image" 
        style={{ width: '330px'}} 
        src={product.image} 
        alt={product.name} />
      </Link>

      {/* <img className="product-image" 
      
      style={{ width: '330px' }}
      src={image} 
      /> */}

      <div className="main-info">
        <p>
          <b>{product.name}</b>
        </p>
        <p>
          <b>${product.price}</b>
        </p>

        <button className="purchasebuttons" onClick={() => addToCart(product)}>+</button>  
              <span>{(cart.find(item=>item.id===product.id))? (cart.find(item => item.id === product.id).quantity):("0")}  </span>
             <button className="purchasebuttons" onClick={()=>removeFromCart(product)}>-</button>
        {/* <button
          className="addButton"
          onClick={() => {
            addToCart(product);
          }}
        >
          +
        </button>

        <button
          className="decButt"
          onClick={() => {
            removeFromCart(product);
          }}
        >
          -
        </button>

        <span> </span> */}
      </div>
    </section>
  );
}