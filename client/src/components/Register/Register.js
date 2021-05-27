// import React, { useState } from 'react'
// // import React, { Component } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// // import { render } from 'react-dom';
// //connecting front and backend
// import axios from 'axios';
// // import { Redirect } from "react-router-dom";

// // function Register() {
//     const Register = props => {
//     const [state, setState] = useState({
//         fullName: '',
//         username: '',
//         email: '',
//         password: ''
//     });
   

//     const handleInputChange = event => {
//         // Getting the value and name of the input which triggered the change
//         const { name, value } = event.target;

//         // Updating the input's state
//         setState({
//             [name]: value
//         });
//     };

//     const handleFormSubmit = event => {
//         // Preventing the default behavior of the form submit (which is to refresh the page)
//         event.preventDefault();

//         const registered = {
//             fullName: state.fullName,
//             username: state.username,
//             email: state.email,
//             password: state.password
//         }


//         axios.post('http://localhost:3001/app/register', registered)
//             .then(response => {
//                 console.log(response);
//                 props.history.push("/Home");

//             })
//     };

//         return (
//             <div>
//                 <div className='container'>
//                     <div className='form-div'>
//                         <form>
//                             <input type="text" name="fullName" className="form-control" placeholder="Full Name" onChange={handleInputChange} value={state.fullName} />
//                             <input type="text" name="username" className="form-control" placeholder="Username" onChange={handleInputChange} value={state.username} />
//                             <input type="email" name="email" className="form-control" placeholder="E-mail" onChange={handleInputChange} value={state.email} />
//                             <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleInputChange} value={state.password} />
//                             <button onClick={handleFormSubmit}>Submit</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         )
    
// }

// export default Register;