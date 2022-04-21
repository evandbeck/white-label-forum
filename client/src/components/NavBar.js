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
          <ul>
            <li><span>Welcome, </span><Link to="/myprofile">{username}</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </ul>
    </div>
  )
}

export default NavBar