import { motion } from "framer-motion";

import barStyle from "./infoBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarSide,
  faOilCan,
  faAddressBook,
  faTruckFast,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

import { animateContainer } from "../custom/customAnimation/customAnimation";

const item = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { type: "spring" } },
};

export const InfoBar = () => {
  return (
    <article className={barStyle.article}>
      <motion.div
        className={barStyle.container}
        variants={animateContainer}
        key="item"
        initial="hidden"
        animate="show"
      >
        <motion.div className={barStyle.info} variants={item}>
          <FontAwesomeIcon icon={faCarSide} className={barStyle.icon} />
          <p>Авто Делови</p>
        </motion.div>
        <motion.div className={barStyle.info} variants={item}>
          <FontAwesomeIcon icon={faOilCan} className={barStyle.icon} />
          <p>Масла</p>
        </motion.div>
        <motion.div className={barStyle.info} variants={item}>
          <FontAwesomeIcon icon={faAddressBook} className={barStyle.icon} />
          <p>Контакт</p>
        </motion.div>
        <motion.div className={barStyle.info} variants={item}>
          <FontAwesomeIcon icon={faTruckFast} className={barStyle.icon} />
          <p>Достава</p>
        </motion.div>
        <motion.div className={barStyle.info} variants={item}>
          <FontAwesomeIcon icon={faComments} className={barStyle.icon} />
          <p>Прашања</p>
        </motion.div>
      </motion.div>
    </article>
  );
};
