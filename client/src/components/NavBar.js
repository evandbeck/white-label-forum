import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="NavBar">
        <Link className="NavBarLink" to="/">Forum</Link>
        <Link className="NavBarLink" to="/profile">Profile</Link>
        <Link className="NavBarLink" to="/create">New Post</Link>
        <Link className="NavBarLink" to="/login">Login</Link>
        <Link className="NavBarLink" to="/signup">Signup</Link>
    </div>
  )
}

export default NavBar