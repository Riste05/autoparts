import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import headerStyle from "../header/header.module.css";
import logo from "../banner/image/bannerimg.png";

export const NavBar = () => {
  const [changeColorNav, setChangeColorNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setChangeColorNav(true);
      } else {
        setChangeColorNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
