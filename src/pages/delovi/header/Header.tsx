import { CustomPageHeader } from "../../../customPageComponent/customPageHeader/CustomPageHeader";

import headerImage from "./images/autoparts.jpg";

// headerImage
// partsName
// text
// img1
// img2

export const Header = () => {
  return (
    <CustomPageHeader
      headerImage={headerImage}
      partsName="Avto Delovi"
      text="Во нашиот каталог можете да најдете само дел од нашата богата понуда на авто делови.За сите потребни авто делови можете да не исконтактира преку контакт броевите или да ни пишете mail"
    />
  );
};
