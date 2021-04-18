import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import Header from './Header';
import { getRecords } from './functions';
import "./Account.css"

function Account() {
    let history = useHistory();
    const [records, setRecords] = useState([]);
    const username = window.localStorage.getItem('username');




    useEffect(() => {
        if (!username) {
            history.push('/login');   //it will throw the unauthorised user to the login page
        } else {
            // alert("welcome user " + username);
            getData();
        }
    }, [])

    const getData = () => {
        getRecords(username)
            .then(res => {
                setRecords(res.data)
                console.log(records);
                // console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
    // console.log(data)
    return (
        <>
            <Header username={username} />
            <div className='account'>
                {records.length > 0 && <h1 className='pastTransaction'>Your Past Transaction</h1>}
                {records.length > 0 ?
                    <table border="1px solid black">
                        <tr>
                            <th>Date</th>
                            <th>Deposit</th>
                            <th>Withdraw</th>
                            <th>Balance</th>
                        </tr>
                        {
                            records.map(e => (
                                <tr>
                                    <td>{e.Date}</td>
                                    <td>{e.Deposit}</td>
                                    <td>{e.withdrawn}</td>
                                    <td>{e.balance}</td>

                                </tr>
                            ))
                        }

                    </table> :
                    <div className='noRecords'>There is no transaction occured.</div>
                }
            </div>
        </>
    )
}

export default Account
