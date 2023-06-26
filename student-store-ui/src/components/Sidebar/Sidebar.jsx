import * as React from "react"
import "./Sidebar.css"
import CheckoutInfo from "../CheckoutInfo/CheckoutInfo"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import { useState } from "react"
import CheckOut from "../CheckOutForm/CheckOut"

export default function Sidebar({isOpen, setIsOpen, cart, setCart, products}) {

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

const handleOnToggle = () => {
  console.log("inside function")
    setIsOpen((isOpen) => !isOpen);
  }
console.log(isOpen)

  return (
    <section className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div class="wrapper">
        <button class="toggle-button button closed" onClick={handleOnToggle} >
          <i class="material-icons md-48">arrow_forward</i>
          </button>
            <div class="shopping-cart">
              <div class="cart-icons">
                <span class="cart-icon icon button">
                  <i class="material-icons md-48">add_shopping_cart</i>
                </span>
                <span class="cart-icon icon button">
                  <i class="material-icons md-48">monetization_on</i>
                </span>
                <span class="cart-icon icon button">
                <i class="material-icons md-48">fact_check</i>
                </span>
                {isOpen &&(
                <ShoppingCart cart={cart} setCart={setCart} products={products} user ={user} setUser={setUser} email ={email} setEmail ={setEmail} />
                )}
                <CheckOut />
              </div>
            </div>
          </div>
    </section>
  )
}