import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import WhiteLabelForum from './WhiteLabelForum';


function Login({ loginToSignup, onLogin }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory();

  function handleLogin(e) {
    //Update DB
    e.preventDefault();
      const user = {
          username: username,
          password
      };
    fetch('/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then(resp => resp.json())
        .then(console.log)
        .then((user) => onLogin(user));
        
    history.push("/")
    setUsername("");
    setPassword("");
  }

  return (
    <div>
        <WhiteLabelForum/>
        <div className="Login">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div className="txt_field">
                    <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <span></span>
                    <label>Username</label>
                </div>
                <div className="txt_field">
                    <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <span></span>
                    <label>Password</label>
                </div>
                <div>
                    <button>Login</button>
                </div>
                <div className="signup_link">
                    Not a member? <Link className="to_signup" onClick={loginToSignup} to="/signup">Signup</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login