import React from 'react'
import "./ShoppingCart.css"
import {useEffect, useState} from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ShoppingCart = (props) => {
    const shoppingCartList = props.cart;
    const setShoppingCartList = props.setCart;
    const products = props.products;
    
    // const [user, setUser] = useState("");
    // const [email, setEmail] = useState("");
    const [submittedData, setSubmittedData] = useState(false);
    const [showTable, setShowTable] = useState(true);

  
    const taxes = "7%";
    console.log(props.cart)
    
    let subtotal = 0;
  
    props.cart.forEach((purchaseItem) => {
      subtotal +=
        purchaseItem.quantity * purchaseItem.price;
    });
  
    function handleSubmit (event) {
      event.preventDefault();
      setSubmittedData(true);
      setShowTable(false);
    };



  
    // console.log(purchasedItems)
    return (
      <div className="sidebaritems">
        <div className="shoppingcartTable">

            {props.cart?.length === 0 || !showTable ? (
                <div className="shoppingTitle">
                    <h2>Shopping Cart</h2>
                </div>
            ) : (
                <>
                <h2>Shopping Cart</h2>
                <table className="itemTable">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
    
                    
                  {props.cart.map((purchaseItem, rowIndex) => {
                    return(
                    <tr key={rowIndex}>
                      <td>{purchaseItem.name}</td>
                      <td>{purchaseItem.quantity}</td>
                      <td>{purchaseItem.price}</td>
                      <td>
                        {(
                          purchaseItem.quantity *
                          purchaseItem.price
                        ).toFixed(2)}
                      </td>
                    </tr>
                    )
                    
                        })}
                  
                </tbody>
              </table>
            
            
            <div className="purchaseCalculation">
              <div className="subtotal">
                <h4>Subtotal</h4>
                <h4>{subtotal.toFixed(2)}</h4>
              </div>
              <div className="taxesFees">
                <h4>Taxes</h4>
                <h4>{(subtotal * 0.07).toFixed(2)}</h4>
              </div>
              <div className="totalFee">
                <h4>Total</h4>
                <h4>{(subtotal * 1.07).toFixed(2)}</h4>
              </div>
            </div>
          </>
            )}
  
        {/* Payment info and receipt section */}
  
        <div className="paymentInfo">
          <h2 className="paymentTitle">Payment Info</h2>
  
          <form >
            <div className="userInput">
              <label htmlFor="user">Name of User</label>
              <input
                id="user"
                type="text"
                value={props.user}
                onChange={(event) => props.setUser(event.target.value)}
                placeholder="Student Name"
                required
              />
            </div>
            <div className="emailInput">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={props.email}
                onChange={(event) => props.setEmail(event.target.value)}
                placeholder="student@codepath.org"
                required
              />
            </div>
  
            <button onClick={handleSubmit} className="submitbutton" type="submit">
              Submit
            </button>
          </form>

          {(submittedData && props.cart.length > 0) ? (
            <>    
            <div className="checkout">
              <h2>Checkout Info</h2>
              <h3>Receipt</h3>
              <span></span>
              <p>
                Showing receipt for <b>{props.user}</b> available at <b>{props.email}</b>:
              </p>
                {props.cart.map((purchaseItem, rowIndex) => (
                  <p key={rowIndex}>
                  <b> {purchaseItem.quantity} total{" "} </b>
                  <b> {purchaseItem.name} </b> at a cost of $
                   <b> {(
                      purchaseItem.quantity *
                      purchaseItem.price
                    ).toFixed(2)}{" "} </b>
                    for a total cost of $
                   <b> {(
                      purchaseItem.quantity *
                      purchaseItem.price
                    ).toFixed(2)} </b>
                  </p>
                ))}
                  <p>
                  Before taxes, the subtotal was <b>{subtotal.toFixed(2)}</b>
                  </p>
                <p>
                  After taxes and fees were applied, the total comes out to $
                  <b>{(subtotal * 1.07).toFixed(2)} </b>
                </p>
            </div>
            
            </> ) : (
            <p></p>
          )}
        </div>
      </div>
      </div>
    );
  };

export default ShoppingCart;