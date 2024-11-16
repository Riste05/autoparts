import { CustomPageHeader } from "../../../customPageComponent/customPageHeader/CustomPageHeader";

import headerImage from "./image/question.jpg";

export const Header = () => {
  return (
    <CustomPageHeader
      headerImage={headerImage}
      removeImage
      partsName="Прашај"
    />
  );
};
