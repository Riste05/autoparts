import { motion } from "framer-motion";

import { animateContainer } from "../../customAnimation/customAnimation";
import { animateHeaderItem } from "../../customAnimation/customAnimation";
import { animateHeaderPagesImage } from "../../customAnimation/customAnimation";

import styleHeader from "./customPageHeaderStyle.module.css";

type PageHeaderProps = {
  headerImage: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
};

export const CustomPageHeader = ({
  headerImage,
  img1,
  img2,
  img3,
  img4,
}: PageHeaderProps) => {
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
              variants={animateHeaderPagesImage}
            >
              <img src={img1} alt="oil-image" />
            </motion.div>
            <motion.div
              className={styleHeader.img}
              variants={animateHeaderPagesImage}
            >
              <img src={img2} alt="oil-image" />
            </motion.div>
            <motion.div
              className={styleHeader.img}
              variants={animateHeaderPagesImage}
            >
              <img src={img3} alt="oil-image" />
            </motion.div>
            <motion.div
              className={styleHeader.img}
              variants={animateHeaderPagesImage}
            >
              <img src={img4} alt="oil-image" />
            </motion.div>
          </motion.div>
        </main>
      </div>
    </header>
  );
};
