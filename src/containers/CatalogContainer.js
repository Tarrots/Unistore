import React from 'react'
import { connect } from 'react-redux'
import Catalog from '../pages/Catalog/Catalog'
import { actAddToCart } from '../actions/index'


function CatalogContainer({product}) {
    return (
        <Catalog product={product}/>
    )
}

const mapSateToProps = state => {
    return {
        product: state.Catalog
    }
}
const dispathCart = (dispatch, quatity) => {
    return {
        onAddCart: (id) => {
            dispatch(actAddToCart(id,1))
        }
    }
}

export default  connect(mapSateToProps,dispathCart)(CatalogContainer);