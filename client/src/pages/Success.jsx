import React from 'react'
import '../styles/Success.css'

function Success() {
  return (
    <div className="success">
      <h2>Order Placed!</h2>
      <p>Your order details have been sent to your email.</p>
      <button type='button'><a href="/">Back to Home</a></button>
    </div>
  );
}

export default Success;