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
            <Link to="/menu">Menu</Link>
          </li>
          <li className="list">
            <Link to="/reservation">Reservation</Link>
          </li>
          <li className="list">
            <Link to="/order">Order online</Link>
          </li>
          {/* <li className="list-admin">
            <Link to="/admin">Admin</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
