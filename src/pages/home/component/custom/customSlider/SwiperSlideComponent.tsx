import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import headerStyle from "../../header/header.module.css";

import swiperData from "../../../../../data/swiperData";

type SwiperProps = {
  setSlide: React.Dispatch<React.SetStateAction<number>>;
};

export const SwiperSlideComponent = ({ setSlide }: SwiperProps) => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      slidesPerView={2.5}
      speed={1000}
      autoplay={{ delay: 4000 }}
      spaceBetween={50}
      onActiveIndexChange={(swiper) => {
        setSlide(swiper.realIndex);
      }}
      className={headerStyle.slider}
    >
      {swiperData.map((item) => (
        <SwiperSlide className={headerStyle.slider_item}>
          <img src={item.img} alt="image" className={headerStyle.img} />
          <div className={headerStyle.slider_content}>
            <h1>{item.title}</h1>
            <p>{item.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
