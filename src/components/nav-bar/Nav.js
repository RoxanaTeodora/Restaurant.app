import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <div
          style={{
            backgroundColor: "#262626",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "3rem",
          }}
        >
          <ul>
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
              <Link to="/recipe">Recipe</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
