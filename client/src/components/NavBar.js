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
        <nav>
          <ul>
            <li><Link to="/">Forum</Link></li>
            <li><span>Welcome, </span><Link to="/user/:user_id">{username}</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </ul>
        </nav>
    </div>
  )
}

export default NavBar