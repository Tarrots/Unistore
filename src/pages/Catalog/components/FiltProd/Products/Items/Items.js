import React from 'react'
import Item from "./Item/Item"

function Items({product}) {
    const showProducts = (products) => {
        var result = null
        result = products.map((prod, index) => {
            return <Item key={index} prod={prod} id={index}/>
        })
        return result
    }
    return (
        <div>
            {
               showProducts(product.data)
            }
        </div>
    )
}
export default Items;