import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ username, onLogout }) {

  function handleLogout() {
    fetch('/logout', {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <div className="NavBar">
        <Link className="NavBarLink" to="/">Forum</Link>
        <Link className="NavBarLink" to="/profile">Profile</Link>
        <Link className="NavBarLink" to="/login">Login</Link>
        <Link className="NavBarLink" to="/signup">Signup</Link>
        <span>Welcome, {username}</span>
        <button onClick={handleLogout}>Log-out</button>
    </div>
  )
}

export default NavBar