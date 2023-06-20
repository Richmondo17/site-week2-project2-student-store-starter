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
  const url = "https://codepath-store-api.herokuapp.com/store";
  const [products, setProducts] = useState([]);

  // const results = products.filter((product) => {});
  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products);
      // console.log(response.data.products)
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Hero />
          {/* <Sidebar /> */}
          <Routes>
              <Route path= "/" element={<Home products={products} /> } />
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
