import styleHeader from "./header.module.css";
import headerImage from "./image/oil-img.jpg";

export const Header = () => {
  return (
    <header>
      <div className={styleHeader.container}>
        <main className={styleHeader.main}>
          <div className={styleHeader.content}>
            <img src={headerImage} alt="image" />
          </div>
        </main>
      </div>
    </header>
  );
};
