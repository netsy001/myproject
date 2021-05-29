import React from 'react'
// import Clock from 'react-live-clock';
import logo from '../images/logo.jpg';
import { Nav, Navbar, Button } from 'react-bootstrap';
import '../../components/Navbar/Navbar.css';
import Avatar from 'react-avatar';
import Auth from '../Auth/Auth';
import Events from '../Events';
import Home from '../Home/Home';




const Navbars = () => {
    // const location = useLocation();

    const user = null;


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
                    <div className="profile">
                        <Avatar className="avatar" alt={user.result.name} src={user.result.imageUrl} alt={user.result.name.charAt(0)} />
                        <h6 className="username"> {user.result.name} </h6>
                        <Button className="logout" variant="danger">Logout</Button>
                    </div>
                ) : (
                    <Button type="primary" href='/auth' onClick={Auth}>Sign In</Button>
                )}
            </Nav>
        </Navbar>
    )
}

export default Navbars
