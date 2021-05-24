// import React, { useState } from 'react'
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import { render } from 'react-dom';
//connecting front and backend
import axios from 'axios';

// function Register() {
//     const [Register, setRegister] = useState(

//     );
//     return (

//     )
// }

class Register extends Component {
    state = {
        fullName: '',
        username: '',
        email: '',
        password: ''
        // DOB:''
    }


    // changeFullName(event) {
    //     this.setState({
    //         fullName: event.target.value
    //     });
    // }
    // changeUserName(event){
    //     this.setState({
    //         username: event.target.value
    //     })
    // }
    // changeEmail(event){
    //     this.setState({
    //         email: event.target.value
    //     })
    // }
    // changePassword(event){
    //     this.setState({
    //         password: event.target.value
    //     })
    // }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        const registered = {
            fullName: this.state.fullName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Hello ${this.state.fullName} `);
        this.setState({
            fullName: "",
            username: "",
            email: "",
            password: ""
        });


        axios.post('http://localhost:3001/app/register', registered)
        .then(response => console.log(response.data))
        
    };

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form>
                            <input type="text" name="fullName" className="form-control" placeholder="Full Name" onChange={this.handleInputChange} value={this.state.fullName} />
                            <input type="text" name="username" className="form-control" placeholder="Username" onChange={this.handleInputChange} value={this.state.username} />
                            <input type="email" name="email" className="form-control" placeholder="E-mail" onChange={this.handleInputChange} value={this.state.email} />
                            <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.handleInputChange} value={this.state.password} />
                            <button onClick={this.handleFormSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;