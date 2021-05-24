import React, { useState } from 'react'
import './Login.css';
import propTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from "react-facebook-login";

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

const Login = props => {
    console.log(props);
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async event => {
        event.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        props.setToken(token);
    }
    const responseGoogle = (response) => {
        console.log(response);
        props.setToken("hi");
    }
    const responseFacebook = (response) => {
        console.log(response);
        props.setToken(response.accessToken);
    }
    return (
        <div className="jumbotron jumbotron-fluid login">
            <div className="container">
                <h3>Please Login</h3>
                <form onSubmit={handleSubmit}>
                    <label> Username: <input type="text" onChange={e => setUserName(e.target.value)} /> </label>
                    <br></br>
                    <label> Password:  <input type="password" onChange={e => setPassword(e.target.value)} /> </label>
                    <br></br>
                    <button className="login" type="submit">Submit</button>
                </form>
            
                    <GoogleLogin className="Google-login"
                        clientId="563107909711-f2nnqsrvbhvpbk53bhvfpr7if9fek34m.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                <br></br>
                <FacebookLogin className="facebook-login"
                    appId="3008464906143006"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    cssClass="my-facebook-button-class"
                    icon="fa-facebook"
                />
            </div>
        </div>
    )
}

export default Login;