import React from 'react'
import Item from './Item/Item'
 function Items({cart, product}) {
    const showCart = () => {
        var result = null;
        if(JSON.parse(localStorage.getItem('carts')).quantity === 0)
            return <h4>CART EMTY!</h4>;
        result = cart.product.map((prod,index) => {
            let item = JSON.parse(localStorage.getItem('catalog'))

            let carts = JSON.parse(localStorage.getItem('carts'))

            return <Item key={index} prod={item[index]} quantity={carts.product[index]}/>
        });
        return result;
    }
    return (
        <div className="content">{showCart()}</div>
    )
}
export default Items;
