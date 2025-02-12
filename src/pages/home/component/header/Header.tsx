import { useState } from "react";

import headerStyle from "./header.module.css";
import { SliderComponent } from "../custom/customSlider/SliderComponent";
import { SwiperSlideComponent } from "../custom/customSlider/SwiperSlideComponent";

export const Header = () => {
  const [slide, setSlide] = useState<number>(0);

  return (
    <header>
      <div className={headerStyle.container}>
        <main className={headerStyle.main}>
          <SliderComponent slide={slide} />
          {/* SWIPER */}
          <div className={headerStyle.wrapper}>
            <SwiperSlideComponent setSlide={setSlide} />
          </div>
        </main>
      </div>
    </header>
  );
};
