import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <nav className="flex items-center justify-between">
        <div className="text-white text-xl font-bold">My Website</div>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange-700" : "text-white hover:underline"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-orange-700" : "text-white hover:underline"
            }
          >
            About
          </NavLink>
          <NavLink to="/contact" className="text-white hover:underline">
            Contact Us
          </NavLink>
          <NavLink to="/cart" className="text-white hover:underline">
            Cart
          </NavLink>
        </div>
        <div className="space-x-4">
          <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-blue-200 focus:outline-none focus:ring focus:border-blue-300">
            Sign Up
          </button>
          <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-blue-200 focus:outline-none focus:ring focus:border-blue-300">
            Log In
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
