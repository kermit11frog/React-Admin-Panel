import { NavLink } from "react-router-dom"

import { MdOutlineLogout, MdDashboard } from "react-icons/md"
import { LuUsers2 } from "react-icons/lu";
import { LuShoppingBag } from "react-icons/lu";
import { FaCog } from "react-icons/fa";

import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__logo align-items">
                <img src="img/logo.png" alt="logo"/>
                <h2>Digikala</h2>
            </div>
            <ul className="sidebar__menu">
                <li>
                    <NavLink to="/" className={({isActive}) => isActive ? "active":""}><MdDashboard /> Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/users" className={({isActive}) => isActive ? "active":""}><LuUsers2 /> Users</NavLink>
                </li>
                <li>
                    <NavLink to="/products" className={({isActive}) => isActive ? "active":""}><LuShoppingBag /> Products</NavLink>
                </li>
                <li>
                    <NavLink to="/settings" className={({isActive}) => isActive ? "active":""}><FaCog /> Settings</NavLink>
                </li>
            </ul>
            <a className="sidebar__bottom" href="/">
                <MdOutlineLogout /> Logout
            </a>
        </div>
    )
}

export default Sidebar