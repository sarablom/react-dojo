import React from "react";
import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom"
import Temple from "../assets/temple.svg";
import "./Navbar.css";

function Navbar() {
    const { logout, isPending } = useLogout();

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
            {!isPending && <button className="btn" onClick={logout}>Logout</button>}
            {isPending && <button className="btn" disabled>Logging out...</button>}
        </li>
      </ul>
  </div>;
}

export default Navbar;
