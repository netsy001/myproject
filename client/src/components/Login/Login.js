import React, { useState } from 'react'
import './Login.css';
import propTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';
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
    const responseGoogle = (response) => {
        console.log(response);
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
                <button className="Google-login"> 
                <GoogleLogin
                    clientId="563107909711-f2nnqsrvbhvpbk53bhvfpr7if9fek34m.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                </button>
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: propTypes.func.isRequired
}