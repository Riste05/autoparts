import { Link } from "react-router-dom";

import headerStyle from "../header/header.module.css";

export const NavBar = () => {
  return (
    <nav className={headerStyle.nav}>
      <ul>
        <li>
          <Link to="/delovi">Делови</Link>
        </li>
        <li>
          <Link to="/maslo">Масло</Link>
        </li>
      </ul>
      <Link to="/">Logo</Link>
      <ul>
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
