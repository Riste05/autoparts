import { CustomPageHeader } from "../../../../customPageComponent/customPageHeader/CustomPageHeader";

import headerImage from "./images/autoparts.jpg";
import disk from "./images/disk.png";
import kais from "./images/kais.png";
import kumplung from "./images/kumplung.png";
import filter from "./images/filter.png";

export const Header = () => {
  return (
    <CustomPageHeader
      headerImage={headerImage}
      img1={disk}
      img2={kais}
      img3={kumplung}
      img4={filter}
      partsName="Avto Delovi"
      text="Го олеснуваме информирањето и купувањето на автомобилски делови преку интернет.Во нашиот каталог можете да најдете само дел од нашата богата понуда на авто делови.Располагаме со сите видови на авто делови за сите типови на возила.За сите потребни авто делови можете да не исконтактира преку контакт броевите или да ни пишете mail"
    />
  );
};
