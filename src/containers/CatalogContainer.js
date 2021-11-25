import React from 'react'
import { connect } from 'react-redux'
import Catalog from '../pages/Catalog/Catalog'
import Item from 'pages/Catalog/components/FiltProd/Products/Items/Item/Item'
import { actAddToCart } from '../actions/index'

function CatalogContainer({product, onAddCart}) {

    
    const showProduct = (a) => {
        var result = null;
        result = product.map((prod,index) => {
            return <Item key={index} prod={prod} onAddCart={onAddCart}/>
        });
        return result;
    }
    return (
        <Catalog product={product} onAddCart={onAddCart}>
        {showProduct()}</Catalog>
        
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