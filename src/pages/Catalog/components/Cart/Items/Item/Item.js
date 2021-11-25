import React, { useState } from 'react'

function Item({prod, quantity}) {
    const [qty, setQty] = useState(quantity);
    const prices = () => {
        return qty * prod.price;
    }
    return (
        <div className="media">
            <div className="media-left">
                <a href={this}>
                    <img className="media-object" src={prod.image} alt={prod.description} />
                </a>
            </div>
            <div className="media-body">
                <h2 className="h4 media-heading">{prod.name}</h2>
                <label>{prod.category}</label>
                <p className="price">${prices()}</p>
            </div>
            <div className="controls">
                <div className="input-group">
                    <span className="input-group-btn">
                        <button className="btn btn-default btn-sm" type="button" data-action="minus" 
                        onClick={() => qty <= 0 ? 0 : setQty(qty - 1)}><i className="ion-minus-round" />
                        </button>
                    </span>
                    <input type="text" className="form-control input-sm" 
                    placeholder="Qty" value={qty} readOnly />
                    <span className="input-group-btn">
                        <button className="btn btn-default btn-sm" type="button" data-action="plus"
                        onClick={() => qty < prod.inventory ? setQty(qty + 1) : prod.inventory}>
                        <i className="ion-plus-round" /></button>
                    </span>
                </div>{/* /input-group */}
                {/* <a href="#remove"> <i className="ion-trash-b" /> Remove </a> */}
            </div>
        </div>
    )
}
export default Item;