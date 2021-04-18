import axios from "axios"
const token = window.localStorage.getItem("token");
export const loginAuth = async (username, password) => {
    return await axios.post('http://localhost:8000/login', { username, password });
}

export const getRecords = async (username) => {
    return await axios.post("http://localhost:8000/getRecords", { username }, {
        headers: {
            token
        }
    })
}

export const getRecord = async () => {
    return await axios.get("http://localhost:8000/getRecord", {
        headers: {
            token
        }
    })
}

export const getDeposit = async (date, username, amount) => {
    return await axios.post("http://localhost:8000/deposit", { date, username, amount }, {
        headers: {
            username,
            token
        }
    })
}

export const getWithdraw = async (date, username, amount) => {
    return await axios.post("http://localhost:8000/withdraw", { date, username, amount }, {
        headers: {
            username,
            token
        }
    })
}