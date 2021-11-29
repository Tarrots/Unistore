import React from 'react'
import PropTypes from 'prop-types' 

Item.propType = {
    children: PropTypes.string.isRequired,
};
export default function Item({children}) {
    return (
        <div className="checkbox-group" data-status="inactive">
            <div className="checkbox"><i className="ion-android-done" /></div>
            <div className="label" data-value={children}>{children}</div>
            <input type="checkbox" name="checkbox" defaultValue />
        </div>
    )
}
