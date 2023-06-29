import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
// import { useParams } from "react-router-dom";
import "./ProductCard.css"

// Exporting the ProductCard component as the default export
export default function ProductCard({ product, cart, setCart }) {

  // Function to add a product to the cart
  function addToCart(product) {
    const checkProduct = cart?.find((item) => item.id === product.id);

    if (checkProduct) {
      // If the product already exists in the cart, update its quantity
      const updatedCart = cart?.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      // If the product doesn't exist in the cart, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  // Function to remove a product from the cart
  function removeFromCart(product) {
    const checkProduct = cart?.find((item) => item.id === product.id);
    
    if (checkProduct?.quantity === 1) {
      // If the product's quantity in the cart is 1, remove it from the cart
      const updatedCart = cart?.filter((item) => item.id !== product.id);
      setCart(updatedCart);
    } else {
      // If the product's quantity in the cart is greater than 1, decrease its quantity
      const updatedCart = cart?.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setCart(updatedCart);
    }
  }

  return (
    <section className="product" style={{ margin: '10px auto' }}>
      
      {/* Link to navigate to the individual product page */}
      <Link to={`/products/${product.id}`} className="product-link">
        {/* Product image */}
        <img className="product-image" style={{ width: '330px' }} src={product.image} alt={product.name} />
      </Link>

      <div className="main-info">
        {/* Product name */}
        <p>
          <b>{product.name}</b>
        </p>
        {/* Product price */}
        <p>
          <b>${product.price}</b>
        </p>

        {/* Button to add a product to the cart */}
        <button className="purchasebuttons" onClick={() => addToCart(product)}>+</button>
        
        {/* Display the quantity of the product in the cart */}
        <span>
          {(cart.find(item => item.id === product.id)) ? (cart.find(item => item.id === product.id).quantity) : ("0")}
        </span>
        
        {/* Button to remove a product from the cart */}
        <button className="purchasebuttons" onClick={() => removeFromCart(product)}>-</button>
      </div>
    </section>
  );
}
