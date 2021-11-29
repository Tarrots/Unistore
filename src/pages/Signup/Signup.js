import React, { useState } from 'react'
import SignupForm from './component/SignupForm'

export default function Signup() {
	const [error, setError] = useState("");
	const Signup = (details) => {
		if(details.password !== details.rePassword) {
			setError("Password don't match");
			return;
		}
		console.log("Sign up ok");
	}
	return (
		<>
			<SignupForm onSignup = {Signup} error={error} />
		</>
	)
}
