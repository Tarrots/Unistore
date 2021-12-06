import React from 'react'
import Items from './Items/Items'
import Pagination from './Pagination/Pagination'

export default function Products({product}) {
    return (
        <div className="col-sm-9 products">
            <div className="row">
                <Items product={product}/>
            </div>
            <Pagination/>
        </div>
    )
}
