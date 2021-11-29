import React from 'react'
import Item from './Item/Item'
 function Items({cart, product}) {
    const showCart = () => {
        var result = null;
        if(cart.quantity <= 0)
            return <h4>CART EMTY!</h4>;
        result = cart.product.map((prod,index) => {
            return <Item key={index} prod={product[prod.id]} quantity={prod.quantity}/>
        });
        return result;
    }
    return (
        <div className="content">{showCart()}</div>
    )
}
export default Items;
