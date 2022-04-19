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
      <div className="NavBarContainer">
        <nav>
          <ul>
            <li><Link to="/">Forum</Link></li>
            <li><span>Welcome, </span><Link to="/profile">{username}</Link></li>
            <li><button onClick={handleLogout}>Log-out</button></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavBar