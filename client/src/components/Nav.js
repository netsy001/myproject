import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';

export default function Nav() {
    return (
        <div>
            <ReactBootStrap.Navbar bg="dark" variant="dark">
                <ReactBootStrap.Nav className="mr-auto">
                    <ReactBootStrap.Nav.Link href="#home"><strong>Telugu Association</strong></ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#Event"><strong>Create Event</strong></ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#Login"><strong>Login</strong></ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#Register"><strong>Register</strong></ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Form>
                    <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <ReactBootStrap.Button className="margin" >Search</ReactBootStrap.Button>
                </ReactBootStrap.Form>
            </ReactBootStrap.Navbar>
        </div>
    )
}
