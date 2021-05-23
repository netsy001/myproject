import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';

export default function Nav() {
    return (
        <div>
            
            <ReactBootStrap.Navbar bg="dark" variant="dark">
                <ReactBootStrap.Nav className="mr-auto">
                    <ReactBootStrap.Nav.Link href="/home"><strong>Telugu Association</strong></ReactBootStrap.Nav.Link> 
                    <ReactBootStrap.Nav.Link href="/event"><strong>Create Event</strong></ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="/login"><strong>Logout</strong></ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="/register"><strong>Register</strong></ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Form className = "nav-form">
                    <ReactBootStrap.FormControl type="text" placeholder="Search" className="input mr-sm-2" />
                    <ReactBootStrap.Button>Search</ReactBootStrap.Button>
                </ReactBootStrap.Form>
            </ReactBootStrap.Navbar>
        </div>
    )
}
