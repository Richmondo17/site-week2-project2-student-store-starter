import React from 'react'

const CheckoutInfo = (isOpen, setIsOpen) => {
  return (
    <div>
        <h3>Checkout Info</h3>
        {isOpen && (
         <p>
            A confirmation email will be sent to you so that you can confirm this order. 
            Once you have confirmed the order, it will be delivered to your dorm room.
        </p>
        )}

        {!isOpen && (
            <p></p>
        )}
            
    </div>

  )
}

export default CheckoutInfo