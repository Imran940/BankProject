import React, { useEffect } from 'react'
import "./Header.css";
import { Link } from "react-router-dom"
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from "react-router-dom";

function Header({ username, chktrans }) {
    let history = useHistory();

    const clearUser = () => {
        window.localStorage.removeItem('username');  // clearing values from the localstorage
        window.localStorage.removeItem('token');
        history.push('/login');
    }


    return (
        <>
            <div className='header'>
                <Link to='/'><AccountBalanceIcon className='bankIcon' /></Link>
                {
                    username ? (<div className='selectUser'><h3 className='user'><AccountCircleIcon />{username}</h3></div>) : (<Link to='/login' className='login'>
                        <h3>Login</h3>
                    </Link>)
                }
            </div>
            {username && (<div className='box'>
                <ul>
                    {(username !== "banker" && !chktrans) &&
                        <Link to='/transactions' className='transaction'>
                            <li>Transactions</li>
                        </Link>
                    }
                    {chktrans &&
                        <Link to='/account' className='transaction'>
                            <li>Account</li>
                        </Link>
                    }
                    <li onClick={clearUser}>Signout</li>
                </ul>
            </div>)}

        </>




    )
}

export default Header
