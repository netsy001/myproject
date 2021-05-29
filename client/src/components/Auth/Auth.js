import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap';



const Auth = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    }
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                {
                    isSignup && (
                        <>
                            <div className="form-group">
                                <label>First name</label>
                                <input name="firstName" type="text" className="form-control" handleChange={handleChange} placeholder="First name" required />
                            </div>

                            <div className="form-group">
                                <label>Last name</label>
                                <input name="lastName" type="text" className="form-control" handleChange={handleChange} placeholder="Last name" required />
                            </div>
                        </>
                    )}

                <div className="form-group">
                    <label>Email address</label>
                    <input name="email" type="email" className="form-control" handleChange={handleChange} placeholder="Enter email" required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input name="password" type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} className="form-control" handleChange={handleChange} placeholder="Enter password" required />
                </div>

                {isSignup && <div className="form-group">
                    <label>Repeat Password</label>
                    <input name="confirmPassword" type="Password" className="form-control" handleChange={handleChange} placeholder="Repeat password" required />
                </div>}
                <br></br>
                <button type="submit" className="btn btn-primary btn-block">{isSignup ? 'Sign Up' : 'Sign In'}</button>

                <br></br>
                <br></br>
                <div>
                    <Button onClick={switchMode}> {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"} </Button>
                </div>
            </form>
        </Container>
    )
}

export default Auth
