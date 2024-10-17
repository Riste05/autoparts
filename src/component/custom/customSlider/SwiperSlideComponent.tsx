import headerStyle from "../../header/header.module.css";

type SlideProps = {
  img: string;
  title: string;
  text: string;
};

export const SwiperSlideComponent = ({ img, title, text }: SlideProps) => {
  return (
    <>
      <img src={img} alt="image" className={headerStyle.img} />
      <div className={headerStyle.slider_content}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </>
  );
};
