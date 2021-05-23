import React from 'react';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import useToken from './components/UseToken';

import Home from './components/Home';
import Events from './components/Events';
import Register from './components/Register';
// import useToken from './components/UseToken';

function App() {
  // const token = getToken();
  const {token, setToken} = useToken();

  if (!token) {
    return <Login setToken={setToken} />
    // return <Nav/>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/preferences" component={Preferences} />
        <Route path="/events" component={Events} />
      </BrowserRouter>
    </div>
  );
}

export default App;
