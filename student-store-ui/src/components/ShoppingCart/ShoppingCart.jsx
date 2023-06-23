import React from 'react'
import "./ShoppingCart.css"
import {useEffect, useState} from 'react'

const ShoppingCart = (cart, setCart) => {

  return (
    <div>
        <div class="open">
            <h3 class=""> 
            Shopping Cart 
            <span class="button">
                <i class="material-icons md-48">add_shopping_cart</i>
            </span>
            </h3>
        <div class="notification">
            No items added to cart yet. Start shopping now!
        </div>
        <div class="checkout-form">
            <h3 class="">Payment Info <span class="button">
                <i class="material-icons md-48">monetization_on</i>
            </span>
            </h3>
        <div class="input-field">
            <label class="label">Name</label>
        <div class="control ">
            <input name="name" class="checkout-form-input" type="text" placeholder="Student Name" value=""/>
        </div>
    </div>
    <div class="input-field">
        <label class="label">Email</label>
    <div class="control">
            <input name="email" class="checkout-form-input" type="email" placeholder="student@codepath.org" value=""/>
        </div>
    </div>
    <div class="field">
        <div class="control">
            <label class="checkbox">
                <input name="termsAndConditions" type="checkbox"/>
                    <span class="label">I agree to the <a href="#terms-and-conditions">terms and conditions</a>
                    </span>
            </label>
        </div>
    </div>
    <p class="is-danger"></p>
    <div class="field">
        <div class="control">
            <button class="button checkout-button">Checkout</button>
        </div>
    </div>
</div>
    <div class="checkout-success">
        <h3>Checkout Info <span class="icon button">
            <i class="material-icons md-48">fact_check</i>
            </span>
        </h3>
    <div class="content">
        <p>A confirmation email will be sent to you so that you can 
            confirm this order. Once you have confirmed the order, it will be 
            delivered to your dorm room.
        </p>
    </div>
</div>
</div>
        
    </div>
  )
}

export default ShoppingCart