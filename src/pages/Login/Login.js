/* eslint-disable no-unused-vars */
import authApi from 'api/authApi';
import React, {useEffect, useState} from 'react'
import LoginForm from './component/LoginForm'
import axios from 'axios';

export default function Login() {
    
    const [user, setUser] = useState({username: "", password: ""});
    const [error, setError] = useState("");
    
    
    const Login = async (details) => {

        console.log(details);
        const response = await authApi.signin(details);
        if(parseInt(response.status) === 401) {
            setError("Username or password is incorrect");
        }
        else { 
            localStorage.setItem('token',response.accessToken);
            localStorage.setItem('name',response.name);

            window.location.href="/catalog";
            console.log(localStorage.getItem('token'));
        }
        
        
    }

    const Logout = () => {
        console.log("Logout");
    }
    return (
        <>
            <LoginForm onLogin={Login} error={error} setError={setError} />
        </>
    )
}
