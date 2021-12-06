import React from 'react'
import FiltProd from './components/FiltProd/FiltProd'
import Tags from './components/Tags/Tags'
import CartContainer from '../../containers/CartContainer'

export default function Catalog({product, onAddCart}) {
    return (
        <div>
            <CartContainer/>
            <hr className="offset-lg" />
            <Tags/>
            <FiltProd product={product} onAddCart={onAddCart}></FiltProd>
            <br /><br />
        </div>
    )
}
