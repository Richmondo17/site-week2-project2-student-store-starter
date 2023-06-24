import React from 'react'
import "./ShoppingCart.css"
import {useEffect, useState} from 'react'
import ProductCard from '../ProductCard/ProductCard'

// const ShoppingCart = (isOpen, setIsOpen, cart, setCart, product) => {


//     const taxes= "7%"
//     let purchasedItems = [];
//     let subtotal=0
//     subtotal.toFixed(2)



//   return (
//     <div>
//         <div class="open">
//             <h3 class=""> 
//             Shopping Cart 
//             <span class="button">
//                 <i class="material-icons md-48">add_shopping_cart</i>
//             </span>
//             <span>
//             {isOpen &&(
//                     <div class="CartTable">
//                         <div class="header">
//                             <div class="header-row">
//                                 <span class="flex-2">Name</span>
//                                 <span class="center">Quantity</span>
//                                 <span class="center">Unit Price</span>
//                                 <span class="center">Cost</span></div>
//                             <div class="product-row">
//                                 <span class="flex-2 cart-product-name">Coconut Water</span>
//                                 <span class="center cart-product-quantity">2</span>
//                                 <span class="center cart-product-price">$3.25</span>
//                                 <span class="center cart-product-subtotal">$6.50</span>
//                             </div>
//                         </div>
//                     <div class="receipt">
//                     <div class="receipt-subtotal">
//                         <span class="label">Subtotal</span>
//                         <span></span>
//                         <span></span>
//                     <span class="center subtotal">$6.50</span>
//                     </div>
//                     <div class="receipt-taxes">
//                         <span class="label">Taxes and Fees</span>
//                         <span></span>
//                         <span></span>
//                         <span class="center">$0.57</span>
//                     </div>
//                     <div class="receipt-total">
//                         <span class="label">Total</span>
//                         <span></span>
//                         <span></span>
//                         <span class="center total-price">$7.07</span>
//                     </div>
//                     </div>
//                 </div>
//                 )}
//             </span>
//             </h3>
//         <div class="notification">
//             No items added to cart yet. Start shopping now!
//             <table className='itemTable'>
//         <thead>
//           <tr>
//           <th>Name</th>
//           <th>Quantity</th>
//           <th>Unit Price</th>
//           <th>cost</th>
//           </tr>
//         </thead>
//         <tbody>
//         {purchasedItems.map((purchaseItem, rowIndex)=>(
//           <tr>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//           </tr>

//         ))}           
//         </tbody>
//         </table> 
//         </div>
//         <div class="checkout-form">
//             <h3 class="">Payment Info <span class="button">
//                 <i class="material-icons md-48">monetization_on</i>
//             </span>
//             </h3>
//         <div class="input-field">
//             <label class="label">Name</label>
//         <div class="control ">
//             <input name="name" class="checkout-form-input" type="text" placeholder="Student Name" value=""/>
//         </div>
//     </div>
//     <div class="input-field">
//         <label class="label">Email</label>
//     <div class="control">
//             <input name="email" class="checkout-form-input" type="email" placeholder="student@codepath.org" value=""/>
//         </div>
//     </div>
//     <div class="field">
//         <div class="control">
//             <label class="checkbox">
//                 <input name="termsAndConditions" type="checkbox"/>
//                     <span class="label">I agree to the <a href="#terms-and-conditions">terms and conditions</a>
//                     </span>
//             </label>
//         </div>
//     </div>
//     <p class="is-danger"></p>
//     <div class="field">
//         <div class="control">
//             <button class="button checkout-button">Checkout</button>
//         </div>
//     </div>
// </div>
//     <div class="checkout-success">
//         <h3>Checkout Info <span class="icon button">
//             <i class="material-icons md-48">fact_check</i>
//             </span>
//         </h3>
//     <div class="content">
//         <p>A confirmation email will be sent to you so that you can 
//             confirm this order. Once you have confirmed the order, it will be 
//             delivered to your dorm room.
//         </p>
//     </div>
// </div>
// </div>
        
//     </div>
//   )
// }


const ShoppingCart = (props) => {
    const shoppingCartList = props.cart;
    const setShoppingCartList = props.setCart;
    const products = props.products;
    
    // const [user, setUser] = useState("");
    // const [email, setEmail] = useState("");
    const [submittedData, setSubmittedData] = useState(false);
    const [showReceipt, setShowReceipt] = useState(false);

  
    const taxes = "7%";
    console.log(props.cart)
  
    // let purchasedItems = [];
    let subtotal = 0;
    // subtotal.toFixed(2);
  
    // shoppingCartList.forEach((item) => {
    //   products?.forEach((product) => {
    //     if (item.id === product.id) {
    //         console.log("ksjdfhbsdhbj")
    //       purchasedItems.push({
    //         productItem: product,
    //         productQuantity: item.quantity,
    //       });
    //     }
    //   });
    // });

  
    props.cart.forEach((purchaseItem) => {
      subtotal +=
        purchaseItem.quantity * purchaseItem.price;
    });
  
    function handleSubmit (event) {
      event.preventDefault();
        console.log("yoooo")
     
  
      setSubmittedData(true);

    //   const handleSubmit = (formData) => {
    //     setSubmittedData(formData);
    //     setShowReceipt(true); // Set showReceipt to true when form is submitted
    //   };
      
    };



  
    // console.log(purchasedItems)
    return (
      <div className="sidebaritems">
        <div className="shoppingcartTable">

            {props.cart?.length === 0 ? (
                <div className="shoppingTitle">
                    Shopping Cart
                    <p>No items added to cart yet. Start shopping now!</p>
                </div>
            ) : (
                <>
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
              <p>
                A confirmation email will be sent to you so that you can
                confirm this order. Once you have confirmed the order, it will
                be delivered to your dorm room.
              </p>
              <p>
                Showing receipt for {props.user} available at {props.email}:
              </p>
              <ul>
                {props.cart.map((purchaseItem, rowIndex) => (
                  <li key={rowIndex}>
                    {purchaseItem.quantity} total{" "}
                    {purchaseItem.name} at a cost of $
                    {(
                      purchaseItem.quantity *
                      purchaseItem.price
                    ).toFixed(2)}{" "}
                    for a total cost of $
                    {(
                      purchaseItem.quantity *
                      purchaseItem.price
                    ).toFixed(2)}
                  </li>
                ))}
                <li>
                  Before taxes, the subtotal was {subtotal.toFixed(2)}
                </li>
                <li>
                  After taxes and fees were applied, the total comes out to $
                  {(subtotal * 1.07).toFixed(2)}
                </li>
              </ul>
            </div>
            </>) : (
            <p></p>
          )}
        </div>
      </div>
      </div>
    );
  };

export default ShoppingCart;