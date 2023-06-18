import React from 'react';
// import { BrowserRouter, Router, Routes, Route, useParams } from 'react-router-dom';

const ProductDetails = ({ match, products }) => {
  const { productId } = match.params;
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: '300px' }} />
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetails;