import React from 'react'
import Item from './Item/Item'

export default function Sort() {
    return (
        <div className="btn-group pull-right">
            <button type="button" className="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="ion-arrow-down-b" /> Sorting by name
            </button>
            <ul className="dropdown-menu">
            <Item>Name [A-Z]</Item>
            <Item>Name [Z-A]</Item>
            <Item>Price [Low-High]</Item>
            <Item>Price [High-Low]</Item>
            </ul>
        </div>
    )
}
