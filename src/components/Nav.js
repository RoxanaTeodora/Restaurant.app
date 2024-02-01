import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <ul className="List">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#">About</Link>
          </li>
          <li>
            <Link to="/#">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
