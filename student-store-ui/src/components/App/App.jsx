import * as React from "react"
// import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import {useEffect, useState} from 'react'
import axios from 'axios'
import ProductDetails from '../ProductDetails/ProductDetails';
// import SearchComponent from "../searchComponent/searchComponent"


export default function App() {
  const url = "https://codepath-store-api.herokuapp.com/store";
  const [products, setProducts] = useState([]);

  // const results = products.filter((product) => {});
  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products);
      console.log(response.data.products)
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar />
          <Hero />
          {/* <SearchComponent data={products}/> */}
          {/* <SubNavBar products={products} /> */}
          
          <Home products={products} />
        </main>
      </BrowserRouter>
    </div>
  );
}
