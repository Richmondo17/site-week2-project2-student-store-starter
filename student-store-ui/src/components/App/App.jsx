import * as React from "react"
// import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import {useEffect, useState} from 'react'
import axios from 'axios'
import ProductDetails from '../ProductDetails/ProductDetails';
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
// import SearchComponent from "../searchComponent/searchComponent"


export default function App() {
  const url = "http://localhost:3001/";
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);

  // const results = products.filter((product) => {});
  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products);

    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Hero />
          <Sidebar isOpen ={isOpen} setIsOpen={setIsOpen} cart={cart} setCart={setCart} />
          <Routes>
              <Route path= "/" element={<Home products={products} cart={cart}  setCart={setCart} /> } />
              <Route path= "/products/:id" element ={<ProductDetails />} />
          </Routes>
          {/* <SearchComponent data={products}/> */}
          {/* <SubNavBar products={products} /> */}
          
          <About/>
          <Contact/>
          <Footer/>
        </main>
      </BrowserRouter>
    </div>
  );
}
