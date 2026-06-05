import { useParams, Link } from 'react-router-dom'
import { MenuItemList } from '../utils/MenuItemList'
import MenuItemCard from './MenuItemCard'
import { useEffect } from 'react'

import '../styles/MenuItemPage.css'
import '../styles/ItemNotFound.css'

function MenuItemPage() {
    const { slug } = useParams()
    const menuItem = MenuItemList.find((i) => i.slug === slug)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug])

    if (!menuItem) {
        return <div className='item-not-found'>
            <h2>Item Not Found!</h2>
            <p>Please return to the menu page and try again.</p>
            <button type='button'><a href="/menu">Back to Menu</a></button>
        </div>
    }

    return (
        <div className='menu-item-page'>
            <div className='left-side' style={{ backgroundImage: `url(${menuItem.image})` }}></div>
                <div className='right-side'>
                <h1>{menuItem.name}</h1>
                <p>{menuItem.description || "No description available."}</p>
                <p><strong>Price:</strong> ${menuItem.price}</p>

                <form action='/create-checkout-session' method='POST'>
                    <button type='submit' name='priceId' value={menuItem.priceId} >ORDER</button>
                </form>

                <h2 className='related-title'>Other Dishes</h2>

                <div className='related-scroll-list'>
                    {MenuItemList.filter((i) => i.slug !== slug).map((menuItem) => (
                        <Link to={`/menu/${menuItem.slug}`} key={menuItem.slug} className='related-card'>
                            <img src={menuItem.image} alt={MenuItemCard.name}/>
                            <h4>{menuItem.name}</h4>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MenuItemPage