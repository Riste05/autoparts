import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import headerStyle from "./header.module.css";

import { SliderComponent } from "../custom/customSlider/SliderComponent";
import { SwiperSlideComponent } from "../custom/customSlider/SwiperSlideComponent";

import img1 from "../header/image/img1.webp";
import img2 from "../header/image/img2.webp";
import img3 from "../header/image/img3.jpg";

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
          {slide === 0 && (
            <SliderComponent
              img={img3}
              mainText="Se za vasiot"
              span="avtomobil 1"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
        possimus dolore, labore eaque culpa laudantium debitis itaque
        eos fugit, autem nostrum sed, maiores necessitatibus ipsam
        cupiditate totam accusamus sint neque."
              btn="Povekje"
            />
          )}

          {slide === 1 && (
            <SliderComponent
              img={img2}
              mainText="Se za vasiot"
              span="avtomobil 2"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
        possimus dolore, labore eaque culpa laudantium debitis itaque
        eos fugit, autem nostrum sed, maiores necessitatibus ipsam
        cupiditate totam accusamus sint neque."
              btn="Povekje"
            />
          )}

          {slide === 2 && (
            <SliderComponent
              img={img3}
              mainText="Se za vasiot"
              span="avtomobil 3"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
        possimus dolore, labore eaque culpa laudantium debitis itaque
        eos fugit, autem nostrum sed, maiores necessitatibus ipsam
        cupiditate totam accusamus sint neque."
              btn="Povekje"
            />
          )}

          {slide === 3 && (
            <SliderComponent
              img={img1}
              mainText="Se za vasiot"
              span="avtomobil 4"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
        possimus dolore, labore eaque culpa laudantium debitis itaque
        eos fugit, autem nostrum sed, maiores necessitatibus ipsam
        cupiditate totam accusamus sint neque."
              btn="Povekje"
            />
          )}

          {slide === 4 && (
            <SliderComponent
              img={img2}
              mainText="Se za vasiot"
              span="avtomobil 5"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
        possimus dolore, labore eaque culpa laudantium debitis itaque
        eos fugit, autem nostrum sed, maiores necessitatibus ipsam
        cupiditate totam accusamus sint neque."
              btn="Povekje"
            />
          )}

          {/* //////////////////////////////////////////// */}
          {/* SWIPER */}
          <div className={headerStyle.wrapper}>
            <Swiper
              modules={[Autoplay]}
              loop={true}
              slidesPerView={3.5}
              speed={1000}
              autoplay={{ delay: 4000 }}
              spaceBetween={50}
              onActiveIndexChange={(swiper) => {
                setSlide(swiper.realIndex);
              }}
              className={headerStyle.slider}
            >
              <SwiperSlide className={headerStyle.slider_item}>
                <SwiperSlideComponent
                  img={img2}
                  title="Disk Plocki"
                  text="Lorem ipsum dolor sit amet"
                />
              </SwiperSlide>

              <SwiperSlide className={headerStyle.slider_item}>
                <SwiperSlideComponent
                  img={img3}
                  title="Filtri"
                  text="Lorem ipsum dolor sit amet"
                />
              </SwiperSlide>

              <SwiperSlide className={headerStyle.slider_item}>
                <SwiperSlideComponent
                  img={img1}
                  title="Kvacilo"
                  text="Lorem ipsum dolor sit amet"
                />
              </SwiperSlide>

              <SwiperSlide className={headerStyle.slider_item}>
                <SwiperSlideComponent
                  img={img2}
                  title="Disk Plocki"
                  text="Lorem ipsum dolor sit amet"
                />
              </SwiperSlide>

              <SwiperSlide className={headerStyle.slider_item}>
                <SwiperSlideComponent
                  img={img3}
                  title="Disk"
                  text="Lorem ipsum dolor sit amet"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </main>
      </div>
    </header>
  );
};
