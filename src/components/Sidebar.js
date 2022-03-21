import React from 'react'
import { NavLink } from "react-router-dom"
import "./Sidebar.css"
import DashboardIcon from "../assets/dashboard_icon.svg"
import AddIcon from "../assets/add_icon.svg"

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-content">
            <div className="user">
                <p>Hey user</p>
            </div>
            <nav className="links">
                <ul>
                    <li>
                        {/* NavLink gives an active class */}
                    <NavLink to="/">
                        <img src={DashboardIcon} alt="Dashboard icon" />
                        <span>Dashboard</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/create">
                        <img src={AddIcon} alt="Add project icon" />
                        <span>New project</span>
                    </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Sidebar