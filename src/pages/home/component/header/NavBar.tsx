import { NavLink, Link } from "react-router-dom";

import headerStyle from "../header/header.module.css";
import logo from "../banner/image/bannerimg.png";

export const NavBar = () => {
  return (
    <nav className={headerStyle.nav}>
      <div className={headerStyle.logo}>
        <Link to="/">
          <img src={logo} alt="logoImg" />
        </Link>
      </div>

      <ul>
        <li>
          <NavLink
            to="/delovi"
            className={({ isActive }) =>
              isActive ? `${headerStyle.active}` : undefined
            }
          >
            Делови
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/maslo"
            className={({ isActive }) =>
              isActive ? `${headerStyle.active}` : undefined
            }
          >
            Масло
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dostava"
            className={({ isActive }) =>
              isActive ? `${headerStyle.active}` : undefined
            }
          >
            Достава
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/prasanje"
            className={({ isActive }) =>
              isActive ? `${headerStyle.active}` : undefined
            }
          >
            Прашања
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
