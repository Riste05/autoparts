import bannerStyle from "./banner.module.css";

import img1 from "./image/bannerimg.png";

export const Banner = () => {
  return (
    <div className={bannerStyle.banner}>
      <img src={img1} alt="image" />
      <p>
        Bezbedna i brza isporaka na kupenite proizvodi do <br />
        <span>vasata adresa</span>
      </p>
    </div>
  );
};
