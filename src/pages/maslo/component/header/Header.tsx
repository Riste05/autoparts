import headerImage from "./image/oil-img.jpg";
import liquimoly from "./image/liquimoly.png";
import castrol from "./image/castrol.png";
import total from "./image/total.png";
import shell from "./image/shell.png";

import { CustomPageHeader } from "../../../../customPageComponent/customPageHeader/CustomPageHeader";

export const Header = () => {
  return (
    <CustomPageHeader
      headerImage={headerImage}
      img1={liquimoly}
      img2={castrol}
      img3={total}
      img4={shell}
    />
  );
};
