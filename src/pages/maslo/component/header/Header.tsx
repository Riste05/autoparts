import { motion } from "framer-motion";

import { animateContainer } from "../../../home/component/custom/customAnimation/customAnimation";
import { animateHeaderItem } from "../../../home/component/custom/customAnimation/customAnimation";
import { animateHeaderOilItem } from "../../../home/component/custom/customAnimation/customAnimation";

import styleHeader from "./header.module.css";
import headerImage from "./image/oil-img.jpg";
import liquimoly from "./image/liquimoly.png";
import castrol from "./image/castrol.png";
import total from "./image/total.png";
import shell from "./image/shell.png";

export const Header = () => {
  return (
    <header>
      <div className={styleHeader.container}>
        <div className={styleHeader["container-image"]}>
          <img src={headerImage} alt="image" />
        </div>
        <main className={styleHeader.main}>
          <motion.div
            className={styleHeader.content}
            variants={animateContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h1 variants={animateHeaderItem}>Моторно Масло</motion.h1>
            <motion.p variants={animateHeaderItem}>
              Моторно масло се користи за подмачкување на мотори со внатрешно
              согорување.Тие обично се состојат од базни масла засилено со разни
              адитиви, особено адитиви против абење, подобрувачи на индексот на
              вискозност.Главната функција на моторното масло е да го намали
              абењето на подвижните делови и да го чисти моторот од тиња и
              лакови.
            </motion.p>
          </motion.div>
          <motion.div
            className={styleHeader.images}
            key="oilimage"
            variants={animateContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div
              className={styleHeader.img}
              variants={animateHeaderOilItem}
            >
              <img src={liquimoly} alt="oil-image" />
            </motion.div>
            <motion.div
              className={styleHeader.img}
              variants={animateHeaderOilItem}
            >
              <img src={castrol} alt="oil-image" />
            </motion.div>
            <motion.div
              className={styleHeader.img}
              variants={animateHeaderOilItem}
            >
              <img src={total} alt="oil-image" />
            </motion.div>
            <motion.div
              className={styleHeader.img}
              variants={animateHeaderOilItem}
            >
              <img src={shell} alt="oil-image" />
            </motion.div>
          </motion.div>
        </main>
      </div>
    </header>
  );
};
