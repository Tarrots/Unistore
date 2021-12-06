import React from 'react'
import Filters from './Filters/Filters'
import Products from './Products/Products'
export default function FiltProd({product}) {
    return (
        <div className="container">
            <div className="row">
                {/* Filter */}
                <Filters/>
                {/* Filter */}

                {/* Products */}
                <Products product={product}/>
                {/* Products */}
            </div>
        </div>
    )
}
