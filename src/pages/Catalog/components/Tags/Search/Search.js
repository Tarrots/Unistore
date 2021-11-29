import React from 'react'
import Item from './Item/Item'

export default function Search() {
    return (
            
            <div className="btn-group" data-toggle="buttons">
                <Item>All products</Item>
                <Item>Business</Item>
                <Item>Home</Item>
                <Item>Mobility</Item>
                <Item>Powerfull</Item>
                <Item>Gaming</Item>
            </div>
    )
}
