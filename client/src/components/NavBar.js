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
        <span>Welcome,</span>
        <Link className="NavBarLink" to="/profile">{username}</Link>
        <button onClick={handleLogout}>Log-out</button>
    </div>
  )
}

export default NavBar