import React, { useState } from 'react'
import './Login.css';
import propTypes from 'prop-types';


export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    return (
        <div className="jumbotron jumbotron-fluid login">
            <div className="container">
                <h3>Please Log In</h3>
                <form>
                    <label> Username: <input type="text" onChange = {e=> setUserName(e.target.value)}/> </label>
                    <br></br>
                    <label> Password:  <input type="password" onChange ={e =>setPassword(e.target.value)}/> </label>
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