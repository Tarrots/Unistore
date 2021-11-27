import React from 'react'
import PropTypes from 'prop-types' 

Item.propType = {
    children: PropTypes.string.isRequired,
};

export default function Item({children}) {
    return (
        <li ><a href={this}>{children}</a></li>
    )
}
