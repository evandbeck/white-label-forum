import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [errors, setErrors] = useState([])

  function handleLogin(e) {
    //Update DB
    e.preventDefault();
      const user = {
          username: username,
          password
      };
      
    fetch('/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then(resp => resp.json())
        .then(console.log)

    setUsername("");
    setPassword("");
  }
  return (
    <div className="Login">
        <form className="loginForm" onSubmit={handleLogin}>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
            </div>
            <div>
                <label>Password:</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} size="50"></input>
            </div>
            <div>
                <button>Sign-up!</button>
            </div>
        </form>
    </div>
  )
}

export default Login