import headerStyle from "../header/header.module.css";

export const NavBar = () => {
  return (
    <nav className={headerStyle.nav}>
      <ul>
        <li>
          <a href="#">Делови</a>
        </li>
        <li>
          <a href="#">Масло</a>
        </li>
      </ul>
      <h1>Logo</h1>
      <ul>
        <li>
          <a href="#">Достава</a>
        </li>
        <li>
          <a href="#">Прашања</a>
        </li>
      </ul>
    </nav>
  );
};
