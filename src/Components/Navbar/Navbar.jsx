import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AiFillDashboard,
  AiOutlineAppstore,
  AiOutlineSmile,
} from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiSolidReport, BiMoney } from "react-icons/bi";

import "./Navbar.css";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  function handleNavOpen() {
    setNavOpen((open) => !open);
  }

  return (
    <nav className={`nav ${navOpen ? "open" : "close"}`}>
      <div className="nav-icon">
        <span className="icon" onClick={handleNavOpen}>
          {navOpen ? <span>&larr;</span> : <span>&rarr;</span>}
        </span>
      </div>
      <ul className={`nav__list `}>
        <li className="nav__list--item">
          <NavLink to="/welcome" className="nav__list--link">
            <span>
              <AiOutlineSmile className="icon" />
            </span>
            <span>Wecome</span>
          </NavLink>
        </li>
        <li className="nav__list--item">
          <NavLink to="/dashboard" className="nav__list--link">
            <span>
              <AiFillDashboard className="icon" />
            </span>
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li className="nav__list--item">
          <NavLink to="/tasks" className="nav__list--link">
            <span>
              <FaTasks className="icon" />
            </span>
            <span>Tasks</span>
          </NavLink>
        </li>
        <li className="nav__list--item">
          <NavLink to="/people" className="nav__list--link">
            <span>
              <BsFillPeopleFill className="icon" />
            </span>
            <span>People</span>
          </NavLink>
        </li>
        <li className="nav__list--item">
          <NavLink to="/reports" className="nav__list--link">
            <span>
              <BiSolidReport className="icon" />
            </span>
            <span>Reports</span>
          </NavLink>
        </li>
        <li className="nav__list--item">
          <NavLink to="/billing" className="nav__list--link">
            <span>
              <BiMoney className="icon" />
            </span>
            Billing
          </NavLink>
        </li>
        <li className="nav__list--item">
          <NavLink to="/integration" className="nav__list--link">
            <span>
              <AiOutlineAppstore className="icon" />
            </span>
            <span>Integration</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
