import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useHistory } from "react-router-dom";
import "./Transactions.css";
import { getDeposit, getWithdraw } from './functions'

function Transactions() {
    const username = window.localStorage.getItem("username");
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const date = new Date().toLocaleDateString();
    const trans = "tansaction";
    let balance = 0;
    useEffect(() => {
        if (!username) {
            history.push('/login');
        }
    }, [])

    const deposit = (e) => {
        setLoading(true);
        e.preventDefault();
        if (!amount) {
            alert("please enter the amount!..");
            setLoading(false);
        }
        else {
            if (amount > 100000) {
                alert("You cannot deposit more than a lakh in one time");
            }
            else {
                getDeposit(date, username, amount)
                    .then(res => {
                        alert(`Your ${amount} amount is deposited successfully :) `);
                        setLoading(false);
                        setAmount("");
                    })
                    .catch(err => {
                        console.log(err);
                    })

            }
        }

    }

    const withdraw = (e) => {
        e.preventDefault();
        setLoading(true);
        if (!amount) {
            alert("please enter the amount!..");
            setLoading(false);
        } else {

            getWithdraw(date, username, amount)
                .then(res => {
                    console.log(res)
                    alert(`Your ${amount} amount is withdrawn successfully :) `);
                    setLoading(false);
                    setAmount("");
                })
                .catch(error => {
                    if (error.response.status === 400) {
                        alert(error.response.data);
                        setLoading(false)
                    }
                    console.log(error);
                })
        }
    }

    return (
        <>
            <Header chktrans={trans} username={username} />
            <div className='transactions'>
                <h2 className='welcome'>Welcome to Transaction Page</h2>
                <form>
                    {loading && <h3 className='loading'>Loading...</h3>}
                    <input type='number'
                        autoComplete='off'
                        autoFocus='on'
                        pattern="[0-9]{10}"
                        onChange={e => setAmount(e.target.value)}
                        placeholder="Enter your amount"
                        value={amount}
                        required
                        className='inputAmt'
                    />
                    <button onClick={deposit} className='depositBut'>Deposit</button>
                    <button onClick={withdraw} className='withdrawBut'>Withdraw</button>
                </form>
            </div>
        </>
    )
}

export default Transactions
