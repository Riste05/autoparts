import { motion } from "framer-motion";

import headerStyle from "../../header/header.module.css";
import { animateContainer } from "../customAnimation/customAnimation";
import { headerItem } from "../customAnimation/customAnimation";

type SliderProps = {
  img: string;
  mainText: string;
  span: string;
  text: string;
  btn: string;
};

export const SliderComponent = ({
  img,
  mainText,
  span,
  text,
  btn,
}: SliderProps) => {
  return (
    <div className={headerStyle.item}>
      <img src={img} alt="picture" className={headerStyle.img} />
      <motion.div
        className={headerStyle.content}
        key="item"
        variants={animateContainer}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={headerItem}>
          {mainText}
          <br />
          <span> {span}</span>
        </motion.h1>
        <motion.p variants={headerItem}>{text}</motion.p>
        <motion.button className={headerStyle.btn} variants={headerItem}>
          {btn}
        </motion.button>
      </motion.div>
    </div>
  );
};
