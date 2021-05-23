import React, { useState } from 'react'
import './Login.css';
import propTypes from 'prop-types';

// var url = 'http://localhost:3001/login';
async function loginUser(Credentials) {
    return fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async event => {
        event.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <div className="jumbotron jumbotron-fluid login">
            <div className="container">
                <h3>Please Log In</h3>
                <form onSubmit={handleSubmit}>
                    <label> Username: <input type="text" onChange={e => setUserName(e.target.value)} /> </label>
                    <br></br>
                    <label> Password:  <input type="password" onChange={e => setPassword(e.target.value)} /> </label>
                    <br></br>
                    <button className="login" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: propTypes.func.isRequired
}