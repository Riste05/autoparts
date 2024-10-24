import bannerStyle from "./banner.module.css";

import img1 from "./image/bannerimg.png";

export const Banner = () => {
  return (
    <div className={bannerStyle.banner}>
      <img src={img1} alt="image" />
      <p>
        Безбедна и брза испорака на купените производи до <br />
        <span>вашата адреса</span>
      </p>
    </div>
  );
};
