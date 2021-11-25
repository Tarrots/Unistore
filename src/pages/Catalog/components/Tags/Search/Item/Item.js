import React from 'react'
import PropTypes from 'prop-types' 

Item.propType = {
    children: PropTypes.string.isRequired,
};

export default function Item({children}) {
    return (
        <label className="btn btn-default btn-xs">
            <input type="radio" name="options" id="option2" />{children}
        </label>
    )
}
