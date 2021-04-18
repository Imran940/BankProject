import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useHistory } from "react-router-dom"
import { getRecord, getRecords } from './functions';
import "./Banker.css"

function Banker() {
    let history = useHistory();
    const username = window.localStorage.getItem("username");
    const [data, setData] = useState([]);
    const [fulldata, setFulldata] = useState([]);
    useEffect(() => {
        if (!username) {
            history.push('/login');
        } else {
            getRecord()                     //get the list of users and their balance
                .then(res => {
                    setData(res.data);      //set the data in the data state
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [])

    const getFullUserRecords = (user) => {     //get the full records of selected user

        getRecords(user)
            .then(res => {
                setFulldata(res.data);         //set the data in fulldata state
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <Header username={username} />
            <h1 className='welc'>Welcome to Banker Page</h1>
            {/**List of user's table */}
            <table className='tab' border="1px solid black">
                <tr>
                    <th>Customer Name</th>
                    <th>Balance</th>
                    <th>Action</th>
                </tr>
                {data.map(d =>
                    <tr>
                        <td>{d.Customer}</td>
                        <td>{d.Cust_bal}</td>
                        <button className='clickBut' onClick={() => getFullUserRecords(d.Customer)}>Click</button>
                    </tr>
                )}
            </table>

            <br /><br /><br /><br /><br /><br />
            {/**Full records of select user's table */}

            {
                fulldata.length > 0 &&
                <>
                    <hr />
                    <h2>Full Records is given below</h2>
                    <table border="1px solid black">
                        <tr>
                            <th>Date</th>
                            <th>Customer Name</th>
                            <th>Deposit</th>
                            <th>Withdraw</th>
                            <th>balance</th>
                        </tr>
                        {fulldata.map(d =>
                            <tr>
                                <td>{d.Date}</td>
                                <td>{d.CustName}</td>
                                <td>{d.Deposit}</td>
                                <td>{d.withdrawn}</td>
                                <td>{d.balance}</td>
                            </tr>
                        )}
                    </table>
                </>

            }
        </div >
    )
}

export default Banker
