import React from 'react'
import Sort from './Sort/Sort'
import Search from './Search/Search'

export default function Tags() {
    return (
    <div className="container tags">
        <p>Search by tags</p>
        <Search/>
        <Sort/>
    </div>
    )
}
