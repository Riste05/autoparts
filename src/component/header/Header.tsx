import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import headerStyle from "./header.module.css";

import { SliderComponent } from "../custom/customSlider/SliderComponent";
import { SwiperSlideComponent } from "../custom/customSlider/SwiperSlideComponent";

import img1 from "../header/image/img1.jpg";
import img2 from "../header/image/img2.jpg";
import img3 from "../header/image/img3.jpg";
import img4 from "../header/image/img4.jpg";
import img5 from "../header/image/img5.png";

export const Header = () => {
  const [slide, setSlide] = useState<number>(0);

  return (
    <header>
      <div className={headerStyle.container}>
        <nav className={headerStyle.nav}>
          <ul>
            <li>
              <a href="#">Delovi</a>
            </li>
            <li>
              <a href="#">Maslo</a>
            </li>
          </ul>
          <h1>Logo</h1>
          <ul>
            <li>
              <a href="#">Dostava</a>
            </li>
            <li>
              <a href="#">Prasanje</a>
            </li>
          </ul>
        </nav>
        <main>
          <SliderComponent slide={slide} />
          {/* //////////////////////////////////////////// */}
          {/* SWIPER */}
          <div className={headerStyle.wrapper}>
            <Swiper
              modules={[Autoplay]}
              loop={true}
              slidesPerView={3.5}
              speed={1000}
              // autoplay={{ delay: 4000 }}
              spaceBetween={50}
              onActiveIndexChange={(swiper) => {
                setSlide(swiper.realIndex);
              }}
              className={headerStyle.slider}
            >
              <SwiperSlide className={headerStyle.slider_item}>
                <SwiperSlideComponent
                  img={img2}
                  title="Кочионен систем"
                  text="Диск плочки, Дискови, Гуртни, Kлипчиња, црево за кочници"
                />
              </SwiperSlide>

              <SwiperSlide className={headerStyle.slider_item}>
                <SwiperSlideComponent
                  img={img1}
                  title="Менувач"
                  text="Сет кумплунг, Замаец, Друк лагер"
                />
              </SwiperSlide>

              <SwiperSlide className={headerStyle.slider_item}>
                <SwiperSlideComponent
                  img={img4}
                  title="Каиш и Затегачи"
                  text="Ребраст, Клинаст, Канален, Затегачи"
                />
              </SwiperSlide>

              <SwiperSlide className={headerStyle.slider_item}>
                <SwiperSlideComponent
                  img={img5}
                  title="Дихтунг"
                  text="Глава, Вентили, Усис, Издув, Гумици вентили, Гарнитури"
                />
              </SwiperSlide>

              <SwiperSlide className={headerStyle.slider_item}>
                <SwiperSlideComponent
                  img={img3}
                  title="Филтри"
                  text="Воздух, Кабина, Масло, Гориво"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </main>
      </div>
    </header>
  );
};
