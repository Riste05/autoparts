import { CustomPageHeader } from "../../../customPageComponent/customPageHeader/CustomPageHeader";

import headerImage from "./image/contact-bg.jpg";
import contact from "./image/contact.png";

export const Header = () => {
  return (
    <>
      <CustomPageHeader
        headerImage={headerImage}
        oneImage
        img1={contact}
        partsName="Контакт"
        text="Секоја инфорамација што ви е потребна можете да ја добиете преку контакт центарот, на mail да прашате или директно во chat-box.Секое прашање се обработува професионално од страна на нашите вработени, кои ја потрврдуваат достапноста на секој дел.Следува одговор"
      />
    </>
  );
};
