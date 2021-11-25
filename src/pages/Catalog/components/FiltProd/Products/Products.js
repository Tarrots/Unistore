import React from 'react'
import Items from './Items/Items'
import Pagination from './Pagination/Pagination'

export default function Products({product,children, onAddCart}) {
    return (
        <div className="col-sm-9 products">
            <div className="row">
                <Items product={product} onAddCart={onAddCart}>{children}</Items>
            </div>
            <Pagination/>
        </div>
    )
}
