import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import headerStyle from "./header.module.css";

import { SliderComponent } from "../custom/customSlider/SliderComponent";

import img1 from "../header/image/img1.webp";
import img2 from "../header/image/img2.webp";
import img3 from "../header/image/img3.jpg";

export const Header = () => {
  const [slide, setSlide] = useState<number>(0);

  return (
    <header>
      <main className={headerStyle.container}>
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
              <img src={img2} alt="image" className={headerStyle.img} />
              <div className={headerStyle.slider_content}>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={headerStyle.slider_item}>
              <img src={img3} alt="image" className={headerStyle.img} />
              <div className={headerStyle.slider_content}>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={headerStyle.slider_item}>
              <img src={img1} alt="image" className={headerStyle.img} />
              <div className={headerStyle.slider_content}>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={headerStyle.slider_item}>
              <img src={img2} alt="image" className={headerStyle.img} />
              <div className={headerStyle.slider_content}>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className={headerStyle.slider_item}>
              <img src={img3} alt="image" className={headerStyle.img} />
              <div className={headerStyle.slider_content}>
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </main>
    </header>
  );
};
