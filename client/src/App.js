import React, {useState} from 'react';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {
  const [token, setToken] = useState();

if(!token) {
  return <Login setToken ={setToken} />
}

  return (
    <div className="App">
      <Nav/>
      <h1>Hi this is Application</h1>
      <BrowserRouter>
      <Switch>
        <Route path="/dashboard"><Dashboard/></Route>
        <Route path="/preferences"><Preferences/></Route>
        {/* <Route path="/login"><Login/></Route> */}
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
