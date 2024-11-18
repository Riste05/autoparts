import { Link } from "react-router-dom";

import footerStyle from "./footer.module.css";

import logo from "../banner/image/bannerimg.png";

export const Footer = () => {
  return (
    <footer>
      <div className={footerStyle.container}>
        <div className={footerStyle.image}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className={footerStyle.content}>
          <p>
            <span>оригинални </span>делови
          </p>
          <p>
            <span>поволни </span>цени
          </p>
          <p>
            <span>брза </span>достава
          </p>
        </div>

        <div className={footerStyle.media}>
          <p>
            Контакт: <span>65165156</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
