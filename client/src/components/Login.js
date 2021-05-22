import React from 'react'
import './Login.css';
export default function Login() {
    return (
        <div className="login">
            <h3>Please Log In</h3>
           <form>
               <label>
                   <p>Username</p>
                   <input type="text" />
               </label>
               <label>
                   <p>Password</p>
                   <input type="password" />
               </label>
               <button type="submit">Submit</button>
           </form>
        </div>
    )
}
