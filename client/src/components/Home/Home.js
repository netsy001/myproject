import React from 'react'
import logo from './logo.jpg';
import './Home.css';

function Home() {
    return (
        <div>
            <img src= {logo}/>
        <h1 className="events">Welcome to Telugu Association Events</h1>
        </div>
    )
}

export default Home;