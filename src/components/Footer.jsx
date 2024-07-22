import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer class="relative  bg-[#424E49] px-4 pt-20">
        <nav
          aria-label="Footer Navigation"
          class="mx-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left"
        >
          <Link to="/" className="list">
            Home
          </Link>
          <li className="list">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="list">
            <Link to="/reservation">Reservation</Link>
          </li>
          <li className="list">
            <Link to="/recipe">Recipe</Link>
          </li>
        </nav>
        <p className="py-10 text-center text-gray-300">
          © 2024 Little Lemon | All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
