import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h3 className="logo">Math Magicians</h3>
      <ul className="nav-links">
        <li>
          <Link className="white" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="white" to="/calculator">
            calculator
          </Link>
        </li>
        <li>
          <Link className="white" to="/quote">
            quote
          </Link>
        </li>
        {/* <li>Home</li>
        <li>calculator</li>
        <li>quote</li> */}
      </ul>
    </nav>
  );
}

export default Nav;
