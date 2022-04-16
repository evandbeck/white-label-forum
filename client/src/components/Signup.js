import React, { useState } from 'react';

function Signup() {
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
        .then(resp => resp.json())
        .then(console.log)

    setUsername("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="Signup">
        <form className="signupForm" onSubmit={handleSignup}>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} size="50"></input>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} size="50"></input>
            </div>
            <div>
                <button>Sign-up!</button>
            </div>
        </form>
    </div>
  )
}

export default Signup