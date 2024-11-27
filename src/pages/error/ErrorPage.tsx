import { Link } from "react-router-dom";

import img from "../home/component/banner/image/bannerimg.png";
import errorStyle from "./errorPage.module.css";

export const ErrorPage = () => {
  return (
    <section>
      <div className={errorStyle.container}>
        <h1>Error 404</h1>
        <h2>Страната не е пронајдена</h2>
        <div className={errorStyle.home}>
          <p>Врати се на почетна страна</p>
          <Link to="/">
            <img src={img} alt="car image" />
          </Link>
        </div>
      </div>
    </section>
  );
};
