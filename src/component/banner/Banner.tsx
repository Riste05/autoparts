import bannerStyle from "./banner.module.css";

export const Banner = () => {
  return (
    <div className={bannerStyle.banner}>
      <p>
        Bezbedna i brza isporaka na kupenite proizvodi do <br />
        <span>vasata adresa</span>
      </p>
    </div>
  );
};
