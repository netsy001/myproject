import React, { useState } from 'react'
// import * as ReactBootStrap from 'react-bootstrap';
// import Login from './Login/Login';
import { Link, useLocation } from "react-router-dom";


function Nav() {
    // const [token, setToken] = useState(null);
    // const onLogout = e => {
    //     e.preventDefault();
    //     setToken(null)
    // }
    // const onRegister = e => {
    //     e.preventDefault();
    //     props.history.push("/Register");
    // }
    //     if (!token)
    //         return (
    //             <Login name="gopi" setToken={setToken} />
    //         )
    const location = useLocation();

    return (
        <div>
            <ul className="nav nav-tabs Mr-auto" bg="dark" variant="dark" >
                <li className="nav-item">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}> Telugu Association </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/dasboard"
                        className={location.pathname === "/dasboard" ? "nav-link active" : "nav-link"}> Dashboard </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/events"
                        className={location.pathname === "/events" ? "nav-link active" : "nav-link"}> Create Events </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/login"
                        className={location.pathname === "/login" ? "nav-link active" : "nav-link"} > Login </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/register"
                        className={location.pathname === "/register" ? "nav-link active" : "nav-link"}> Register </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;