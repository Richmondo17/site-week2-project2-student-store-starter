import * as React from "react"

// Importing necessary components and libraries from react-router-dom
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductDetails from '../ProductDetails/ProductDetails';
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

export default function App() {
  const url = "http://localhost:3001/";
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);

  // Fetching data from the server using axios and updating the 'products' state
  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* Rendering the Navbar component */}
          <Navbar />
          
          {/* Rendering the Hero component */}
          <Hero />
          
          {/* Rendering the Sidebar component and passing necessary props */}
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} cart={cart} setCart={setCart} />
          
          {/* Defining routes for different pages */}
          <Routes>
            {/* Rendering the Home component and passing necessary props */}
            <Route path="/" element={<Home products={products} cart={cart} setCart={setCart} />} />
            
            {/* Rendering the ProductDetails component */}
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
          
          {/* Rendering other components */}
          {/* <SearchComponent data={products}/> */}
          {/* <SubNavBar products={products} /> */}
          <About />
          <Contact />
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}

