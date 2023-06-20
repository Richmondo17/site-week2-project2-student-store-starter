import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
// import { useParams } from "react-router-dom";
import "./ProductCard.css"

export default function ProductCard({ name, id, image, price }) {
  // console.log(id);
  return (
    <section className="product" style={{margin: '10px auto'}}>
      <Link to={`/products/${id}`} className="product-link">
        <img className="product-image" style={{ width: '330px' }} src={image} alt={name} />
      </Link>
      {/* <img className="product-image" 
      
      style={{ width: '330px' }}
      src={image} 
      /> */}
      <div className="main-info">
        <p>
          <b>{name}</b>
        </p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </section>
  );
}