import React, { useState } from 'react'
import Items from './Items/Items'
import Checkout from './Checkout/Checkout'

function Cart({cart, product}) {
    const [isActive, setIsActive] = useState(false);
    const [quantity, setQuantity] = useState(JSON.parse(localStorage.getItem('carts')).quantity);
    function showCart() {
        setIsActive(!isActive)
        setQuantity(JSON.parse(localStorage.getItem('carts')).quantity)
    }
    return (
        <div className="cart" data-toggle={isActive === true ? "active" : "inactive"}>
            <div className="label" onClick={() => showCart()}>
                <i className="ion-bag" /> {quantity}
            </div>
            <div className="overlay" />
            <div className="window">
                <div className="title">
                    <button type="button" className="close" onClick={() => showCart()}><i className="ion-android-close" /></button>
                    <h1 className="h3 info">Shopping cart</h1>
                </div>
                <Items cart={cart} product={product.data}/>
                <Checkout cart={cart} product={product}/>
            </div>
        </div>

    )
}
export default Cart;
