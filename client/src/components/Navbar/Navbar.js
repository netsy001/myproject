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
import {useHistory} from 'react-router-dom';


const Navbars = () => {
    // const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));


    console.log(user);

    // useEffect(() => {
    //     const token = user?.token;

    //     setUser(JSON.parse(localStorage.getItem('profile')));
    // }, []);

    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () => {
        dispatch({type:'LOGOUT'});
        history.push('/');
        setUser(null);
    };

    return (
        <Navbar className="nav-style" position="static" expand="lg" bg="light">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>
            <Button type="primary" href='/' onClick={Home}>Telugu Association</Button> &nbsp; &nbsp;
            <Button type="primary" href='/events' onClick={Events}>Create Event</Button> &nbsp;
            <Nav>
                {user ? (
                    <Form inline className="profile">
                        <Avatar className="avatar" size="40" round={true} alt={user.result.name} src={user.result.imageUrl} alt={user.result.name.charAt(0)} />
                        <span className="username"> {user.result.name.toUpperCase()} </span>
                        <Button className="logout" variant="danger" onClick={logout} >Logout</Button>

                    </Form>
                ) : (
                    <Button type="primary" href='/auth' onClick={Auth}>Sign In</Button>
                )}
            </Nav>
        </Navbar>
    )
}

export default Navbars
