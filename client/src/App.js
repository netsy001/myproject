import React, {useState} from 'react';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [token, setToken] = useState();

if(!token) {
  return <Login setToken ={setToken} />
  // return <Nav/>
}

  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      {/* <Route exact path="/register" component={Register} /> */}
        <Route path="/dashboard"><Dashboard/></Route>
        <Route path="/preferences"><Preferences/></Route>
        {/* <Route path="/login"><Login/></Route> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
