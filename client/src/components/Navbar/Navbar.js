import React, { useEffect, useState } from 'react'
// import Clock from 'react-live-clock';
import logo from '../images/logo.jpg';
import { Nav, Navbar, Button, Form } from 'react-bootstrap';
import '../../components/Navbar/Navbar.css';
import Avatar from 'react-avatar';
import Auth from '../Auth/Auth';
import Events from '../Events';
import Home from '../Home/Home';
import { useDispatch } from 'react-redux';
import { useHistory,  Link, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import '../Navbar/Navbar.css';
const Navbars = () => {
    // const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user);

    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/');
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);




    return (
        <Navbar className="nav-style" position="static" expand="lg" bg="light">
            <div className="left-buttons">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Button type="primary" href='/'  onClick={Home}>Telugu Association</Button> &nbsp; &nbsp;
            <Button type="primary" href='/events' onClick={Events}>Create Event</Button> &nbsp;
            </div>
            <div className="right-buttons">
                <Nav>
                    {user ? (
                        <Form inline className="profile">
                            <Avatar className="avatar" size="40" round={true} alt={user.result.name} src={user.result.imageUrl} alt={user.result.name.charAt(0)} />
                            <span className="username"> {user.result.name.toUpperCase()} </span>
                            <Button className="logout" variant="danger" onClick={logout} >Logout</Button>

                        </Form>
                    ) : (
                        <Link to="/auth">
                        <Button type="primary" >Sign In</Button> </Link>
                    )}
                </Nav>
            </div>
        </Navbar>
    )
}

export default Navbars
