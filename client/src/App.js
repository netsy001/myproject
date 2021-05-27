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

import React, { useEffect } from 'react'
import './App.css';
import logo from "./components/images/logo.jpg";
import { Navbar, Container, Row } from 'react-bootstrap';
//importing hooks useDispatch to dispatch an action
import { useSelector, useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';

import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';


function App() {

  //Defining the dispatch
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);



  return (
    <>
      <Container fluid >
        <Navbar position="static" expand="lg" bg="light">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Navbar.Brand className="project-title" href="#home">Telugu Association</Navbar.Brand>
        </Navbar>
      </Container>

      <Container>
        <Row xs={12} sm={7} >
          <Posts />
        </Row>
        <Row xs={12} sm={4}>
          <Form />
        </Row>
      </Container>

    </>
  );
}

export default App;
