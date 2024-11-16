import footerStyle from "./footer.module.css";

import footerImage from "./image/footer_img.jpg";

export const Footer = () => {
  return (
    <footer>
      <div className={footerStyle.container}>
        <div className={footerStyle.image}>
          <img src={footerImage} alt="" />
        </div>
      </div>
    </footer>
  );
};
