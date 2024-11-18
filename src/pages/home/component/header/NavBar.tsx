import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

import headerStyle from "../header/header.module.css";
import logo from "../banner/image/bannerimg.png";

export const NavBar = () => {
  const [changeColorNav, setChangeColorNav] = useState(false);

  function changeColorNavBar() {
    return window.scrollY > 350
      ? setChangeColorNav(true)
      : setChangeColorNav(false);
  }
  window.addEventListener("scroll", changeColorNavBar);

  return (
    <nav
      className={
        changeColorNav
          ? `${headerStyle.nav} ${headerStyle.active}`
          : headerStyle.nav
      }
    >
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
            to="/kontakt"
            className={({ isActive }) =>
              isActive ? `${headerStyle.active}` : undefined
            }
          >
            Контакт
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/prasaj"
            className={({ isActive }) =>
              isActive ? `${headerStyle.active}` : undefined
            }
          >
            Прашај
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
