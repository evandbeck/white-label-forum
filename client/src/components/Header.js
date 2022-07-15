import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <Link className="HeaderLogo" to="/forum"><h1>/white-label-forum</h1></Link>
    </div>
  )
}

export default Header