import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import GoogleButton from 'react-google-button';
// import * as Icon from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import {useHistory } from 'react-router-dom';

const Auth = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLasttName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const handleSubmit = () => {

    }

    // const handleChange = () => {

    // }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    }

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const googleSuccess = async (response) => {
        console.log(response);
        //using optional chaining operator for not getting error
        const result = response?.profileObj;
        const token = response?.tokenId;

        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            history.push('/');
            
        } catch (error) {
            console.log(error);
        }
    };

    const googleFailure = (error) => {
        console.log(error);
        console.log('Unsuccessfull');
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                {
                    isSignup && (
                        <>
                            <div className="form-group">
                                <label>First name</label>
                                <input name="firstName" type="text" className="form-control" onChange={e => setFirstName(e.target.value)} placeholder="First name" required />
                            </div>

                            <div className="form-group">
                                <label>Last name</label>
                                <input name="lastName" type="text" className="form-control" onChange={e => setLasttName(e.target.value)} placeholder="Last name" required />
                            </div>
                        </>
                    )}

                <div className="form-group">
                    <label>Email address</label>
                    <input name="email" type="email" className="form-control" onChange={e => setEmail(e.target.value)} placeholder="Enter email" required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input name="password" type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} className="form-control" onChange={e => setPassword(e.target.value)} placeholder="Enter password" required />
                </div>

                {isSignup && <div className="form-group">
                    <label>Repeat Password</label>
                    <input name="confirmPassword" type="Password" className="form-control" onChange={e => setConfirmPassword(e.target.value)} placeholder="Repeat password" required />
                </div>}
                <br></br>
                <button type="submit" className="btn btn-primary btn-block">{isSignup ? 'Sign Up' : 'Sign In'}</button>

                <br></br>
                <br></br>

                <GoogleLogin
                    clientId='563107909711-f2nnqsrvbhvpbk53bhvfpr7if9fek34m.apps.googleusercontent.com'
                    render={(renderProps) => (
                        <GoogleButton
                            label='Sign in with Google'
                            onClick={renderProps.onClick} disabled={renderProps.disabled}
                        />
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy='single_host_origin'
                />


                <br></br>
                <div>
                    <Button onClick={switchMode}> {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"} </Button>
                </div>
            </form>
        </Container>
    )
}

export default Auth
