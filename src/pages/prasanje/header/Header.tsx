import { CustomPageHeader } from "../../../customPageComponent/customPageHeader/CustomPageHeader";

import headerImage from "./image/question.jpg";
import ask from "./image/ask.png";

export const Header = () => {
  return (
    <CustomPageHeader
      headerImage={headerImage}
      removeImage
      img1={ask}
      partsName="Прашај"
    />
  );
};
