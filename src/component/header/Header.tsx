import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import headerStyle from "./header.module.css";

import img1 from "../../image/img1.jpg";
import img2 from "../../image/img2.webp";
import img3 from "../../image/img3.webp";
import { useState } from "react";

const animateContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
    },
  },
  // exit: { opacity: 0 },
};

const item = {
  hidden: { opacity: 0, y: 70, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0)",
    transition: { duration: 1 },
  },
  // exit: { opacity: 0, y: -70, filter: "blur(10px)" },
};

export const Header = () => {
  const [slide, setSlide] = useState<string | null>(null);
  console.log(slide);

  return (
    <header className={headerStyle.header}>
      <main>
        {slide == "4" && (
          <div className={headerStyle.item}>
            <img src={img1} alt="picture" className={headerStyle.img} />
            <motion.div
              className={headerStyle.content}
              key="item"
              variants={animateContainer}
              initial="hidden"
              animate="show"
            >
              <motion.h1 variants={item}>
                SE ZA VASIOT <span>AVTOMOBIL 1</span>
              </motion.h1>
              <motion.p variants={item}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                possimus dolore, labore eaque culpa laudantium debitis itaque
                eos fugit, autem nostrum sed, maiores necessitatibus ipsam
                cupiditate totam accusamus sint neque.
              </motion.p>
              <motion.button className={headerStyle.btn} variants={item}>
                POVEKJE
              </motion.button>
            </motion.div>
          </div>
        )}

        {slide == "0" && (
          <div className={headerStyle.item}>
            <img src={img2} alt="picture" className={headerStyle.img} />
            <motion.div
              className={headerStyle.content}
              variants={animateContainer}
              initial="hidden"
              animate="show"
            >
              <motion.h1 variants={item}>
                SE ZA VASIOT <span>AVTOMOBIL 2</span>
              </motion.h1>
              <motion.p variants={item}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                possimus dolore, labore eaque culpa laudantium debitis itaque
                eos fugit, autem nostrum sed, maiores necessitatibus ipsam
                cupiditate totam accusamus sint neque.
              </motion.p>
              <motion.button className={headerStyle.btn} variants={item}>
                POVEKJE
              </motion.button>
            </motion.div>
          </div>
        )}

        {slide == "1" && (
          <div className={headerStyle.item}>
            <img src={img3} alt="picture" className={headerStyle.img} />
            <motion.div
              className={headerStyle.content}
              variants={animateContainer}
              initial="hidden"
              animate="show"
            >
              <motion.h1 variants={item}>
                SE ZA VASIOT <span>AVTOMOBIL 3</span>
              </motion.h1>
              <motion.p variants={item}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                possimus dolore, labore eaque culpa laudantium debitis itaque
                eos fugit, autem nostrum sed, maiores necessitatibus ipsam
                cupiditate totam accusamus sint neque.
              </motion.p>
              <motion.button className={headerStyle.btn} variants={item}>
                POVEKJE
              </motion.button>
            </motion.div>
          </div>
        )}

        {slide == "2" && (
          <div className={headerStyle.item}>
            <img src={img3} alt="picture" className={headerStyle.img} />
            <motion.div
              className={headerStyle.content}
              variants={animateContainer}
              initial="hidden"
              animate="show"
            >
              <motion.h1 variants={item}>
                SE ZA VASIOT <span>AVTOMOBIL 4</span>
              </motion.h1>
              <motion.p variants={item}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                possimus dolore, labore eaque culpa laudantium debitis itaque
                eos fugit, autem nostrum sed, maiores necessitatibus ipsam
                cupiditate totam accusamus sint neque.
              </motion.p>
              <motion.button className={headerStyle.btn} variants={item}>
                POVEKJE
              </motion.button>
            </motion.div>
          </div>
        )}

        {slide == "3" && (
          <div className={headerStyle.item}>
            <img src={img3} alt="picture" className={headerStyle.img} />
            <motion.div
              className={headerStyle.content}
              variants={animateContainer}
              initial="hidden"
              animate="show"
            >
              <motion.h1 variants={item}>
                SE ZA VASIOT <span>AVTOMOBIL 5</span>
              </motion.h1>
              <motion.p variants={item}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                possimus dolore, labore eaque culpa laudantium debitis itaque
                eos fugit, autem nostrum sed, maiores necessitatibus ipsam
                cupiditate totam accusamus sint neque.
              </motion.p>
              <motion.button className={headerStyle.btn} variants={item}>
                POVEKJE
              </motion.button>
            </motion.div>
          </div>
        )}

        {/* //////////////////////////////////////////// */}

        <div className={headerStyle.wrapper}>
          <Swiper
            modules={[Autoplay]}
            loop={true}
            slidesPerView={3.5}
            speed={1000}
            autoplay={{ delay: 2500 }}
            spaceBetween={50}
            // onSlideChange={(event) => console.log(event.slides)}
            onSlideChange={(event) => {
              {
                event.slides.map((ele) => {
                  setSlide(ele.getAttribute("data-swiper-slide-index"));
                });
              }
            }}
            className={headerStyle.slider}
          >
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

            <SwiperSlide className={headerStyle.slider_item}>
              <img src={img3} alt="image" className={headerStyle.img} />
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
