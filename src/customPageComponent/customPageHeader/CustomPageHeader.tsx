import { motion } from "framer-motion";

import { animateContainer } from "../../customAnimation/customAnimation";
import { animateHeaderItem } from "../../customAnimation/customAnimation";
import { animateHeaderPagesImage } from "../../customAnimation/customAnimation";

import styleHeader from "./customPageHeaderStyle.module.css";

type PageHeaderProps = {
  headerImage: string;
  oneImage?: boolean;
  removeImage?: boolean;
  partsName: string;
  text?: string;
  img1?: string;
  img2?: string;
  img3?: string;
  img4?: string;
};

export const CustomPageHeader = ({
  headerImage,
  oneImage,
  removeImage,
  partsName,
  text,
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
            <motion.h1 variants={animateHeaderItem}>{partsName}</motion.h1>
            <motion.p variants={animateHeaderItem}>{text}</motion.p>
          </motion.div>

          {!removeImage ? (
            <motion.div
              className={styleHeader.images}
              key="oilimage"
              variants={animateContainer}
              initial="hidden"
              animate="show"
            >
              {oneImage ? (
                <motion.div
                  className={
                    !oneImage ? styleHeader.img : styleHeader.one_image
                  }
                  variants={animateHeaderPagesImage}
                >
                  <img src={img1} alt="image" />
                </motion.div>
              ) : (
                <>
                  <motion.div
                    className={styleHeader.img}
                    variants={animateHeaderPagesImage}
                  >
                    <img src={img1} alt="image" />
                  </motion.div>
                  <motion.div
                    className={styleHeader.img}
                    variants={animateHeaderPagesImage}
                  >
                    <img src={img2} alt="image" />
                  </motion.div>
                  <motion.div
                    className={styleHeader.img}
                    variants={animateHeaderPagesImage}
                  >
                    <img src={img3} alt="image" />
                  </motion.div>
                  <motion.div
                    className={styleHeader.img}
                    variants={animateHeaderPagesImage}
                  >
                    <img src={img4} alt="image" />
                  </motion.div>
                </>
              )}
            </motion.div>
          ) : (
            <h1>CHAT-BOX</h1>
          )}
        </main>
      </div>
    </header>
  );
};
