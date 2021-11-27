import React from 'react'
import Clear from './Clear/Clear'
import Open from './Open/Open'
import PropTypes from 'prop-types'  

Title.propType = {
    children: PropTypes.string.isRequired,
};

export default function Title({children}) {
    return (
        <div className="title">
            <Open/>
            <Clear/>
            <h1 className="h4">{children}</h1>
        </div>
    )
}
