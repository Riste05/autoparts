import { Link } from "react-router-dom";

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
          <Link to="/delovi">Делови</Link>
        </li>
        <li>
          <Link to="/maslo">Масло</Link>
        </li>
        <li>
          <Link to="#">Достава</Link>
        </li>
        <li>
          <Link to="#">Прашања</Link>
        </li>
      </ul>
    </nav>
  );
};
