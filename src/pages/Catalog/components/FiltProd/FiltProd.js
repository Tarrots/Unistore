import React from 'react'
import Filters from './Filters/Filters'
import Products from './Products/Products'
export default function FiltProd({product,children, onAddCart}) {
    return (
        <div className="container">
            <div className="row">
                {/* Filter */}
                <Filters/>
                {/* Filter */}

                {/* Products */}
                <Products product={product} onAddCart={onAddCart}>{children}</Products>
                {/* Products */}
            </div>
        </div>
    )
}
