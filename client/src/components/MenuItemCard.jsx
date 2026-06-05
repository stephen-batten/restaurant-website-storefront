import React from 'react';

function MenuItemCard({image, name, price }) {
  return (
    <div className='menu-item'>
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h1> {name} </h1>
        <p> ${price} </p>
    </div>
  )
}

export default MenuItemCard