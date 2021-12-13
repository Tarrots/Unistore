import React from 'react'
import './Alert.css'

export default function Alert() {
	return (
		<div id="alert" className="alert">
			<span className="closebtn" onClick={(e) => e.target.parentNode.style.display = 'none'}>&times;</span> 
			<strong>Success</strong> Product added to your cart.
		</div>
	)
}
