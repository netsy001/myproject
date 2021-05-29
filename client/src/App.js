// import React, { useState } from 'react';
// import Nav from './components/Nav';
// import Dashboard from './components/Dashboard';
// import './App.css';
// import Login from './components/Login/Login';
// import useToken from './components/UseToken';
// import Home from './components/Home/Home';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Events from './components/Events';
// import Register from './components/Register/Register';


// // import logo from './logo.png';

// // import useToken from './components/UseToken';

// function App() {
//   // const token1 = useToken();
//   // const [token, setToken] = useState(token1 | null );

//   // if (!token) {
//   //   return <Login setToken={setToken} />
//   //   // return <Nav/>
//   // }

//   return (
//     <Router>
//       <div className="App">
//         <Nav />
//         <Route path="/" component={Home} />
//         <Route path="/login" component={Login} />
//         <Route path="/register" component={Register} />
//         <Route path="/dashboard" component={Dashboard} />
//         <Route path="/events" component={Events} />
//       </div>
//     </Router>
//   );
// }

// export default App;

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
