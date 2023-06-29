import React, { useEffect } from 'react';
import { BrowserRouter, Router, Routes, Route, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

// Define the ProductDetails component
const ProductDetails = () => {
  // Extract the "id" parameter from the URL using the useParams hook
  const { id } = useParams();

  // Define the URL for fetching the product data
  const url = "http://localhost:3001/store";

  // Define a state variable to store the product data
  const [products, setProducts] = useState({});

  // Fetch the product data from the API using the useEffect hook
  useEffect(() => {
    axios.get(url + "/" + id).then((response) => {
      // Update the products state with the fetched product data
      setProducts(response.data.product);
    });
  }, []);

  return (
    <div>
      {/* Render the product details */}
      <h2>{products.name}</h2>
      <img src={products.image} alt={products.name} style={{ width: '300px' }} />
      <p>Price: ${products.price}</p>
      <p>Description: {products.description}</p>
    </div>
  );
};

// Export the ProductDetails component as the default export
export default ProductDetails;
