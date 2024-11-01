import brandsStyle from "./brends.module.css";
import brendData from "../../../../data/brandData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const Brends = () => {
  return (
    <section>
      <div className={brandsStyle.container}>
        <h1 className={brandsStyle.text}>Бренд</h1>

        <Swiper
          modules={[Autoplay]}
          loop
          slidesPerView={1}
          speed={2000}
          spaceBetween={50}
          breakpoints={{
            500: {
              slidesPerView: 1.5,
            },
            600: {
              slidesPerView: 2.5,
            },
            800: {
              slidesPerView: 3.5,
            },
            1100: {
              slidesPerView: 4.5,
            },
          }}
          autoplay={{
            delay: 0,
          }}
          className={brandsStyle["swiper-container"]}
        >
          {brendData.map((ele) => (
            <SwiperSlide className={brandsStyle["swiper-slide"]}>
              <img src={ele.img} alt="image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
