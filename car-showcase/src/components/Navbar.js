import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper blue lighten-3">
        <Link to="/" className="brand-logo">CopenCars</Link>

        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar);