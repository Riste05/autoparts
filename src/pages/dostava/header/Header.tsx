import { CustomPageHeader } from "../../../customPageComponent/customPageHeader/CustomPageHeader";

import headerImage from "./image/delivery.jpg";
import truck from "./image/truck.png";

export const Header = () => {
  return (
    <CustomPageHeader
      headerImage={headerImage}
      oneImage
      img1={truck}
      partsName="Достава"
      text="Нарачаните производи се доставуваат во рок од 1-2 работни дена преку карго експрес во зависност во кој период од тековниот ден е направена нарачката.Секоја нарачка над 3000ден е бесплатна.За нарачка под 3000ден цената на пратката изнесува 150ден.Производот се плаќа при подигање на пратката(откуп) "
    />
  );
};
