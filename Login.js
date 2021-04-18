import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import axios from "axios"

import "./Login.css"
import Header from './Header';
import { loginAuth } from './functions';
function Login() {
    const [username, setUsername] = useState("");
    const [Loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        loginAuth(username, password)               //making login authentication with the database
            .then(res => {
                setLoading(false);
                window.localStorage.setItem('token', res.data);    // storing the token in local storage
                if (res.data.length > 0) {
                    window.localStorage.setItem('username', username); //set the username in the localstorage followed by the key username
                    if (username == "banker") {
                        history.push('/banker')
                    } else {
                        history.push(`/account`);
                    }

                } else {
                    alert("Invalid Username or Password");
                }


            }).catch(err => {
                setLoading(false);
                console.log(err);
            })

    }
    return (
        <>
            <Header />
            <img className='backg' src='https://www.investopedia.com/thmb/4PlSqigH20wFCn-zpWb3c-cw6Lc=/2122x0/filters:no_upscale():max_bytes(150000):strip_icc()/bank-d1852f26c54b468ebe2685f3d75b3d0c.jpg' />

            <div className='Login'>
                <h2>Welcome To Login</h2>
                {Loading && (<h3 className='load'>Loading..</h3>)}
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder="Enter your username"
                        autoComplete="off"
                        autoFocus="on"
                        onChange={e => setUsername(e.target.value)}
                        required />
                    <input type="Password"
                        placeholder="Enter your password"
                        autoComplete="off"
                        onChange={e => setPassword(e.target.value)}
                        required />
                    <button className='loginBut'>Submit</button>
                </form>
            </div>

        </>

    )
}

export default Login
