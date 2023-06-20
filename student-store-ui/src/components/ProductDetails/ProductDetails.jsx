import React, { useEffect } from 'react';
import { BrowserRouter, Router, Routes, Route, useParams } from 'react-router-dom';
import { useState } from 'react';

import axios from 'axios';
const ProductDetails = () => {
  const { id } = useParams();
  console.log(id)
 
//   const product = products.find((item) => item.id === productId);


  const url = "https://codepath-store-api.herokuapp.com/store";
  const [products, setProducts] = useState({});

  // const results = products.filter((product) => {});
 useEffect(() => {
    axios.get(url + "/" + id).then((response) => {
        setProducts(response.data.product)
        
        
    })
 }, [])

 console.log(products)



//   if (!product) {
//     return <div>Product not found</div>;
//   }

  return (
    <div>
      <h2>{products.name}</h2>
      <img src={products.image} alt={products.name} style={{ width: '300px' }} />
      <p>Price: ${products.price}</p>
      <p>Description: {products.description}</p>
    </div>
  );
};

export default ProductDetails;