

import React from 'react'
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Clock from './components/Clock/Clock';
import Auth from './components/Auth/Auth.js';
import Events from './components/Events';

function App() {

  return (
    <BrowserRouter>
      <Container fluid >
        <Navbar />
        <Clock />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/events' exact component = {Events} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
