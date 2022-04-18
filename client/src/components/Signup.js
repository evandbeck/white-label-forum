import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup({ setCurrentUser, loginToSignup }) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSignup(e) {
    //Update DB
    e.preventDefault();
      const newUser = {
          username: username,
          email: email,
          password
      };
      
    fetch('/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
    })
    .then(resp => {
        if(resp.ok){
            resp.json()
            .then(setCurrentUser)
        }
    });

    setUsername("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="Signup">
        <h1>Signup</h1>
        <form onSubmit={handleSignup}>
            <div className="txt_field">
                <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)}/>
                <span></span>
                <label>Username</label>
            </div>
            <div className="txt_field">
                <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <span></span>
                <label>Email</label>
            </div>
            <div className="txt_field">
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <span></span>
                <label>Password</label>
            </div>
            <div>
                <button>Signup</button>
            </div>
            <div className="signup_link">
                Already a member? <Link className="to_signup" onClick={loginToSignup} to="/">Login</Link>
            </div>
        </form>
    </div>
  )
}

export default Signup