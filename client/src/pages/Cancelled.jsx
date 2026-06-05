import React from 'react';
import '../styles/Cancelled.css'

function Cancelled() {
  return (
    <div className="cancelled">
      <h2>Order Cancelled</h2>
      <p>No payment has been made.</p>
      <button type='button'><a href="/">Back to Home</a></button>
    </div>
  );
}

export default Cancelled;
