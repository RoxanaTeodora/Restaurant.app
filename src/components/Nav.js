import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <ul className="container">
          <li className="list">
            <Link to="/">Home</Link>
          </li>
          <li className="list">
            <Link to="/#">About</Link>
          </li>
          <li className="list">
            <Link to="/#">Contact</Link>
          </li>
          <li className="list-admin">
            <Link to="/#">Admin</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
