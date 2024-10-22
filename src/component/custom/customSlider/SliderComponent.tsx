import { motion } from "framer-motion";

import headerStyle from "../../header/header.module.css";
import { animateContainer } from "../customAnimation/customAnimation";
import { animateHeaderItem } from "../customAnimation/customAnimation";

import sliderData from "../../../data/sliderData.tsx";

type SliderProps = {
  slide: number;
};

export const SliderComponent = ({ slide }: SliderProps) => {
  return (
    <>
      {sliderData.map((item, i) => (
        <>
          {slide === i && (
            <div className={headerStyle.item}>
              <img src={item.img} alt="picture" className={headerStyle.img} />
              <motion.div
                className={headerStyle.content}
                key="item"
                variants={animateContainer}
                initial="hidden"
                animate="show"
              >
                <motion.h1 variants={animateHeaderItem}>
                  {item.mainText}
                </motion.h1>
                <motion.p variants={animateHeaderItem}>{item.text}</motion.p>
                <motion.button
                  className={headerStyle.btn}
                  variants={animateHeaderItem}
                >
                  {item.btn}
                </motion.button>
              </motion.div>
            </div>
          )}
        </>
      ))}
    </>
  );
};
