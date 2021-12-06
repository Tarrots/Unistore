/* eslint-disable no-unused-vars */
import testApi from 'api/testApi';
import React, {useEffect, useState} from 'react'
import LoginForm from './component/LoginForm'

export default function Login() {

    const admin = {
        email: "admin@admin.com",
        password: "123456"
    }
    
    const [user, setUser] = useState({email: "", password: ""});
    const [error, setError] = useState("");
    
    
    const Login = async (details) => {
        if(details.email === admin.email && details.password === admin.password) {
            console.log("Login ok");
        } else {
            console.log("details don't match");
        }
    }

    const Logout = () => {
        console.log("Logout");
    }
    return (
        <>
            <LoginForm onLogin={Login} error={error} />
        </>
    )
}
