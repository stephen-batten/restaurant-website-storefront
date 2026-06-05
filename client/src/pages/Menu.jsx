import React from 'react'
import { Link } from 'react-router'
import { MenuItemList } from '../utils/MenuItemList'
import MenuItemCard from '../components/MenuItemCard'
import '../styles/Menu.css'

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menu-title'>Menu</h1>
        <div className='menu-list'>
          {MenuItemList.map((menuItem) => {
            return (
              <Link to={`/menu/${menuItem.slug}`} key={menuItem.slug}>
                <MenuItemCard
                  image={menuItem.image} 
                  name={menuItem.name} 
                  price={menuItem.price}
                />
              </Link>  
            )
          })}
        </div>
    </div>
  )
}

export default Menu;