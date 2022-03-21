import React from "react";
import { Link } from "react-router-dom"
import Temple from "../assets/temple.svg";
import "./Navbar.css";

function Navbar() {
  return <div className="navbar">
      <ul>
        <li className="logo">
            <img src={Temple} alt="Dojo logo, a temple" />
            <span>The Dojo</span>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
        <li>
            <Link to="/signup">Signup</Link>
        </li>
        <li>
            <button className="btn">Logout</button>
        </li>
      </ul>
  </div>;
}

export default Navbar;
